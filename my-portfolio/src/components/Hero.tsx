import "../styles/Hero.css";
import { profile } from "../data/profile";
import { useSplitReveal } from "../hooks/useSplitReveal";
import { useMagnetic } from "../hooks/useMagnetic";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";
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
  const { lang } = useLanguage();

  return (
    <header className="hero" id="home">
      <Blobs />
      <div className="wrap hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow">
              {t(profile.role, lang)} &middot; {t(profile.affiliation, lang)}
            </span>
            <span className="cursor" aria-hidden="true"></span>
          </div>
          <h1 className="statement" ref={statementRef}>
            {profile.name}, {profile.credentials}
          </h1>
          <p className="bio">{t(profile.bio, lang)}</p>
          <div className="hero-actions">
            <MagneticLink
              className="btn primary"
              href="#pengalaman"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pengalaman")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t(ui.hero.viewExperience, lang)} &#8594;
            </MagneticLink>
            <MagneticLink
              className="btn"
              href="https://scholar.google.com/citations?user=-XzpS1MAAAAJ&hl=en"
            >
              {t(ui.hero.scholar, lang)} &#8599;
            </MagneticLink>
            <MagneticLink
              className="btn"
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t(ui.hero.contact, lang)}
            </MagneticLink>
          </div>
        </div>
        <div className="hero-visual">
          <HeroCharacter />
        </div>
      </div>
      <div className="scrollcue">
        <span>{t(ui.hero.scroll, lang)}</span>
        <span className="chev"></span>
      </div>
    </header>
  );
}
