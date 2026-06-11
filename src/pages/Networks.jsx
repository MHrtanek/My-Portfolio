import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

export default function Networks() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <div className="page-section">
      <h1 className="page-title">{t.networksTitle}</h1>
      <p className="page-subtitle">{t.networksSubtitle}</p>
      {t.networksItems.map((item) => (
        <div key={item.title} className="skill-item">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
