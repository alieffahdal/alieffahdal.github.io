import "../styles/About.css";
import { profile, stats, researchFocus } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import portrait from "../assets/alief-portrait.jpg";

export default function About() {
  const bodyRef = useScrollReveal<HTMLDivElement>();
  const orbitRef = useScrollReveal<HTMLDivElement>();
  const angleStep = 360 / researchFocus.length;

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>Tentang</h2>
          <span className="idx">01 &mdash; profil</span>
        </div>

        <div className="about-body" ref={bodyRef}>
          <div className="about-portrait">
            <img src={portrait} alt={profile.name} />
          </div>
          <div className="about-main">
            <p className="about-bio">{profile.bio}</p>
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

      <div className="orbit-section" style={{ marginTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Fokus riset</h2>
            <span className="idx">02 &mdash; keahlian</span>
          </div>
        </div>
        <div className="orbit" ref={orbitRef}>
          <div className="orbit-ring"></div>
          <div className="orbit-ring r2"></div>
          <div className="orbit-center">
            <span>
              {researchFocus.length} bidang
              <br />
              riset aktif
            </span>
          </div>
          {researchFocus.map((topic, i) => {
            const angle = angleStep * i;
            return (
              <div
                className="orbit-chip"
                key={topic}
                style={{
                  transform: `rotate(${angle}deg) translate(200px) rotate(${-angle}deg)`,
                }}
              >
                {topic}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
