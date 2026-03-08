import '../styles/About.css';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full-Stack Developer with a keen interest in building scalable web applications
              and creating intuitive user experiences. With expertise in modern web technologies, I transform
              ideas into elegant solutions.
            </p>
            <p>
              My journey in tech has taught me that great software is a combination of clean code, thoughtful design,
              and a deep understanding of user needs. I enjoy collaborating with teams and continuously learning new technologies.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>What I Do</h3>
              <ul>
                <li>Full-stack web application development</li>
                <li>UI/UX design and implementation</li>
                <li>REST API design and development</li>
                <li>Database design and optimization</li>
                <li>Responsive web design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
