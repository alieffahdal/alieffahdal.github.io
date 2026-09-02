import { useState } from "react";
import { Link } from "react-router-dom";
import { locations } from "../data/photos";
import SplitLayout from "../components/SplitLayout";

export default function Travel() {
  const [activeSlug, setActiveSlug] = useState(locations[0]?.slug);
  const active = locations.find((l) => l.slug === activeSlug) ?? locations[0];

  return (
    <SplitLayout image={active.cover.src} imageAlt={active.place} imageCaption={active.place}>
      <div className="card split-intro">
        <h1>Travel</h1>
        <p>
          Exploring nearby streets and further trips one frame at a time — every place tells its
          own story through the lens.
        </p>
      </div>

      <div className="location-list">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            to={`/travel/${loc.slug}`}
            className="location-row"
            onMouseEnter={() => setActiveSlug(loc.slug)}
            onFocus={() => setActiveSlug(loc.slug)}
          >
            <span className="location-row-place">{loc.place}</span>
            <span className="location-row-country">{loc.country}</span>
          </Link>
        ))}
      </div>
    </SplitLayout>
  );
}
