
import '../styles/About.css';

function About() {
  return (
    <section className="section about" id="about">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">A little about who I am and what I do.</p>
            </div>
        
            <div className="about-container">
                <div className="about-content">
                    <div className="about-tagline">
                        My Background
                    </div>

                        <h3 className="about-heading">Developer by profession, lifelong learner by passion.
                        </h3>
                        <p className="about-text">
                           I'm Rehan Sheikh, a full stack developer who builds web applications with React, Java, and Spring Boot. I enjoy turning ideas into clear, reliable products and solving practical problems through thoughtful design and code.
                        </p>

                        <p className="about-text">
                            Outside of coding, I enjoy Traveling, Reading Books, and Exploring new places.
                            I'm currently focused on improving my full-stack skills and building projects.
                        </p>
                                            
                        
                </div>
                <div className="skills-container">
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fab fa-java"></i></div>
                        <div className="skill-name">Java</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fas fa-code"></i></div>
                        <div className="skill-name">Spring Boot</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fab fa-js"></i></div>
                        <div className="skill-name">JavaScript</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fab fa-react"></i></div>
                        <div className="skill-name">React</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-brands fa-html5"></i><i className="fa-brands fa-css3-alt"></i></div>
                        <div className="skill-name">HTML & CSS</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-brands fa-tailwind-css"></i></div>
                        <div className="skill-name">Tailwind CSS</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-brands fa-bootstrap"></i></div>
                        <div className="skill-name">Bootstrap</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-brands fa-angular"></i></div>
                        <div className="skill-name">Angular</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fas fa-database"></i></div>
                        <div className="skill-name">SQL</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-server"></i></div>
                        <div className="skill-name">MySQL</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-cloud"></i></div>
                        <div className="skill-name">AWS</div>
                    </div>
                    <div className="skill-item">
                        <div className="skill-icon"><i className="fa-solid fa-code-branch"></i></div>
                        <div className="skill-name">Git</div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </section>
  );
}

export default About;
