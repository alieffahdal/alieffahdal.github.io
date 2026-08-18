import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import portrait from "../assets/alief-portrait.jpg";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

const LINKS = [
  { id: "about", label: ui.nav.about },
  { id: "riset", label: ui.nav.riset },
  { id: "publikasi", label: ui.nav.publikasi },
  { id: "pengalaman", label: ui.nav.pengalaman },
  { id: "proyek", label: ui.nav.proyek },
  { id: "pendidikan", label: ui.nav.pendidikan },
  { id: "kontak", label: ui.nav.kontak },
];

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : null;
}

function applyTheme(theme: Theme | null) {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPrefersDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSystemPrefersDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // the theme actually rendered right now: explicit override wins, otherwise
  // it follows the OS preference (matches the CSS cascade in index.css)
  const effectiveTheme: Theme = theme ?? (systemPrefersDark ? "dark" : "light");

  const toggleTheme = () => {
    const next: Theme = effectiveTheme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("theme", next);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${solid ? "solid" : ""}`}>
      <div className="wrap navbar-container">
        <button className="navbar-brand" onClick={() => scrollToSection("home")}>
          <img className="brand-glyph" src={portrait} alt="" />
          <span className="brand-name">Alief Fahdal</span>
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t(ui.nav.openMenuAria, lang)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)} className="nav-link">
                  {t(link.label, lang)}
                </button>
              </li>
            ))}
          </ul>
          <button className="lang-toggle" onClick={toggleLang} aria-label={t(ui.lang.switchToEn, lang)}>
            {lang === "id" ? "EN" : "ID"}
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={effectiveTheme === "dark" ? t(ui.theme.enableLight, lang) : t(ui.theme.enableDark, lang)}
          >
            <span className="theme-toggle-dot" aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}
