import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

export default function Robotics() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <div className="page-section">
      <h1 className="page-title">{t.roboticsTitle}</h1>
      <p className="page-subtitle">{t.roboticsSubtitle}</p>
      {t.roboticsItems.map((item) => (
        <div key={item.title} className="skill-item">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
