import "../styles/Research.css";
import { researchFocus } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTilt } from "../hooks/useTilt";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

function ResearchCard({ name, description, index }: { name: string; description: string; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>();
  return (
    <div className="tag-card" ref={tiltRef}>
      <span className="tag-dot" aria-hidden="true" />
      <span className="tag-index">{String(index + 1).padStart(2, "0")}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Research() {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, childSelector: ".tag-card" });
  const { lang } = useLanguage();

  return (
    <section id="riset">
      <div className="wrap">
        <div className="section-head">
          <h2>{t(ui.research.heading, lang)}</h2>
          <span className="idx">{t(ui.research.eyebrow, lang)}</span>
        </div>
        <div className="tag-grid" ref={gridRef}>
          {researchFocus.map((area, i) => (
            <ResearchCard
              key={area.name.id}
              name={t(area.name, lang)}
              description={t(area.description, lang)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
