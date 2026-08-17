import "../styles/Education.css";
import { education } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Education() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1, childSelector: ".edu-item" });

  return (
    <section id="pendidikan">
      <div className="wrap">
        <div className="section-head">
          <h2>Pendidikan</h2>
          <span className="idx">03 &mdash; riwayat akademik</span>
        </div>
        <div className="edu-list" ref={ref}>
          {education.map((e) => (
            <div className="edu-item" key={e.degree}>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-body">
                <div className="edu-field">{e.field}</div>
                <div className="edu-institution">
                  {e.institution} &middot; {e.location}
                </div>
              </div>
              <div className="edu-period">{e.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
