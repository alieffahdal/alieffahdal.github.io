import { photos } from "../data/photos";
import { profile, socialLinks } from "../data/profile";
import SplitLayout from "../components/SplitLayout";

const heroPhoto = photos[0];

export default function About() {
  return (
    <SplitLayout image={heroPhoto.src} imageAlt={heroPhoto.title} imageCaption="About">
      <div className="about-top">
        <div className="card profile-summary">
          <div className="profile-avatar" aria-hidden="true">
            {profile.name[0]}
          </div>
          <div>
            <h2>{profile.name}</h2>
            <p className="profile-role">{profile.role}</p>
          </div>
        </div>

        <div className="social-cards">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="card social-card">
              <span>{link.label}</span>
              <span className="social-card-value">{link.value}</span>
            </a>
          ))}
          <a href="mailto:hello@justleps.photos" className="pill-link pill-link-solid contact-cta">
            Contact me
          </a>
        </div>
      </div>

      <div className="card about-body">
        <h1>About</h1>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </SplitLayout>
  );
}
