import { useState } from 'react';
import '../styles/Resume.css';

function Resume() {
  const [successButton, setSuccessButton] = useState('');

  function flashSuccess(button) {
    setSuccessButton(button);
    window.setTimeout(() => setSuccessButton(''), 2500);
  }

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            Download a copy of my resume.
          </p>
        </div>

        <div className="resume-actions">
          <a className={`btn btn-primary ${successButton === 'download' ? 'is-success' : ''}`} onClick={() => flashSuccess('download')} href="/resume.pdf" download>
            Download Resume{" "}
            <i className="fa-solid fa-download" aria-hidden="true"></i>
          </a>

          <a className={`btn btn-outline ${successButton === 'hire' ? 'is-success' : ''}`} onClick={() => flashSuccess('hire')} href="#contact">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
