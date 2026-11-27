import { useState } from 'react';

import '../styles/Contact.css';


const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus('');
    setSent(false);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('Add your Web3Forms access key to frontend/.env and restart the frontend.');
      setSending(false);
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'Rehan Sheikh Portfolio',
          subject: 'New portfolio contact message',
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || result.body?.message || 'Could not send your message.');
      }
      form.reset();
      setStatus('Thanks — your message has been sent.');
      setSent(true);
      window.setTimeout(() => setSent(false), 2500);
    } catch (error) {
      setStatus(error.message || 'Could not send your message. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section contact" id="contact">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-heading">Let's Build Something Amazing Together</h3>
                    <p className="contact-text">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
                    </p>
                    <div className="contact-links">
                        <a href="tel:+917887960029" className="contact-link">
                            <div className="contact-link-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-link-text">
                                <span className="contact-link-label">Phone</span>
                                <span className="contact-link-value">+91 7887960029</span>
                            </div>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mhdrehan0029%40gmail.com&subject=Portfolio%20inquiry" className="contact-link" target="_blank" rel="noreferrer" aria-label="Email Rehan">
                            <div className="contact-link-icon">
                                <i className="fas fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div className="contact-link-text">
                                <span className="contact-link-label">Email</span>
                                <span className="contact-link-value">mhdrehan0029@gmail.com</span>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/rehan-sheikh-917806224" target="_blank" className="contact-link">
                            <div className="contact-link-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <div className="contact-link-text">
                                <span className="contact-link-label">LinkedIn</span>
                                <span className="contact-link-value">rehan-sheikh-917806224</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" id="name" className="form-control" placeholder="John Doe" name="name" minLength="2" maxLength="80" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="email" id="email" className="form-control" placeholder="john@example.com" name="email" maxLength="254" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea id="message" className="form-control" placeholder="How can I help you?" name="message" minLength="10" maxLength="3000" required></textarea>
                        </div>
                        <div aria-hidden="true" style={{ display: 'none' }}>
                            <label htmlFor="website">Leave this field empty</label>
                            <input type="checkbox" id="website" name="botcheck" tabIndex="-1" autoComplete="off" />
                        </div>
                        <button type="submit" className={`btn btn-primary ${sent ? 'is-success' : ''}`} disabled={sending}>
                            {sending ? 'Sending…' : 'Send Message'} <i className="fas fa-paper-plane"></i>
                        </button>
                        {status && <p role="status">{status}</p>}
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;
