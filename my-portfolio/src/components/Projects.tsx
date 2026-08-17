import "../styles/Projects.css";
import { projects, type ProjectItem } from "../data/profile";
import { useTilt } from "../hooks/useTilt";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ProjectCard({ project }: { project: ProjectItem }) {
  const tiltRef = useTilt<HTMLDivElement>();
  const isActive = project.status === "Sedang berjalan";

  return (
    <div className="card" ref={tiltRef}>
      <span className={`status ${isActive ? "on" : "done"}`}>{project.status}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="meta">
        <span>{project.period}</span>
        <span>{project.partner}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12, childSelector: ".card" });

  return (
    <section id="proyek">
      <div className="wrap">
        <div className="section-head">
          <h2>Proyek &amp; inisiatif</h2>
          <span className="idx">05 &mdash; berjalan &amp; selesai</span>
        </div>
        <div className="grid" ref={gridRef}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
