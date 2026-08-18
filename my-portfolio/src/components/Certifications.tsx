import "../styles/Certifications.css";
import { certifications } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".cert-badge" });

  return (
    <section id="sertifikasi">
      <div className="wrap">
        <div className="section-head">
          <h2>Sertifikasi</h2>
          <span className="idx">08 &mdash; profesional</span>
        </div>
        <div className="cert-grid" ref={ref}>
          {certifications.map((cert) => (
            <div className="cert-badge" key={cert.name}>
              <div className="cert-logo">
                {cert.logo ? (
                  <img src={cert.logo} alt="" />
                ) : (
                  <span className="cert-logo-fallback">{initials(cert.issuer)}</span>
                )}
              </div>
              <div className="cert-body">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta">
                  {cert.issuer} &middot; {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
