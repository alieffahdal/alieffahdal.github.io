import { Link, Navigate, useParams } from "react-router-dom";
import { getLocation } from "../data/photos";
import Gallery from "../components/Gallery";

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocation(slug) : undefined;

  if (!location) return <Navigate to="/travel" replace />;

  return (
    <div className="page-location">
      <div className="section-block-head">
        <div>
          <Link to="/travel" className="text-link">
            ← All Travel
          </Link>
          <h1>{location.place}</h1>
          <p className="location-detail-country">{location.country}</p>
        </div>
      </div>
      <Gallery photos={location.photos} />
    </div>
  );
}
