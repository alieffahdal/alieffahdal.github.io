import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { photos } from "../data/photos";

export default function Screensaver() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="screensaver">
      <AnimatePresence mode="wait">
        <motion.img
          key={photos[index].id}
          src={photos[index].src}
          alt={photos[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
      <div className="screensaver-caption">
        <span>{photos[index].title}</span>
        <span className="screensaver-caption-place">{photos[index].location.place}</span>
      </div>
      <Link to="/" className="screensaver-exit" aria-label="Exit screensaver">
        ×
      </Link>
    </div>
  );
}
