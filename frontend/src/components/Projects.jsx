import projectImageThumbnail6  from '../images/thumbnail6.jpg';
import '../styles/Projects.css';
import projectImageThumbnail7  from '../images/automatic-toll-collection-500x500.jpg';

function Projects() {
  return (
    <section id="projects" className="section projects">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">
                    My Projects
                </h2>
                <p className="section-subtitle">
                    A showcase of my work and accomplishments.
                </p>
            </div>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-image">
                        <img src={projectImageThumbnail6} alt="Course project thumbnail" />
                        <div className="project-overlay">

                        </div>

                        <div className="project-tags">
                        <span className="project-tag">Spring Boot</span>
                        <span className="project-tag">ReactJs</span>
                        <span className="project-tag">Data JPA</span>
                        <span className="project-tag">MySQL</span>
                        <span className="project-tag">REST API</span>
                        <span className="project-tag">Git</span>
                        <span className="project-tag">Postman</span>
                        </div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">
                        Employee Management system - with ReactJs and Spring Boot
                        </h3>

                        <p className="project-description">
                        Learn to create production-grade REST APIs that connect to a MySQL
                        database through Data JPA.
                        </p>

                        <div className="project-links">
                        <a
                            href="https://github.com/Rehansheikh78/Employee-Management-System"
                            className="project-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github" aria-hidden="true"></i> View Code
                        </a>

                        
                        </div>
                    </div>
                    </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src={projectImageThumbnail7} alt="Course project thumbnail" />
                        <div className="project-overlay">
                            
                        </div>

                        <div className="project-tags">
                        <span className="project-tag">AngularJs</span>
                        <span className="project-tag">ExpressJs</span>
                        <span className="project-tag">Cors</span>
                        <span className="project-tag">Postman</span>
                        </div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">
                        Toll Management with Angular and Express
                        </h3>

                        <p className="project-description">
                        This project is a Toll Management System that allows users to manage 
                        toll collection and vehicle information.
                        </p>

                        <div className="project-links">
                        <a
                            href="https://github.com/Rehansheikh78/Toll-Plaza-management"
                            className="project-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github" aria-hidden="true"></i> View Code
                        </a>

                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
