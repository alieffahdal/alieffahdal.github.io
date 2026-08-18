import "../styles/Experience.css";
import { experience } from "../data/profile";
import { useZigzagTimeline } from "../hooks/useZigzagTimeline";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

export default function Experience() {
  const ref = useZigzagTimeline<HTMLDivElement>();
  const { lang } = useLanguage();

  return (
    <section id="pengalaman">
      <div className="wrap">
        <div className="section-head">
          <h2>{t(ui.experience.heading, lang)}</h2>
          <span className="idx">{t(ui.experience.eyebrow, lang)}</span>
        </div>
        <div className="zigzag" ref={ref}>
          <div className="zigzag-line-track" />
          <div className="zigzag-line-fill" />
          {experience.map((group, i) => (
            <div className={`zigzag-row ${i % 2 === 0 ? "side-left" : "side-right"}`} key={group.label.id}>
              <div className="zigzag-dot" />
              <div className="zigzag-card exp-card">
                <span className="exp-label">{t(group.label, lang)}</span>
                {group.items.map((item) => (
                  <div className="exp-item" key={item.role.id + item.org.id}>
                    <div className={`exp-period ${item.current ? "current" : ""}`}>{t(item.period, lang)}</div>
                    <div className="exp-role">{t(item.role, lang)}</div>
                    <div className="exp-org-row">
                      {item.logo && (
                        <span className="exp-logo">
                          <img src={item.logo} alt="" />
                        </span>
                      )}
                      <div className="exp-org">{t(item.org, lang)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
