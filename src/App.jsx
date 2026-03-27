import { useState, useEffect, useRef } from "react";
import "./App.css";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const TRANSLATIONS = {
  SK: {
    nav: ["O mne", "Zručnosti", "Projekty", "Skúsenosti", "Kontakt"],
    heroTag: "// Žilina, Slovensko",
    heroRole: "Web Developer & Android Dev",
    heroDesc: "Volám sa Matúš Hrtánek, mám 19 rokov a som zo Žiliny. Venujem sa tvorbe webových stránok, mobilných aplikácií a sietí. Ponúkam riešenia na mieru — či už potrebuješ jednoduchú stránku, aplikáciu alebo niečo komplexnejšie.",
    heroCta1: "> KONTAKT",
    heroCta2: "> PROJEKTY",
    skillsTitle: "ZRUČNOSTI",
    projectsTitle: "PROJEKTY",
    projectsHint: "// klikni na projekt pre galériu",
    expTitle: "SKÚSENOSTI",
    expSub: "// každá stanica = míľnik na ceste",
    contactTitle: "KONTAKT",
    contactSub: "// Máš projekt? Napíš mi.",
    available: "DOSTUPNÝ_PRE_SPOLUPRÁCU",
    viewProject: "> ZOBRAZIŤ_NA_GITHUB",
    screenshot: "[ SCREENSHOT ]",
    uploadHint: "nahraj obrázok",
    footer: "POSTAVENÉ_S REACT + VITE",
    formName: "Meno",
    formEmail: "Email",
    formMsg: "Správa",
    formSend: "> ODOSLAŤ",
    formSending: "ODOSIELA...",
    formOk: "✓ Správa odoslaná!",
    formErr: "✕ Chyba, skús znova.",
    exp: [
      { year: "2022", title: "NÁSTUP DO SSOSZA", place: "Žilina", desc: "Začiatok štúdia IT — základy programovania, sietí a digitálnych technológií.", done: true },
      { year: "2024", title: "CCNA CERTIFIKÁT", place: "Cisco Networking Academy", desc: "Úspešne zložený certifikát — základy sietí, smerovanie, prepínanie, TCP/IP.", done: true },
      { year: "03–04/2025", title: "ERASMUS+ STÁŽ", place: "Ekip Europa // Málaga 🇪🇸", desc: "Vybraný spomedzi 10 najlepších žiakov. Upgrade 45 PC, konfigurácia sietí, tvorba webu v React.js.", done: true },
      { year: "05/2026", title: "MATURITA", place: "SSOSZA // Žilina", desc: "Maturitný odbor 2569 M — Informačné a digitálne technológie.", done: false },
      { year: "2026+", title: "VYSOKÁ ŠKOLA", place: "VŠB-TUO // Ostrava  ·  UNIZA // Žilina", desc: "Cieľ: Komunikačné a sieťové technológie. VŠB-TUO Ostrava (KIT) alebo UNIZA Žilina (FEIT/FRI). Jeden z týchto smerov — rozhodnutie čoskoro.", done: false, uni: true },
      { year: "2026+", title: "B2 CERTIFIKÁT — ANGLIČTINA", place: "Cieľ", desc: "Chcem získať certifikát B2 z anglického jazyka a posunúť sa na vyššiu úroveň.", done: false },
    ],
  },
  EN: {
    nav: ["About", "Skills", "Projects", "Experience", "Contact"],
    heroTag: "// Žilina, Slovakia",
    heroRole: "Web Developer & Android Dev",
    heroDesc: "My name is Matúš Hrtánek, I'm 19 years old and I'm from Žilina, Slovakia. I focus on building websites, mobile apps and network solutions. I offer custom solutions — whether you need a simple website, an app or something more complex.",
    heroCta1: "> CONTACT",
    heroCta2: "> PROJECTS",
    skillsTitle: "SKILLS",
    projectsTitle: "PROJECTS",
    projectsHint: "// click project to open gallery",
    expTitle: "EXPERIENCE",
    expSub: "// each station = a milestone on the journey",
    contactTitle: "CONTACT",
    contactSub: "// Have a project? Write to me.",
    available: "AVAILABLE_FOR_HIRE",
    viewProject: "> VIEW_ON_GITHUB",
    screenshot: "[ SCREENSHOT ]",
    uploadHint: "upload image",
    footer: "BUILT_WITH REACT + VITE",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formSend: "> SEND",
    formSending: "SENDING...",
    formOk: "✓ Message sent!",
    formErr: "✕ Error, try again.",
    exp: [
      { year: "2022", title: "ENROLLED AT SSOSZA", place: "Žilina", desc: "Started IT studies — programming, networking and digital technologies.", done: true },
      { year: "2024", title: "CCNA CERTIFICATE", place: "Cisco Networking Academy", desc: "Successfully passed — networking basics, routing, switching, TCP/IP.", done: true },
      { year: "03–04/2025", title: "ERASMUS+ INTERNSHIP", place: "Ekip Europa // Málaga 🇪🇸", desc: "Selected among top 10 students. Upgraded 45 PCs, configured networks, built website in React.js.", done: true },
      { year: "05/2026", title: "GRADUATION", place: "SSOSZA // Žilina", desc: "IT programme 2569 M — Information and Digital Technologies.", done: false },
      { year: "2026+", title: "UNIVERSITY", place: "VŠB-TUO // Ostrava  ·  UNIZA // Žilina", desc: "Goal: Communication and Network Technologies. VŠB-TUO Ostrava (KIT) or UNIZA Žilina (FEIT/FRI). Decision coming soon.", done: false, uni: true },
      { year: "2026+", title: "B2 ENGLISH CERTIFICATE", place: "Goal", desc: "Aiming to obtain a B2 English certificate and reach a higher level of proficiency.", done: false },
    ],
  },
  DE: {
    nav: ["Über mich", "Fähigkeiten", "Projekte", "Erfahrung", "Kontakt"],
    heroTag: "// Žilina, Slowakei",
    heroRole: "Web Developer & Android Dev",
    heroDesc: "Mein Name ist Matúš Hrtánek, ich bin 19 Jahre alt und komme aus Žilina, Slowakei. Ich spezialisiere mich auf Webentwicklung, mobile Apps und Netzwerklösungen.",
    heroCta1: "> KONTAKT",
    heroCta2: "> PROJEKTE",
    skillsTitle: "FÄHIGKEITEN",
    projectsTitle: "PROJEKTE",
    projectsHint: "// Projekt anklicken für Galerie",
    expTitle: "ERFAHRUNG",
    expSub: "// jede Station = ein Meilenstein",
    contactTitle: "KONTAKT",
    contactSub: "// Haben Sie ein Projekt? Schreiben Sie mir.",
    available: "VERFÜGBAR_FÜR_ZUSAMMENARBEIT",
    viewProject: "> AUF_GITHUB_ANSEHEN",
    screenshot: "[ SCREENSHOT ]",
    uploadHint: "Bild hochladen",
    footer: "ERSTELLT_MIT REACT + VITE",
    formName: "Name",
    formEmail: "E-Mail",
    formMsg: "Nachricht",
    formSend: "> SENDEN",
    formSending: "WIRD GESENDET...",
    formOk: "✓ Nachricht gesendet!",
    formErr: "✕ Fehler, erneut versuchen.",
    exp: [
      { year: "2022", title: "EINTRITT IN SSOSZA", place: "Žilina", desc: "Beginn des IT-Studiums — Programmierung, Netzwerke, digitale Technologien.", done: true },
      { year: "2024", title: "CCNA-ZERTIFIKAT", place: "Cisco Networking Academy", desc: "Erfolgreich bestanden — Netzwerkgrundlagen, Routing, Switching, TCP/IP.", done: true },
      { year: "03–04/2025", title: "ERASMUS+ PRAKTIKUM", place: "Ekip Europa // Málaga 🇪🇸", desc: "Unter den Top 10 Schülern ausgewählt. 45 PCs aufgerüstet, Netzwerke konfiguriert, Website in React.js.", done: true },
      { year: "05/2026", title: "ABITUR", place: "SSOSZA // Žilina", desc: "IT-Programm 2569 M — Informations- und Digitaltechnologien.", done: false },
      { year: "2026+", title: "UNIVERSITÄT", place: "VŠB-TUO // Ostrava  ·  UNIZA // Žilina", desc: "Ziel: Kommunikations- und Netzwerktechnologien. VŠB-TUO Ostrava (KIT) oder UNIZA Žilina (FEIT/FRI).", done: false, uni: true },
      { year: "2026+", title: "B2-ZERTIFIKAT ENGLISCH", place: "Ziel", desc: "Ich möchte ein B2-Zertifikat in Englisch erwerben.", done: false },
    ],
  },
  CS: {
    nav: ["O mně", "Dovednosti", "Projekty", "Zkušenosti", "Kontakt"],
    heroTag: "// Žilina, Slovensko",
    heroRole: "Web Developer & Android Dev",
    heroDesc: "Jmenuji se Matúš Hrtánek, je mi 19 let a pocházím ze Žiliny. Věnuji se tvorbě webových stránek, mobilních aplikací a sítí. Nabízím řešení na míru.",
    heroCta1: "> KONTAKT",
    heroCta2: "> PROJEKTY",
    skillsTitle: "DOVEDNOSTI",
    projectsTitle: "PROJEKTY",
    projectsHint: "// klikni na projekt pro galerii",
    expTitle: "ZKUŠENOSTI",
    expSub: "// každá stanice = milník na cestě",
    contactTitle: "KONTAKT",
    contactSub: "// Máš projekt? Napiš mi.",
    available: "DOSTUPNÝ_PRO_SPOLUPRÁCI",
    viewProject: "> ZOBRAZIT_NA_GITHUB",
    screenshot: "[ SCREENSHOT ]",
    uploadHint: "nahraj obrázek",
    footer: "POSTAVENO_S REACT + VITE",
    formName: "Jméno",
    formEmail: "Email",
    formMsg: "Zpráva",
    formSend: "> ODESLAT",
    formSending: "ODESÍLÁ...",
    formOk: "✓ Zpráva odeslána!",
    formErr: "✕ Chyba, zkus znovu.",
    exp: [
      { year: "2022", title: "NÁSTUP DO SSOSZA", place: "Žilina", desc: "Začátek IT studia — základy programování, sítí a digitálních technologií.", done: true },
      { year: "2024", title: "CCNA CERTIFIKÁT", place: "Cisco Networking Academy", desc: "Úspěšně složen — základy sítí, směrování, přepínání, TCP/IP.", done: true },
      { year: "03–04/2025", title: "ERASMUS+ STÁŽ", place: "Ekip Europa // Málaga 🇪🇸", desc: "Vybrán mezi 10 nejlepšími žáky. Upgrade 45 PC, konfigurace sítí, tvorba webu v React.js.", done: true },
      { year: "05/2026", title: "MATURITA", place: "SSOSZA // Žilina", desc: "Maturitní obor 2569 M — Informační a digitální technologie.", done: false },
      { year: "2026+", title: "VYSOKÁ ŠKOLA", place: "VŠB-TUO // Ostrava  ·  UNIZA // Žilina", desc: "Cíl: Komunikační a síťové technologie. VŠB-TUO Ostrava (KIT) nebo UNIZA Žilina (FEIT/FRI). Rozhodnutí brzy.", done: false, uni: true },
      { year: "2026+", title: "B2 CERTIFIKÁT — ANGLIČTINA", place: "Cíl", desc: "Chci získat certifikát B2 z anglického jazyka.", done: false },
    ],
  },
};

