import "../styles/Projects.css";
import { projects, type ProjectItem } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

function ProjectRow({ project }: { project: ProjectItem }) {
  const { lang } = useLanguage();
  const isActive = project.status === "ongoing";

  return (
    <div className="project-row">
      <div className="project-row-main">
        <span className={`status ${isActive ? "on" : "done"}`}>
          {isActive ? t(ui.projects.statusOngoing, lang) : t(ui.projects.statusDone, lang)}
        </span>
        <h3>{t(project.title, lang)}</h3>
        <p>{t(project.description, lang)}</p>
      </div>
      <div className="project-row-meta">
        <span>{t(project.period, lang)}</span>
        <span>{t(project.partner, lang)}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, childSelector: ".project-row" });
  const { lang } = useLanguage();

  return (
    <section id="proyek">
      <div className="wrap">
        <div className="section-head">
          <h2>{t(ui.projects.heading, lang)}</h2>
          <span className="idx">{t(ui.projects.eyebrow, lang)}</span>
        </div>
        <div className="project-list" ref={listRef}>
          {projects.map((project, i) => (
            <div key={project.title.id}>
              <ProjectRow project={project} />
              {i < projects.length - 1 && <div className="project-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
