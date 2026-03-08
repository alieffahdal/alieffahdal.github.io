import "../styles/About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am an IT Lecturer with a passion for educating and mentoring the
              next generation of technology professionals. With extensive
              experience in both academic teaching and industry practice, I
              bridge the gap between theoretical knowledge and practical
              application.
            </p>
            <p>
              My teaching philosophy centers on student-centered learning,
              hands-on projects, and real-world problem-solving. I believe in
              creating an inclusive classroom environment where every student
              can thrive and develop critical thinking skills.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years Teaching</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Taught</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Publications</span>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Academic Focus</h3>
              <ul>
                <li>Software Engineering & Design Patterns</li>
                <li>Web Development & Full-Stack Technologies</li>
                <li>Database Management & SQL Optimization</li>
                <li>IT Project Management</li>
                <li>Research in emerging IT technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
