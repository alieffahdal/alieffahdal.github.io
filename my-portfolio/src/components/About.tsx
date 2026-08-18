import "../styles/About.css";
import { profile, stats } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";
import portrait from "../assets/alief-portrait.jpg";

export default function About() {
  const bodyRef = useScrollReveal<HTMLDivElement>();
  const { lang } = useLanguage();

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>{t(ui.about.heading, lang)}</h2>
          <span className="idx">{t(ui.about.eyebrow, lang)}</span>
        </div>

        <div className="about-body" ref={bodyRef}>
          <div className="about-portrait">
            <img src={portrait} alt={profile.name} />
          </div>
          <div className="about-main">
            {t(profile.bioDetailed, lang)
              .split("\n\n")
              .map((paragraph, i) => (
                <p className="about-bio" key={i}>
                  {paragraph}
                </p>
              ))}
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label.id}>
                  <b>
                    {s.value}
                    {s.suffix}
                  </b>
                  <span>{t(s.label, lang)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
