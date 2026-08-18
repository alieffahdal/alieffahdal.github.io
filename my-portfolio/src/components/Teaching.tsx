import "../styles/Teaching.css";
import { teaching, profile } from "../data/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Teaching() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.05, childSelector: ".course-chip" });

  return (
    <section id="mengajar">
      <div className="wrap">
        <div className="section-head">
          <h2>Pengalaman Mengajar</h2>
          <span className="idx">04 &mdash; mata kuliah</span>
        </div>
        <p className="teaching-institution">{profile.affiliation}</p>
        <div className="course-grid" ref={ref}>
          {teaching.map((course) => (
            <span className="course-chip" key={course.name}>
              {course.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
