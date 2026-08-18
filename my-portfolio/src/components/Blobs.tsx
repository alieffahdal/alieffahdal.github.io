import "../styles/Blobs.css";

/**
 * Purely decorative background shapes. Slow CSS-only drift (see Blobs.css),
 * automatically paused via prefers-reduced-motion. Safe to drop into any
 * section that needs a bit of ambient movement behind the content.
 */
export default function Blobs() {
  return (
    <div className="blobs" aria-hidden="true">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
    </div>
  );
}
