import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} Prof. Alief Fahdal. All rights reserved. |
            Department of Information Technology
          </p>
          <div className="social-links">
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              ResearchGate
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alieffahdal"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
