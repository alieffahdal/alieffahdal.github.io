import { useEffect, useState } from "react";
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
      <div className="section-heading">
        <p className="section-kicker">Gallery</p>
        <h2>Selected Work</h2>
        <p className="section-note">
          Placeholder shots below &mdash; swap them for your own photos in{" "}
          <code>src/data/photos.ts</code>.
        </p>
      </div>

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

      <div className="gallery-grid">
        {filtered.map((photo) => (
          <button
            key={photo.id}
            className={`photo-card${photo.tall ? " tall" : ""}`}
            style={{ background: photo.gradient }}
            onClick={() => setOpenId(photo.id)}
            aria-label={`Open ${photo.title}`}
          >
            <span className="photo-card-overlay">
              <span className="photo-card-title">{photo.title}</span>
              <span className="photo-card-category">{photo.category}</span>
            </span>
          </button>
        ))}
      </div>

      {openPhoto && (
        <div className="lightbox" onClick={() => setOpenId(null)}>
          <button className="lightbox-close" aria-label="Close">
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
          <div
            className="lightbox-image"
            style={{ background: openPhoto.gradient }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-caption">
              <span className="photo-card-title">{openPhoto.title}</span>
              <span className="photo-card-category">{openPhoto.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
