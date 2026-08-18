import { useMemo, useState } from "react";
import "../styles/Publications.css";
import { publications, publicationMetrics } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TYPE_OPTIONS = ["Semua", "Penelitian", "Pengabdian"] as const;

export default function Publications() {
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".pub" });
  const [typeFilter, setTypeFilter] = useState<(typeof TYPE_OPTIONS)[number]>("Semua");
  const [yearFilter, setYearFilter] = useState<"Semua" | number>("Semua");

  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const sorted = useMemo(
    () =>
      [...publications]
        .filter((p) => typeFilter === "Semua" || p.type === typeFilter)
        .filter((p) => yearFilter === "Semua" || p.year === yearFilter)
        .sort((a, b) => b.year - a.year || b.citations - a.citations),
    [typeFilter, yearFilter],
  );

  return (
    <section id="publikasi">
      <div className="wrap">
        <div className="section-head">
          <h2>Publikasi</h2>
          <span className="idx">03 &mdash; jurnal &amp; pengabdian</span>
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

        <div className="filter-row" role="group" aria-label="Filter tipe publikasi">
          {TYPE_OPTIONS.map((opt) => (
            <button
              key={opt}
              className={`filter-pill ${typeFilter === opt ? "active" : ""}`}
              onClick={() => setTypeFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="filter-row" role="group" aria-label="Filter tahun publikasi">
          <button
            className={`filter-pill ${yearFilter === "Semua" ? "active" : ""}`}
            onClick={() => setYearFilter("Semua")}
          >
            Semua tahun
          </button>
          {years.map((y) => (
            <button
              key={y}
              className={`filter-pill ${yearFilter === y ? "active" : ""}`}
              onClick={() => setYearFilter(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="pubs" ref={listRef}>
          {sorted.length === 0 && <p className="pub-empty">Tidak ada publikasi yang cocok dengan filter ini.</p>}
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
