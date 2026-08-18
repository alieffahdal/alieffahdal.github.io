import "../styles/About.css";
import { profile, stats } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import portrait from "../assets/alief-portrait.jpg";

export default function About() {
  const bodyRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>Tentang Saya</h2>
          <span className="idx">01 &mdash; profil</span>
        </div>

        <div className="about-body" ref={bodyRef}>
          <div className="about-portrait">
            <img src={portrait} alt={profile.name} />
          </div>
          <div className="about-main">
            {profile.bioDetailed.split("\n\n").map((paragraph, i) => (
              <p className="about-bio" key={i}>
                {paragraph}
              </p>
            ))}
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>
                    {s.value}
                    {s.suffix}
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
