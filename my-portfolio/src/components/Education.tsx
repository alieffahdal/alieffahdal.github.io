import "../styles/Education.css";
import { education } from "../data/profile";
import { useZigzagTimeline } from "../hooks/useZigzagTimeline";

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

  return (
    <section id="pendidikan">
      <div className="wrap">
        <div className="section-head">
          <h2>Pendidikan</h2>
          <span className="idx">07 &mdash; riwayat akademik</span>
        </div>
        <div className="zigzag" ref={ref}>
          <div className="zigzag-line-track" />
          <div className="zigzag-line-fill" />
          {education.map((e, i) => (
            <div
              className={`zigzag-row ${i % 2 === 0 ? "side-left" : "side-right"} ${
                e.period.includes("sekarang") ? "current" : ""
              }`}
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
                <div className="edu-field">{e.field}</div>
                <div className="edu-institution">
                  {e.institution} &middot; {e.location}
                </div>
                <div className="edu-period">{e.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
