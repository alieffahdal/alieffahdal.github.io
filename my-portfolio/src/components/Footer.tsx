import "../styles/Footer.css";
import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          &copy; {currentYear} {profile.name}. {profile.affiliation}.
        </p>
      </div>
    </footer>
  );
}
