import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#home" className="footer-logo">Rehan Sheikh</a>
                    <p className="footer-text">
                        Passionate about solving complex problems through code and creating innovative solutions that make a difference.
                    </p>
                    <div className="footer-social">
                        <a href="tel:+917887960029" className="social-link" aria-label="phone">
                            <i className="fa-solid fa-phone-flip" aria-hidden="true"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mhdrehan0029%40gmail.com" className="social-link" target="_blank" rel="noreferrer" aria-label="Email Rehan">
                            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rehan-sheikh-917806224" className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/Rehansheikh78" className="social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fa-brands fa-github" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-links-container">
                    <h3 className="footer-heading">Quick Links</h3>
                    <div className="footer-links">
                        <a href="#home" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Home
                        </a>
                        <a href="#about" className="footer-link">
                            <i className="fas fa-chevron-right"></i> About
                        </a>
                        <a href="#projects" className="footer-link">
                            <i className="fas fa-chevron-right"></i> My Work
                        </a>
                        <a href="#experience" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Experience
                        </a>
                        <a href="#achievements" className="footer-link">
                            <i className="fas fa-chevron-right"></i> Achievements
                        </a>
                    </div>
                </div>
                <div className="footer-links-container">
                    <h3 className="footer-heading">Quick Links</h3>
                    <div className="footer-links">
                        
                        <a href="https://www.linkedin.com/in/rehan-sheikh-917806224" className="footer-link">
                            <i className="fas fa-chevron-right"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Rehan Sheikh. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
