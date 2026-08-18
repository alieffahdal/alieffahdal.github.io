import "../styles/Teaching.css";
import { teaching, profile } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

export default function Teaching() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.05, childSelector: ".course-chip" });
  const { lang } = useLanguage();

  return (
    <section id="mengajar">
      <div className="wrap">
        <div className="section-head">
          <h2>{t(ui.teaching.heading, lang)}</h2>
          <span className="idx">{t(ui.teaching.eyebrow, lang)}</span>
        </div>
        <p className="teaching-institution">{t(profile.affiliation, lang)}</p>
        <div className="course-grid" ref={ref}>
          {teaching.map((course) => (
            <span className="course-chip" key={course.name.id}>
              {t(course.name, lang)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
