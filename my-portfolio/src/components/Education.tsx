import "../styles/Education.css";
import { education } from "../data/profile";
import { useZigzagTimeline } from "../hooks/useZigzagTimeline";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Education() {
  const ref = useZigzagTimeline<HTMLDivElement>();
  const { lang } = useLanguage();

  return (
    <section id="pendidikan">
      <div className="wrap">
        <div className="section-head">
          <h2>{t(ui.education.heading, lang)}</h2>
          <span className="idx">{t(ui.education.eyebrow, lang)}</span>
        </div>
        <div className="zigzag" ref={ref}>
          <div className="zigzag-line-track" />
          <div className="zigzag-line-fill" />
          {education.map((e, i) => (
            <div
              className={`zigzag-row ${i % 2 === 0 ? "side-left" : "side-right"} ${e.current ? "current" : ""}`}
              key={e.degree}
            >
              <div className="zigzag-dot" />
              <div className="zigzag-card edu-card">
                <div className="edu-top">
                  <div className="edu-logo">
                    {e.logo ? (
                      <img src={e.logo} alt="" />
                    ) : (
                      <span className="edu-logo-fallback">{initials(e.institution)}</span>
                    )}
                  </div>
                  <div className="edu-degree">{e.degree}</div>
                </div>
                <div className="edu-field">{t(e.field, lang)}</div>
                <div className="edu-institution">
                  {e.institution} &middot; {t(e.location, lang)}
                </div>
                <div className="edu-period">{t(e.period, lang)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
