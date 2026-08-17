import "../styles/Experience.css";
import { experience } from "../data/profile";
import { useZigzagTimeline } from "../hooks/useZigzagTimeline";

export default function Experience() {
  const ref = useZigzagTimeline<HTMLDivElement>();

  return (
    <section id="pengalaman">
      <div className="wrap">
        <div className="section-head">
          <h2>Pengalaman</h2>
          <span className="idx">04 &mdash; akademik, pemerintahan &amp; industri</span>
        </div>
        <div className="zigzag" ref={ref}>
          <div className="zigzag-line-track" />
          <div className="zigzag-line-fill" />
          {experience.map((group, i) => (
            <div className={`zigzag-row ${i % 2 === 0 ? "side-left" : "side-right"}`} key={group.label}>
              <div className="zigzag-dot" />
              <div className="zigzag-card exp-card">
                <span className="exp-label">{group.label}</span>
                {group.items.map((item) => (
                  <div className="exp-item" key={item.role + item.org}>
                    <div className={`exp-period ${item.current ? "current" : ""}`}>{item.period}</div>
                    <div className="exp-role">{item.role}</div>
                    <div className="exp-org-row">
                      {item.logo && (
                        <span className="exp-logo">
                          <img src={item.logo} alt="" />
                        </span>
                      )}
                      <div className="exp-org">{item.org}</div>
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
