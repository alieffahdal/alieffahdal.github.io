import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";
import { useLanguage, t } from "../i18n/LanguageContext";
import { ui } from "../i18n/strings";

export default function NotFound() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  return (
    <div className="app">
      <section className="not-found">
        <div className="container">
          <div className="not-found-content">
            <div className="error-code">
              <span className="code-line">404</span>
              <span className="code-desc">{t(ui.notFound.codeDesc, lang)}</span>
            </div>

            <div className="error-message">
              <h1>{t(ui.notFound.title, lang)}</h1>
              <p>{t(ui.notFound.description, lang)}</p>

              <div className="error-actions">
                <button onClick={() => navigate("/")} className="btn btn-primary">
                  {t(ui.notFound.backHome, lang)}
                </button>
                <button onClick={() => window.history.back()} className="btn btn-secondary">
                  {t(ui.notFound.goBack, lang)}
                </button>
              </div>

              <div className="menu-links">
                <p>{t(ui.notFound.orNavigate, lang)}</p>
                <div className="quick-links">
                  <a href="/#home">{t(ui.notFound.linkHome, lang)}</a>
                  <a href="/#about">{t(ui.notFound.linkAbout, lang)}</a>
                  <a href="/#proyek">{t(ui.notFound.linkProjects, lang)}</a>
                  <a href="/#publikasi">{t(ui.notFound.linkPublications, lang)}</a>
                  <a href="/#kontak">{t(ui.notFound.linkContact, lang)}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
