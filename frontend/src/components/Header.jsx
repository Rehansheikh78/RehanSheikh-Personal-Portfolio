import {useState} from 'react';


import '../styles/Header.css';

function Header() {

  const[menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo"><a href="#home">R.<span>S.</span></a></div>
        
        <nav className="nav" aria-label="Main navigation">
          
          <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#resume" className="nav-link">Resume</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#contact" className="nav-link hire-me-link">Hire Me</a>
            
          </div>
        
        </nav>

       <button
          className="mobile-menu-btn"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)} >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
      </button>
      </div>
    </header>
  );
}

export default Header;
