import "../styles/Research.css";

export default function Research() {
  const publications = [
    {
      id: 1,
      title: "Emerging Trends in Cloud-Native Application Development",
      authors: "Muhammad Alief Fahda Imran Oemar et al.",
      year: 2024,
      venue: "IEEE Transactions on Software Engineering",
      type: "Journal Article",
      doi: "10.1109/TSE.2024.xxxxx",
    },
    {
      id: 2,
      title: "Student-Centered Learning in Software Engineering Education",
      authors: "Muhammad Alief Fahda Imran Oemar, Dr. Sarah Johnson",
      year: 2023,
      venue: "ACM Conference on Computer Science Education",
      type: "Conference Paper",
      doi: "10.1145/SIGCSE.2023",
    },
    {
      id: 3,
      title: "Microservices Architecture: Design Patterns and Best Practices",
      authors: "Muhammad Alief Fahda Imran Oemar",
      year: 2023,
      venue: "International Journal of Computer Science",
      type: "Journal Article",
      doi: "10.1016/j.ijcs.2023.xxxxx",
    },
    {
      id: 4,
      title: "Integrating DevOps in Computer Science Curriculum",
      authors: "Muhammad Alief Fahda Imran Oemar, Prof. Michael Chen",
      year: 2022,
      venue: "International Conference on Software Engineering Education",
      type: "Conference Paper",
      doi: "10.1145/ICSE-ED.2022",
    },
  ];

  const research = [
    {
      id: 1,
      title: "AI-Driven Code Review Systems",
      description:
        "Investigating the use of machine learning for automated code review and quality assurance.",
      status: "In Progress",
      students: 3,
    },
    {
      id: 2,
      title: "Blockchain in Educational Systems",
      description:
        "Exploring decentralized approaches to student credentialing and academic verification.",
      status: "In Progress",
      students: 2,
    },
    {
      id: 3,
      title: "Low-Code Development Platforms Effectiveness",
      description:
        "Comparative study on productivity and code quality using low-code platforms in enterprise development.",
      status: "Active",
      students: 4,
    },
  ];

  return (
    <section id="research" className="research">
      <div className="container">
        <h2>Research & Publications</h2>

        <div className="research-section">
          <h3>Recent Publications</h3>
          <div className="publications-list">
            {publications.map((pub) => (
              <div key={pub.id} className="publication-item">
                <div className="pub-header">
                  <h4>{pub.title}</h4>
                  <span className="pub-type">{pub.type}</span>
                </div>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-meta">
                  <span className="pub-venue">{pub.venue}</span>
                  <span className="pub-year">{pub.year}</span>
                </p>
                <a href={`#doi-${pub.id}`} className="pub-link">
                  View Publication →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="research-section">
          <h3>Active Research Projects</h3>
          <div className="research-grid">
            {research.map((project) => (
              <div key={project.id} className="research-card">
                <div className="research-header">
                  <h4>{project.title}</h4>
                  <span className="status-badge">{project.status}</span>
                </div>
                <p className="research-description">{project.description}</p>
                <p className="research-meta">
                  <span className="student-count">
                    👥 {project.students} Student(s)
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
