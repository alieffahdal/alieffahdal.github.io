import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Advanced Web Development",
      description:
        "Comprehensive course covering full-stack development using modern frameworks. Students learn from design to deployment with real-world projects.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      status: "Active",
    },
    {
      id: 2,
      title: "Software Engineering Principles",
      description:
        "Core course teaching design patterns, SOLID principles, and software architecture. Includes team projects and code reviews.",
      technologies: ["Java", "UML", "Design Patterns", "Git"],
      link: "#",
      status: "Active",
    },
    {
      id: 3,
      title: "Database Management Systems",
      description:
        "In-depth course on database design, normalization, and optimization. Students design and implement complex database systems.",
      technologies: ["SQL", "PostgreSQL", "MySQL", "Database Design"],
      link: "#",
      status: "Active",
    },
    {
      id: 4,
      title: "IT Project Management Capstone",
      description:
        "Capstone course where students work on real industry projects. Focus on agile methodologies, team leadership, and project delivery.",
      technologies: ["Agile", "Jira", "Team Leadership", "Risk Management"],
      link: "#",
      status: "Active",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Current Courses</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="status-badge">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
