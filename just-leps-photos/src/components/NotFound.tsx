import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>
      <h1>Page not found</h1>
      <p>The photo or page you're looking for doesn't exist.</p>
      <Link to="/" className="hero-cta">
        Back to gallery
      </Link>
    </section>
  );
}
