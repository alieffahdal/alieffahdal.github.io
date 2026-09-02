import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "hello@justleps.photos", href: "mailto:hello@justleps.photos" },
  { label: "Instagram", value: "@justleps.photos", href: "https://instagram.com" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="section-kicker">Contact</p>
      <h2>Let's work together</h2>
      <p className="section-note">
        Open for portrait sessions, travel collabs, or just to talk about
        photography.
      </p>
      <div className="contact-links">
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="contact-link"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="contact-link-label">{link.label}</span>
            <span className="contact-link-value">{link.value}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