const PROJECTS = [
  {
    id: 1,
    title: "My Expenses",
    desc: { SK: "Android aplikácia pre sledovanie hotovostných výdavkov. Maturitná práca. Od konceptu po finálny produkt.", EN: "Android app for tracking cash expenses. Final thesis. From concept to finished product.", DE: "Android-App zur Verfolgung von Barausgaben. Abschlussprojekt.", CS: "Android aplikace pro sledování hotovostních výdajů. Maturitní práce." },
    tags: ["Kotlin", "Android Studio", "SharedPreferences"],
    link: "https://github.com/MHrtanek/funds_app",
    images: [],
  },
  {
    id: 2,
    title: "XML Validator",
    desc: { SK: "Webová aplikácia pre automatické porovnávanie a validáciu bankových výpisov vo formáte XML. Nasadené na AWS.", EN: "Web app for automatic comparison and validation of bank statements in XML. Deployed on AWS.", DE: "Web-App zum Vergleich von Kontoauszügen im XML-Format. Auf AWS deployed.", CS: "Webová aplikace pro porovnávání XML bankovních výpisů. Nasazeno na AWS." },
    tags: ["TypeScript", "HTML", "CSS", "AWS", "Git"],
    link: "https://github.com/MHrtanek",
    images: [],
  },
  {
    id: 3,
    title: "Ekip Europa Web",
    desc: { SK: "Webová stránka vytvorená počas Erasmus+ stáže v Málage. React.js, HTML/CSS, phpMyAdmin.", EN: "Website built during Erasmus+ internship in Málaga. React.js, HTML/CSS, phpMyAdmin.", DE: "Website während des Erasmus+ Praktikums in Málaga. React.js, HTML/CSS, phpMyAdmin.", CS: "Webová stránka vytvořená během Erasmus+ stáže v Málaze. React.js, HTML/CSS, phpMyAdmin." },
    tags: ["React.js", "HTML", "CSS", "phpMyAdmin"],
    link: "https://github.com/MHrtanek",
    images: [],
  },
];

