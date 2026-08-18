import "../styles/Hero.css";
import { profile } from "../data/profile";
import { useSplitReveal } from "../hooks/useSplitReveal";
import { useMagnetic } from "../hooks/useMagnetic";
import Blobs from "./Blobs";
import HeroCharacter from "./HeroCharacter";

function MagneticLink({
  className,
  href,
  onClick,
  children,
}: {
  className: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}) {
  // wrapper handles the magnetic pull; inner <a> keeps its own hover style
  const magneticRef = useMagnetic<HTMLDivElement>(0.3);
  return (
    <div className="magnetic-wrap" ref={magneticRef}>
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    </div>
  );
}

export default function Hero() {
  const statementRef = useSplitReveal<HTMLHeadingElement>();

  return (
    <header className="hero" id="home">
      <Blobs />
      <div className="wrap hero-content">
        <div className="hero-text">
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
            <MagneticLink
              className="btn primary"
              href="#pengalaman"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pengalaman")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat pengalaman &#8594;
            </MagneticLink>
            <MagneticLink
              className="btn"
              href="https://scholar.google.com/citations?user=-XzpS1MAAAAJ&hl=en"
            >
              Google Scholar &#8599;
            </MagneticLink>
            <MagneticLink
              className="btn"
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Kontak
            </MagneticLink>
          </div>
        </div>
        <div className="hero-visual">
          <HeroCharacter />
        </div>
      </div>
      <div className="scrollcue">
        <span>scroll</span>
        <span className="chev"></span>
      </div>
    </header>
  );
}
