import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth scrolling, dark mode, and optimized performance.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/alieffahdal',
      status: 'Current Project'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Stripe'],
      link: '#',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Content management system for creating and sharing blog posts with markdown support, comments, and analytics.',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
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
                  <span key={tech} className="tech-pill">{tech}</span>
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
