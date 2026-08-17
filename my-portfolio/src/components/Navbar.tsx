import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import portrait from "../assets/alief-portrait.jpg";

const LINKS = [
  { id: "about", label: "Tentang" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "proyek", label: "Proyek" },
  { id: "publikasi", label: "Publikasi" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${solid ? "solid" : ""}`}>
      <div className="wrap navbar-container">
        <button className="navbar-brand" onClick={() => scrollToSection("home")}>
          <img className="brand-glyph" src={portrait} alt="" />
          <span className="brand-name">Alief Fahdal</span>
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka menu navigasi"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)} className="nav-link">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
