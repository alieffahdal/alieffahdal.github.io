import { useMemo, useState } from "react";
import "../styles/Publications.css";
import { publications, publicationMetrics } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

const TYPE_OPTIONS = ["Semua", "Penelitian", "Pengabdian"] as const;

export default function Publications() {
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".pub" });
  const { lang } = useLanguage();
  const [typeFilter, setTypeFilter] = useState<(typeof TYPE_OPTIONS)[number]>("Semua");
  const [yearFilter, setYearFilter] = useState<"Semua" | number>("Semua");

  const typeLabel = (opt: (typeof TYPE_OPTIONS)[number]) =>
    opt === "Semua" ? t(ui.publications.all, lang) : opt === "Penelitian" ? t(ui.publications.typePenelitian, lang) : t(ui.publications.typePengabdian, lang);

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
          <h2>{t(ui.publications.heading, lang)}</h2>
          <span className="idx">{t(ui.publications.eyebrow, lang)}</span>
        </div>

        <div className="pub-metrics">
          <div>
            <b>{publicationMetrics.totalArticles}</b>
            <span>{t(ui.publications.articles, lang)}</span>
          </div>
          <div>
            <b>{publicationMetrics.hIndex}</b>
            <span>{t(ui.publications.hIndex, lang)}</span>
          </div>
          <div>
            <b>{publicationMetrics.i10Index}</b>
            <span>{t(ui.publications.i10Index, lang)}</span>
          </div>
          <div>
            <b>{publicationMetrics.sintaScore}</b>
            <span>{t(ui.publications.sintaScore, lang)}</span>
          </div>
        </div>

        <div className="filter-row" role="group" aria-label={t(ui.publications.filterTypeAria, lang)}>
          {TYPE_OPTIONS.map((opt) => (
            <button
              key={opt}
              className={`filter-pill ${typeFilter === opt ? "active" : ""}`}
              onClick={() => setTypeFilter(opt)}
            >
              {typeLabel(opt)}
            </button>
          ))}
        </div>
        <div className="filter-row" role="group" aria-label={t(ui.publications.filterYearAria, lang)}>
          <button
            className={`filter-pill ${yearFilter === "Semua" ? "active" : ""}`}
            onClick={() => setYearFilter("Semua")}
          >
            {t(ui.publications.allYears, lang)}
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
          {sorted.length === 0 && <p className="pub-empty">{t(ui.publications.empty, lang)}</p>}
          {sorted.map((pub) => (
            <div className="pub" key={pub.title}>
              <div className="yr">{pub.year}</div>
              <div>
                <div className="title">
                  {pub.title}{" "}
                  <span className={`pub-type ${pub.type === "Penelitian" ? "research" : "service"}`}>
                    {typeLabel(pub.type)}
                  </span>
                  {pub.level && <span className="pub-level">{pub.level}</span>}
                </div>
                <div className="venue">{pub.venue}</div>
              </div>
              <div className="cite">
                {pub.citations} {t(ui.publications.citations, lang)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
