import "../styles/About.css";
import { profile, stats, researchFocus } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import portrait from "../assets/alief-portrait.jpg";

const SCATTER: { top: string; left: string; rotate: number }[] = [
  { top: "6%", left: "6%", rotate: -8 },
  { top: "12%", left: "64%", rotate: 6 },
  { top: "40%", left: "2%", rotate: 5 },
  { top: "42%", left: "80%", rotate: -5 },
  { top: "74%", left: "16%", rotate: 9 },
  { top: "76%", left: "58%", rotate: -10 },
];

export default function About() {
  const bodyRef = useScrollReveal<HTMLDivElement>();
  const scatterRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".scatter-chip" });

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

      <div style={{ marginTop: 80 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Fokus riset</h2>
            <span className="idx">02 &mdash; keahlian</span>
          </div>
        </div>
        <div className="wrap">
          <div className="scatter" ref={scatterRef}>
            <div className="scatter-label">
              {researchFocus.length} bidang
              <br />
              riset aktif
            </div>
            {researchFocus.map((topic, i) => (
              <div
                className="scatter-chip"
                key={topic}
                style={{
                  top: SCATTER[i % SCATTER.length].top,
                  left: SCATTER[i % SCATTER.length].left,
                  ["--rotate" as string]: `${SCATTER[i % SCATTER.length].rotate}deg`,
                }}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
