import "../styles/Projects.css";
import { projects, type ProjectItem } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ProjectRow({ project }: { project: ProjectItem }) {
  const isActive = project.status === "Sedang berjalan";

  return (
    <div className="project-row">
      <div className="project-row-main">
        <span className={`status ${isActive ? "on" : "done"}`}>{project.status}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-row-meta">
        <span>{project.period}</span>
        <span>{project.partner}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, childSelector: ".project-row" });

  return (
    <section id="proyek">
      <div className="wrap">
        <div className="section-head">
          <h2>Proyek &amp; inisiatif</h2>
          <span className="idx">05 &mdash; berjalan &amp; selesai</span>
        </div>
        <div className="project-list" ref={listRef}>
          {projects.map((project, i) => (
            <div key={project.title}>
              <ProjectRow project={project} />
              {i < projects.length - 1 && <div className="project-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
