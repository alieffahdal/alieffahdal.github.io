export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-portrait" aria-hidden="true" />
        <div className="about-text">
          <p className="section-kicker">About</p>
          <h2>Hi, I'm Leps.</h2>
          <p>
            I'm a hobbyist photographer who likes wandering around cities and
            trails with a camera, looking for light, color, and small
            everyday moments worth keeping. This page is a placeholder bio
            &mdash; edit <code>src/components/About.tsx</code> to tell your
            own story.
          </p>
          <div className="about-stats">
            <div>
              <span className="about-stat-value">50+</span>
              <span className="about-stat-label">Shoots</span>
            </div>
            <div>
              <span className="about-stat-value">4</span>
              <span className="about-stat-label">Genres</span>
            </div>
            <div>
              <span className="about-stat-value">3</span>
              <span className="about-stat-label">Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
