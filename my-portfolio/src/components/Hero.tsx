import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Welcome to{" "}
            <span className="gradient-text">Prof. Alief Fahdal's</span> Office
          </h1>
          <p className="hero-subtitle">
            IT Lecturer | Researcher | Educator | Tech Innovator
          </p>
          <p className="hero-description">
            Dedicated to fostering the next generation of IT professionals
            through engaging education, cutting-edge research, and practical
            industry experience.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
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
