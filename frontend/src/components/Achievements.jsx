import '../styles/Achievements.css';

function Achievements() {
  return (
    <section className="section achievements" id="achievements">
        <div className="container">
            <div className="section-title-container">
                <h2 className="section-title">Achievements</h2>
                <p className="section-subtitle">
                    Recognitions and milestones I've reached along my journey
                </p>
            </div>
            <div className="achievements-container">
               

                <div className="achievement-card">
                    <div className="achievement-icon">
                        <i className="fa-solid fa-code-merge"></i>
                    </div>
                    <h3 className="achievement-title">GitHub Contributions</h3>
                    <p className="achievement-description">
                        Actively contributed to open-source projects on GitHub, shared reusable code libraries, and consistently maintained personal repositories featuring full-stack applications, helping developers learn and collaborate globally.
                    </p>
                </div>
                
                <div className="achievement-card">
                    <div className="achievement-icon">
                        <i className="fa-duotone fa-thin fa-file-certificate"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" width="36" height="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
<polyline points="11.25 1.75,2.75 1.75,2.75 13.25,5.25 13.25"/>
<polyline points="8.75 9.75,8.25 14.25,10.50 13.25,12.75 14.25,12.25 9.75"/>
<circle cx="10.5" cy="7.5" r="2.75"/>
</svg></i>
                    </div>
                    <h3 className="achievement-title">Full Stack Developer- Certification</h3>
                    <p className="achievement-description">
                        Completed a comprehensive Full Stack Developer certification program from Quality Thoughts, mastering front-end and back-end technologies, and demonstrating proficiency in building dynamic web applications with React, Java, Spring Boot, and RESTful APIs.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Achievements;
