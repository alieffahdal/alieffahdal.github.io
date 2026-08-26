const links = [
  { label: "Email", value: "hello@justleps.photos", href: "mailto:hello@justleps.photos" },
  { label: "Instagram", value: "@justleps.photos", href: "https://instagram.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="section-kicker">Contact</p>
      <h2>Let's work together</h2>
      <p className="section-note">
        Open for portrait sessions, travel collabs, or just to talk about
        photography.
      </p>
      <div className="contact-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="contact-link">
            <span className="contact-link-label">{link.label}</span>
            <span className="contact-link-value">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
