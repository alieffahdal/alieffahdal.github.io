import type { CSSProperties } from "react";
import "../styles/Contact.css";
import { contactLinks } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TILTS = [-4, 3, -3, 4, -2, 3, -4];

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.06, childSelector: ".chip-link" });

  return (
    <section id="kontak">
      <div className="wrap contact-inner">
        <span className="eyebrow">Kontak</span>
        <h2 className="contact-heading">Terbuka untuk kolaborasi riset, konsultasi SPBE, dan bimbingan mahasiswa.</h2>
        <div className="chip-links" ref={ref}>
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="chip-link"
              style={
                {
                  "--chip": link.chip,
                  "--tilt": `${TILTS[i % TILTS.length]}deg`,
                } as CSSProperties
              }
            >
              <span className="chip-badge">{link.label[0]}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
