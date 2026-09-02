import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { categories, photos, type Category } from "../data/photos";

export default function Gallery() {
  const [active, setActive] = useState<Category | "all">("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = photos.filter((p) => active === "all" || p.category === active);
  const openIndex = filtered.findIndex((p) => p.id === openId);
  const openPhoto = openIndex >= 0 ? filtered[openIndex] : null;

  useEffect(() => {
    if (openId === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
      if (e.key === "ArrowRight" && openIndex < filtered.length - 1) {
        setOpenId(filtered[openIndex + 1].id);
      }
      if (e.key === "ArrowLeft" && openIndex > 0) {
        setOpenId(filtered[openIndex - 1].id);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openId, openIndex, filtered]);

  return (
    <section id="gallery" className="gallery">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-kicker">Gallery</p>
        <h2>Selected Work</h2>
        <p className="section-note">
          A few frames from <a href="https://www.instagram.com/just.leps/">@just.leps</a>.
        </p>
      </motion.div>

      <div className="gallery-filters">
        {categories.map((c) => (
          <button
            key={c.value}
            className={`filter-btn${active === c.value ? " active" : ""}`}
            onClick={() => setActive(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="gallery-empty">No photos in this category yet.</p>
      ) : (
        <motion.div className="gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.button
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="photo-card"
                onClick={() => setOpenId(photo.id)}
                aria-label={`Open ${photo.title}`}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <span className="photo-card-overlay">
                  <span className="photo-card-title">{photo.title}</span>
                  <span className="photo-card-category">{photo.category}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {createPortal(
        <div
          className={`lightbox${openPhoto ? " lightbox-visible" : ""}`}
          onClick={() => setOpenId(null)}
        >
          {openPhoto && (
            <>
              <button className="lightbox-close" aria-label="Close" onClick={() => setOpenId(null)}>
                ×
              </button>
              {openIndex > 0 && (
                <button
                  className="lightbox-nav lightbox-prev"
                  aria-label="Previous"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenId(filtered[openIndex - 1].id);
                  }}
                >
                  ‹
                </button>
              )}
              {openIndex < filtered.length - 1 && (
                <button
                  className="lightbox-nav lightbox-next"
                  aria-label="Next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenId(filtered[openIndex + 1].id);
                  }}
                >
                  ›
                </button>
              )}
              <motion.div
                key={openPhoto.id}
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.18 }}
              >
                <img src={openPhoto.src} alt={openPhoto.title} />
                <div className="lightbox-caption">
                  <span className="photo-card-title">{openPhoto.title}</span>
                  <span className="photo-card-category">{openPhoto.category}</span>
                </div>
              </motion.div>
            </>
          )}
        </div>,
        document.body,
      )}
    </section>
  );
}
