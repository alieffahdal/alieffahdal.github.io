import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { photos, locations } from "../data/photos";
import { profile, socialLinks } from "../data/profile";

const SLIDES = photos.slice(0, 5);

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero-notch">
      <div className="hero-carousel">
        <AnimatePresence mode="wait">
          <motion.img
            key={SLIDES[index].id}
            src={SLIDES[index].src}
            alt={SLIDES[index].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
        <div className="hero-carousel-dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              className={`hero-dot${i === index ? " active" : ""}`}
              aria-label={`Show ${slide.title}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-home">
      <HeroCarousel />

      <motion.section
        className="card profile-card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="profile-avatar" aria-hidden="true">
          {profile.name[0]}
        </div>
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p className="profile-role">{profile.role}</p>
        </div>
        <p className="profile-tagline">{profile.tagline}</p>
        <div className="profile-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="pill-link">
              {link.label}
            </a>
          ))}
          <Link to="/about" className="pill-link pill-link-solid">
            Contact me
          </Link>
        </div>
      </motion.section>

      <section className="section-block">
        <div className="section-block-head">
          <h2>Latest Travel</h2>
          <Link to="/travel" className="text-link">
            View All →
          </Link>
        </div>
        <div className="location-grid">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/travel/${loc.slug}`} className="location-card">
                <img src={loc.cover.src} alt={loc.place} loading="lazy" />
                <span className="location-card-label">{loc.place}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
