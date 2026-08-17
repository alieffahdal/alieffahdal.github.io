import "../styles/Hero.css";
import HeroScene from "./HeroScene";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <HeroScene />
      <div className="wrap hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow">
            {profile.role} &middot; {profile.affiliation}
          </span>
          <span className="cursor" aria-hidden="true"></span>
        </div>
        <h1 className="statement">
          Dari ruang kelas ke sistem pemerintahan — merancang solusi digital yang{" "}
          <em>benar-benar dipakai.</em>
        </h1>
        <div className="who-line">
          <b>
            {profile.name}, {profile.credentials}
          </b>{" "}
          — {profile.currentHighlight}.
        </div>
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
