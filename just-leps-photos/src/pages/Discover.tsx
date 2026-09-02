import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "../data/photos";

function makeIcon(coverSrc: string, count: number) {
  return L.divIcon({
    className: "map-pin",
    html: `
      <div class="map-pin-thumb" style="background-image:url('${coverSrc}')">
        ${count > 1 ? `<span class="map-pin-count">${count}</span>` : ""}
      </div>
      <span class="map-pin-tail"></span>
    `,
    iconSize: [56, 68],
    iconAnchor: [28, 68],
  });
}

function FitToMarkers() {
  const map = useMap();
  const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
  if (locations.length > 0) map.fitBounds(bounds, { padding: [80, 80], maxZoom: 6 });
  return null;
}

export default function Discover() {
  const navigate = useNavigate();

  return (
    <div className="page-discover">
      <MapContainer
        center={[locations[0]?.lat ?? 0, locations[0]?.lng ?? 0]}
        zoom={4}
        scrollWheelZoom
        className="discover-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitToMarkers />
        {locations.map((loc) => (
          <Marker
            key={loc.slug}
            position={[loc.lat, loc.lng]}
            icon={makeIcon(loc.cover.src, loc.photos.length)}
            eventHandlers={{ click: () => navigate(`/travel/${loc.slug}`) }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
