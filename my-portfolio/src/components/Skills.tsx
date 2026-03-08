import '../styles/Skills.css';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      technologies: ['Git', 'Docker', 'GitHub Actions', 'VS Code', 'Figma', 'Firebase']
    },
    {
      category: 'Soft Skills',
      technologies: ['Problem Solving', 'Team Collaboration', 'Communication', 'Attention to Detail']
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <ul className="tech-list">
                {skillGroup.technologies.map((tech) => (
                  <li key={tech} className="tech-tag">
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
