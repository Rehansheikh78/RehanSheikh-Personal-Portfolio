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
            </div>
        </div>
    </section>
  );
}

export default Achievements;
