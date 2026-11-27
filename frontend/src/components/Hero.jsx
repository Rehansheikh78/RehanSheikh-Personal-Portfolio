
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import profileImage from '../images/Thoughtful Tech Office Portrait.jpg';

import '../styles/Hero.css';

function Hero() {
  const [successButton, setSuccessButton] = useState('');

  function flashSuccess(button) {
    setSuccessButton(button);
    window.setTimeout(() => setSuccessButton(''), 2500);
  }

  return (
    <div>
      <section id="home" className="hero" >
        <div className="hero-background" aria-hidden="true" />
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-greeting">Hi, Im</div>
                    <h1 className="hero-title">
                        <span className="gradient-text">Rehan Sheikh</span>
                    </h1>
                    <h3 className="hero-subtitle">Full Stack Developer</h3>
                    <p className="hero-description">
                        Passionate about solving complex problems through code and creating innovative solutions that make a difference.
                    </p>
                    <div className="hero-buttons">
                        <a className={`btn btn-primary ${successButton === 'work' ? 'is-success' : ''}`} onClick={() => flashSuccess('work')} href="#projects">
                            view my work<i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a className={`btn btn-outline ${successButton === 'contact' ? 'is-success' : ''}`} onClick={() => flashSuccess('contact')} href="#contact">
                            Get in touch
                        </a>
                    </div>
                    <div className="social-links" aria-label="Social links">
                        <a href="tel:+917887960029" className="social-link" aria-label="phone">
                            <i className="fa-solid fa-phone-flip" aria-hidden="true"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mhdrehan0029%40gmail.com" className="social-link" target="_blank" rel="noreferrer" aria-label="Email Rehan">
                            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rehan-sheikh-917806224" className="social-link" target="_blank"  aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/Rehansheikh78" className="social-link" target="_blank"  aria-label="GitHub">
                            <i className="fa-brands fa-github" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-visual-inner">
                        <div className="hero-visual-frame">
                            <img src={profileImage} alt="Profile" style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: '15px' }} />

                        </div>
                        <div className="hero-stats stats-1">
                            <div className="hero-stats-icon">
                                <i className="fa-solid fa-code" aria-hidden="true"></i>
                            </div>
                            <div className="hero-stats-text">
                                <div className="hero-stats-label">Developer</div>
                                <div className="hero-stats-value"></div>
                            </div>
                        </div>
                        <div className="hero-stats stats-2">
                            <div className="hero-stats-icon">
                                <i className="fa-solid fa-award" aria-hidden="true"></i>
                            </div>
                            <div className="hero-stats-text">
                                <div className="hero-stats-label">Awards</div>
                                <div className="hero-stats-value">10+</div>
                            </div>
                        </div>    
                    </div>

                </div>
            </div>
            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="scroll-indicator-line">
                    <div className="scroll-indicator-dot"></div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Hero;
