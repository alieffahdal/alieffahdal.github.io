import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="gradient-text">Alief Fahdal</span></h1>
          <p className="hero-subtitle">Full-Stack Developer | UI/UX Enthusiast | Problem Solver</p>
          <p className="hero-description">
            I build beautiful, functional web applications with modern technologies. 
            Passionate about creating exceptional user experiences and writing clean code.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-content">
              <span className="code-bracket">&lt;</span>
              <span>Developer</span>
              <span className="code-bracket">/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
