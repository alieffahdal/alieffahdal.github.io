import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand">
          JustLeps<span>Photos</span>
        </a>
        <nav className="navbar-links">
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
