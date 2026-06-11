import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS, LANGS } from "../data/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = TRANSLATIONS[lang];
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const LangToggle = () => (
    <div className="lang-toggle">
      {LANGS.map((l) => (
        <button
          key={l}
          className={`lang-btn${lang === l ? " active" : ""}`}
          onClick={() => setLang(l)}
        >
          {l}
        </button>
      ))}
    </div>
  );

  if (!isHome) {
    return (
      <nav className="nav-sub">
        <div className="container">
          <Link to="/" className="nav-logo">MH</Link>
          <Link to="/" className="nav-back">
            <span>←</span>
            <span>{t.navBack}</span>
          </Link>
          <div className="nav-spacer" />
          <LangToggle />
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="nav">
        <div className="container">
          <Link to="/" className="nav-logo">MH</Link>
          <ul className="nav-links">
            <li><button onClick={() => scrollTo("about")}>{t.navAbout}</button></li>
            <li><button onClick={() => scrollTo("skills")}>{t.navSkills}</button></li>
            <li><button onClick={() => scrollTo("plans")}>{t.navPlans}</button></li>
            <li><button onClick={() => scrollTo("contact")}>{t.navContact}</button></li>
          </ul>
          <div className="nav-right">
            <LangToggle />
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>✕</button>
        <button onClick={() => scrollTo("about")}>{t.navAbout}</button>
        <button onClick={() => scrollTo("skills")}>{t.navSkills}</button>
        <button onClick={() => scrollTo("plans")}>{t.navPlans}</button>
        <button onClick={() => scrollTo("contact")}>{t.navContact}</button>
        <LangToggle />
      </div>
    </>
  );
}
