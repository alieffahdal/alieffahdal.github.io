import "../styles/Footer.css";
import { profile } from "../data/profile";
import { useLanguage, t } from "../i18n/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          &copy; {currentYear} {profile.name}. {t(profile.affiliation, lang)}.
        </p>
      </div>
    </footer>
  );
}
