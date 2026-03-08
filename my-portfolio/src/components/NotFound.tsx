import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <section className="not-found">
        <div className="container">
          <div className="not-found-content">
            <div className="error-code">
              <span className="code-line">404</span>
              <span className="code-desc">Page Not Found</span>
            </div>
            
            <div className="error-message">
              <h1>Oops! Page not found</h1>
              <p>
                The page you're looking for seems to have wandered off. 
                It might have been moved, renamed, or never existed in the first place.
              </p>
              
              <div className="error-illustration">
                <div className="floating-robot">
                  <div className="robot-head">🤖</div>
                  <div className="robot-body"></div>
                  <div className="robot-legs"></div>
                </div>
              </div>

              <div className="error-actions">
                <button 
                  onClick={() => navigate('/')}
                  className="btn btn-primary"
                >
                  Back to Home
                </button>
                <button 
                  onClick={() => window.history.back()}
                  className="btn btn-secondary"
                >
                  Go Back
                </button>
              </div>

              <div className="menu-links">
                <p>Or navigate to:</p>
                <div className="quick-links">
                  <a href="/#home">Home</a>
                  <a href="/#about">About</a>
                  <a href="/#courses">Courses</a>
                  <a href="/#research">Research</a>
                  <a href="/#contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
