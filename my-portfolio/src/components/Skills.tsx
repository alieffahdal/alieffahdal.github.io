import '../styles/Skills.css';

export default function Skills() {
  const skills = [
    {
      category: 'Teaching Specializations',
      technologies: ['Software Engineering', 'Web Development', 'Database Design', 'OOP Principles', 'IT Project Management', 'Cloud Technologies']
    },
    {
      category: 'Programming Languages',
      technologies: ['Java', 'Python', 'JavaScript/TypeScript', 'C++', 'SQL', 'PHP']
    },
    {
      category: 'Frameworks & Tools',
      technologies: ['React', 'Node.js', 'Django', 'Laravel', 'Spring Boot', 'Docker', 'Git']
    },
    {
      category: 'Pedagogical Skills',
      technologies: ['Curriculum Design', 'Student Mentoring', 'Online Teaching', 'Assessment Design', 'Research Supervision', 'Collaborative Learning']
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
