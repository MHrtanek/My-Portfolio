import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (!isHome) {
    return (
      <footer className="footer-simple">
        <Link to="/">← {t.navBack}</Link>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t.footerContact}</h4>
          <p>
            Email: <a href="mailto:hrtanekmatus02@gmail.com">hrtanekmatus02@gmail.com</a><br />
            Tel: <a href="tel:+421949156133">+421 949 156 133</a><br />
            GitHub: <a href="https://github.com/MHrtanek" target="_blank" rel="noreferrer">MHrtanek</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>{t.footerCookies}</h4>
          <p>{t.footerCookiesText}</p>
        </div>
        <div className="footer-section">
          <h4>{t.footerTech}</h4>
          <p>{t.footerTechText}</p>
        </div>
        <div className="footer-section">
          <h4>{t.footerCopyright}</h4>
          <p>{t.footerCopyrightText}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footerMade}</p>
      </div>
    </footer>
  );
}
