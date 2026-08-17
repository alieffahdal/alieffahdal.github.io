import "../styles/Publications.css";
import { publications, publicationMetrics } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Publications() {
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".pub" });
  const sorted = [...publications].sort((a, b) => b.year - a.year || b.citations - a.citations);

  return (
    <section id="publikasi">
      <div className="wrap">
        <div className="section-head">
          <h2>Publikasi</h2>
          <span className="idx">06 &mdash; jurnal &amp; pengabdian</span>
        </div>

        <div className="pub-metrics">
          <div>
            <b>{publicationMetrics.totalArticles}</b>
            <span>Artikel (Scholar)</span>
          </div>
          <div>
            <b>{publicationMetrics.hIndex}</b>
            <span>H-index</span>
          </div>
          <div>
            <b>{publicationMetrics.i10Index}</b>
            <span>i10-index</span>
          </div>
          <div>
            <b>{publicationMetrics.sintaScore}</b>
            <span>Skor SINTA</span>
          </div>
        </div>

        <div className="pubs" ref={listRef}>
          {sorted.map((pub) => (
            <div className="pub" key={pub.title}>
              <div className="yr">{pub.year}</div>
              <div>
                <div className="title">
                  {pub.title}{" "}
                  <span className={`pub-type ${pub.type === "Penelitian" ? "research" : "service"}`}>{pub.type}</span>
                  {pub.level && <span className="pub-level">{pub.level}</span>}
                </div>
                <div className="venue">{pub.venue}</div>
              </div>
              <div className="cite">{pub.citations} sitasi</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
