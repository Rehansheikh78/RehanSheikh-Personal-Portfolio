import '../styles/Experience.css';

function Experience() {
  return (
    <section className="section experience" id="experience">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    My professional journey and educational background
                </p>
            </div>
            <div className="timeline">

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">Sept 2025 - March 2026</div>
                        <h3 className="timeline-title">Intern - Java | React | Full Stack</h3>
                        <h4 className="timeline-subtitle">Quality Thoughts</h4>
                        <p className="timeline-description">
                            Worked on projects involving Java, Spring Boot, React, and full-stack development. Focused on project debugging, interview preparation, and gaining experience in the software industry.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">May 2024 - July 2024</div>
                        <h3 className="timeline-title">Angular Intern</h3>
                        <h4 className="timeline-subtitle">S2P </h4>
                        <p className="timeline-description">
                            Gained hands-on experience in Angular development, working on real-world projects and enhancing my skills in front-end development. Focused on building responsive and user-friendly web applications.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-date">Sept 2024 - Oct 2024</div>
                        <h3 className="timeline-title">Full Stack PHP - Intern</h3>
                        <h4 className="timeline-subtitle">Intechzia</h4>
                        <p className="timeline-description">
                            Gained hands-on experience in full-stack PHP development, working on real-world projects and enhancing my skills in backend and frontend development.
                        </p>
                    </div>
                </div>

               
            </div>
        </div>
    </section>
  )
}

export default Experience
