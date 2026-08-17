import "../styles/Hero.css";
import { profile } from "../data/profile";
import { useSplitReveal } from "../hooks/useSplitReveal";

export default function Hero() {
  const statementRef = useSplitReveal<HTMLHeadingElement>();

  return (
    <header className="hero" id="home">
      <div className="wrap hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow">
            {profile.role} &middot; {profile.affiliation}
          </span>
          <span className="cursor" aria-hidden="true"></span>
        </div>
        <h1 className="statement" ref={statementRef}>
          {profile.name}, {profile.credentials}
        </h1>
        <p className="bio">{profile.bio}</p>
        <div className="hero-actions">
          <a
            className="btn primary"
            href="#pengalaman"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("pengalaman")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Lihat pengalaman &#8594;
          </a>
          <a
            className="btn"
            href="https://scholar.google.com/citations?user=-XzpS1MAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar &#8599;
          </a>
          <a
            className="btn"
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Kontak
          </a>
        </div>
      </div>
      <div className="scrollcue">
        <span>scroll</span>
        <span className="chev"></span>
      </div>
    </header>
  );
}
