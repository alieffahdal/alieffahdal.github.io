import "../styles/Certifications.css";
import { certifications } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".cert-badge" });

  return (
    <section id="sertifikasi">
      <div className="wrap">
        <div className="section-head">
          <h2>Sertifikasi</h2>
          <span className="idx">07 &mdash; profesional</span>
        </div>
        <div className="cert-grid" ref={ref}>
          {certifications.map((cert) => (
            <div className="cert-badge" key={cert.name}>
              <span className="cert-year">{cert.year}</span>
              <span className="cert-name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
