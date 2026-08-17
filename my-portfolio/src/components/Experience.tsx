import "../styles/Experience.css";
import { experience } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ExperienceGroupBlock({ label, items }: (typeof experience)[number]) {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".timeline-item" });

  return (
    <div className="timeline-group" ref={ref}>
      <span className="timeline-label">{label}</span>
      {items.map((item) => (
        <div className="timeline-item" key={item.role + item.org}>
          <div className={`timeline-period ${item.current ? "current" : ""}`}>{item.period}</div>
          <div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-org">{item.org}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="pengalaman">
      <div className="wrap">
        <div className="section-head">
          <h2>Pengalaman</h2>
          <span className="idx">04 &mdash; akademik, pemerintahan &amp; industri</span>
        </div>
        <div className="experience-body">
          {experience.map((group) => (
            <ExperienceGroupBlock key={group.label} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
