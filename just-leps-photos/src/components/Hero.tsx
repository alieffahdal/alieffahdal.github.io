import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.p className="hero-kicker" variants={item}>
          Personal Photography Portfolio
        </motion.p>
        <motion.h1 variants={item}>
          Capturing quiet moments,
          <br />
          one frame at a time.
        </motion.h1>
        <motion.p className="hero-subtitle" variants={item}>
          JustLeps Photos is a collection of portraits, landscapes, and street
          photography shot on the go.
        </motion.p>
        <motion.a
          href="#gallery"
          className="hero-cta"
          variants={item}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          View Gallery ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