const SKILLS = [
  { cat: { SK: "Jazyky", EN: "Languages", DE: "Sprachen", CS: "Jazyky" }, items: ["Kotlin", "TypeScript", "Java", "PHP", "HTML/CSS", "SQL"] },
  { cat: { SK: "Frameworky", EN: "Frameworks", DE: "Frameworks", CS: "Frameworky" }, items: ["React.js", "Node.js"] },
  { cat: { SK: "Nástroje", EN: "Tools", DE: "Werkzeuge", CS: "Nástroje" }, items: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Wireshark", "Cisco Packet Tracer"] },
  { cat: { SK: "Siete & Cloud", EN: "Networks & Cloud", DE: "Netzwerke & Cloud", CS: "Sítě & Cloud" }, items: ["CCNA certified", "AWS", "DHCP/DNS", "TCP/IP", "VMware", "VirtualBox"] },
];

const LANGS = ["SK", "EN", "DE", "CS"];

const PIXEL_ICONS = ["◈","▣","◉","▦","◎","▤","◇","▧","○","▩","◆","▨","□","▪","■","△","▲","◀","▶","★","☆","♦","♠","♣","⊕","⊗","⊙","※","⌘","⌥"];

function SideBanner({ side }) {
  return (
    <div className={`side-banner side-banner--${side}`}>
      {PIXEL_ICONS.map((icon, i) => (
        <span key={i} className="side-icon" style={{ animationDelay: `${i * 0.3}s` }}>{icon}</span>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("SK");
  const [lightbox, setLightbox] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null); // null | "sending" | "ok" | "err"
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const openGallery = (project) => {
    if (project.images.length === 0) return;
    setLightbox({ images: project.images, index: 0 });
  };
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));
  const nextImg = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgopovzb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setFormStatus("ok");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setFormStatus("err");
      }
    } catch {
      setFormStatus("err");
    }
  };

  return (
    <div className="app dark">
      <div className="scanlines" />
      <SideBanner side="left" />
      <SideBanner side="right" />

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb__close" onClick={closeLightbox}>✕</button>
          <button className="lb__prev" onClick={(e) => { e.stopPropagation(); prevImg(); }}>‹</button>
          <img src={lightbox.images[lightbox.index]} alt="" className="lb__img" onClick={(e) => e.stopPropagation()} />
          <button className="lb__next" onClick={(e) => { e.stopPropagation(); nextImg(); }}>›</button>
          <div className="lb__counter">{lightbox.index + 1} / {lightbox.images.length}</div>
        </div>
      )}

      {/* NAV */}
      <nav className="nav">
        <div className="nav__logo" onClick={() => scrollTo("hero")}>
          <span className="pixel-bracket">[</span>MH<span className="pixel-bracket">]</span>
        </div>
        <ul className="nav__links">
          {[["hero"],["zrucnosti"],["projekty"],["skusenosti"],["kontakt"]].map(([id], i) => (
            <li key={id}><button onClick={() => scrollTo(id)}>{t.nav[i]}</button></li>
          ))}
        </ul>
        <div className="lang-switcher">
          {LANGS.map(l => (
            <button key={l} className={lang === l ? "lang-btn active" : "lang-btn"} onClick={() => setLang(l)}>{l}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__left">
          <div className="hero__avatar">
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="80" fill="currentColor" opacity="0.06"/>
              <rect x="28" y="8" width="24" height="24" fill="currentColor"/>
              <rect x="20" y="36" width="40" height="28" fill="currentColor"/>
              <rect x="12" y="36" width="12" height="20" fill="currentColor"/>
              <rect x="56" y="36" width="12" height="20" fill="currentColor"/>
              <rect x="20" y="64" width="12" height="12" fill="currentColor"/>
              <rect x="48" y="64" width="12" height="12" fill="currentColor"/>
            </svg>
          </div>
          <div className="hero__status"><span className="status-dot" />{t.available}</div>
        </div>
        <div className="hero__right">
          <p className="hero__tag">{t.heroTag}</p>
          <h1 className="hero__name">MATÚŠ<br /><span>HRTÁNEK</span></h1>
          <p className="hero__role">{t.heroRole}</p>
          <div className="hero__divider" />
          <p className="hero__desc">{t.heroDesc}</p>
          <div className="hero__contacts">
            <span>hrtanekmatus02@gmail.com</span>
            <span className="sep">//</span>
            <span>+421 949 156 133</span>
          </div>
          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={() => scrollTo("kontakt")}>{t.heroCta1}</button>
            <button className="btn btn--outline" onClick={() => scrollTo("projekty")}>{t.heroCta2}</button>
            <a className="btn btn--outline" href="https://github.com/MHrtanek" target="_blank" rel="noreferrer">&gt; GITHUB</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="zrucnosti" className="section">
        <div className="section__inner">
          <h2 className="section__title">{t.skillsTitle}</h2>
          <div className="skills__grid">
            {SKILLS.map(({ cat, items }, si) => (
              <div className="skill-card reveal" key={cat.SK} style={{ animationDelay: `${si * 0.1}s` }}>
                <div className="skill-card__header">{cat[lang].toUpperCase()}</div>
                <ul>{items.map(i => <li key={i}><span className="arr">&gt;</span> {i}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="cert-banner reveal">
            <span className="cert-icon">▣</span>
            <span>CCNA: Introduction to Networks — Cisco Networking Academy // 2024</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projekty" className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">{t.projectsTitle}</h2>
          <p className="section__hint">{t.projectsHint}</p>
          <div className="projects__grid">
            {PROJECTS.map((p, pi) => (
              <div className={`project-card reveal ${p.images.length > 0 ? "project-card--clickable" : ""}`} key={p.id} style={{ animationDelay: `${pi * 0.12}s` }} onClick={() => openGallery(p)}>
                <div className="project-card__img">
                  {p.images.length > 0
                    ? <img src={p.images[0]} alt={p.title} />
                    : <div className="project-card__placeholder"><span>{t.screenshot}</span><span className="placeholder-hint">{t.uploadHint}</span></div>
                  }
                  {p.images.length > 1 && <div className="project-card__count">+{p.images.length} foto</div>}
                </div>
                <div className="project-card__body">
                  <h3>{p.title}</h3>
                  <p>{p.desc[lang]}</p>
                  <div className="project-card__tags">{p.tags.map(t2 => <span key={t2}>{t2}</span>)}</div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-card__link" onClick={e => e.stopPropagation()}>{t.viewProject}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE — TRAIN */}
      <section id="skusenosti" className="section">
        <div className="section__inner">
          <h2 className="section__title">{t.expTitle}</h2>
          <p className="section__hint">{t.expSub}</p>
          <div className="train">
            <div className="train__track" />
            {t.exp.map((item, i) => (
              <div
                className={`train__station reveal ${item.done ? "station--done" : "station--future"}`}
                key={i}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="station__connector" />
                <div className="station__node">{item.done ? "●" : "○"}</div>
                <div className="station__card">
                  <div className="station__header">
                    <div className="station__year">{item.year}</div>
                    {item.done && <span className="station__check">✓ DONE</span>}
                    {!item.done && <span className="station__badge blink">[ NEXT_STOP ]</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p className="station__place">{item.place}</p>
                  {item.uni && (
                    <div className="station__unis">
                      <a href="https://www.vsb.cz/cs/fakulta/fit/" target="_blank" rel="noreferrer" className="uni-link">
                        <span className="uni-link__name">VŠB-TUO</span>
                        <span className="uni-link__sub">Ostrava · KIT</span>
                        <span className="uni-link__arr">&gt;</span>
                      </a>
                      <a href="https://www.uniza.sk/index.php/sk/fakulty/feit" target="_blank" rel="noreferrer" className="uni-link">
                        <span className="uni-link__name">UNIZA FEIT</span>
                        <span className="uni-link__sub">Žilina · Elektrotechnika</span>
                        <span className="uni-link__arr">&gt;</span>
                      </a>
                      <a href="https://fri.uniza.sk" target="_blank" rel="noreferrer" className="uni-link">
                        <span className="uni-link__name">UNIZA FRI</span>
                        <span className="uni-link__sub">Žilina · Informatika</span>
                        <span className="uni-link__arr">&gt;</span>
                      </a>
                    </div>
                  )}
                  <p className="station__desc">{item.desc}</p>
                  {item.done && (
                    <div className="station__stamp">COMPLETED</div>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="section section--alt">
        <div className="section__inner">
          <h2 className="section__title">{t.contactTitle}</h2>
          <p className="contact__sub">{t.contactSub}</p>
          <div className="contact__layout">
            <div className="contact__links">
              <a href="mailto:hrtanekmatus02@gmail.com" className="contact__card">
                <span className="contact__label">EMAIL</span>
                <span className="contact__val">hrtanekmatus02@gmail.com</span>
                <span className="contact__arr">&gt;</span>
              </a>
              <a href="tel:+421949156133" className="contact__card">
                <span className="contact__label">{lang === "EN" ? "PHONE" : "TELEFÓN"}</span>
                <span className="contact__val">+421 949 156 133</span>
                <span className="contact__arr">&gt;</span>
              </a>
              <a href="https://github.com/MHrtanek" target="_blank" rel="noreferrer" className="contact__card">
                <span className="contact__label">GITHUB</span>
                <span className="contact__val">github.com/MHrtanek</span>
                <span className="contact__arr">&gt;</span>
              </a>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__field">
                <label>{t.formName}</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  placeholder={t.formName + "..."}
                />
              </div>
              <div className="form__field">
                <label>{t.formEmail}</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  placeholder={t.formEmail + "..."}
                />
              </div>
              <div className="form__field">
                <label>{t.formMsg}</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  placeholder={t.formMsg + "..."}
                />
              </div>
              {formStatus === "ok"
                ? <div className="form__status form__status--ok">{t.formOk}</div>
                : formStatus === "err"
                ? <div className="form__status form__status--err">{t.formErr}</div>
                : (
                  <button type="submit" className="btn btn--primary" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? t.formSending : t.formSend}
                  </button>
                )
              }
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 MATÚŠ_HRTÁNEK</span>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}