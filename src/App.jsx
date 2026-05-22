import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const TRANSLATIONS = {
  SK: {
    nav: ["O mne", "Zručnosti", "Projekty", "Skúsenosti", "Kontakt"],
    available: "Dostupný pre freelance",
    heroTagline: "Tvorím webové a Android aplikácie na mieru.",
    aboutTitle: "O mne",
    aboutDesc:
      "Volám sa Matúš Hrtánek, mám 19 rokov a som zo Žiliny. Venujem sa tvorbe webových stránok, mobilných aplikácií a sietí. Ponúkam riešenia na mieru — či už potrebuješ jednoduchú stránku, aplikáciu alebo niečo komplexnejšie.",
    aboutStats: [
      { value: "3+", label: "Projekty" },
      { value: "CCNA", label: "Cisco certifikát" },
      { value: "2025", label: "Erasmus+ stáž" },
    ],
    skillsTitle: "Zručnosti",
    projectsTitle: "Projekty",
    expTitle: "Skúsenosti",
    contactTitle: "Kontakt",
    contactSub: "Máš projekt? Rád si vypočujem.",
    heroCta1: "Kontaktuj ma",
    heroCta2: "Zobraziť projekty",
    viewProject: "GitHub →",
    formName: "Meno",
    formEmail: "Email",
    formMsg: "Správa",
    formSend: "Odoslať správu",
    formSending: "Odosiela...",
    formOk: "Správa odoslaná!",
    formErr: "Chyba, skús znova.",
    exp: [
      { year: "2022", title: "Nástup do SSOSZA", place: "Žilina", desc: "Začiatok štúdia IT — základy programovania, sietí a digitálnych technológií.", done: true },
      { year: "2024", title: "CCNA certifikát", place: "Cisco Networking Academy", desc: "Úspešne zložený certifikát — základy sietí, smerovanie, prepínanie, TCP/IP.", done: true },
      { year: "03–04/2025", title: "Erasmus+ stáž", place: "Ekip Europa · Málaga 🇪🇸", desc: "Vybraný spomedzi 10 najlepších žiakov. Upgrade 45 PC, konfigurácia sietí, tvorba webu v React.js.", done: true },
      { year: "05/2026", title: "Maturita", place: "SSOSZA · Žilina", desc: "Maturitný odbor 2569 M — Informačné a digitálne technológie.", done: true },
      { year: "2026+", title: "Vysoká škola", place: "VŠB-TUO · Ostrava", desc: "Cieľ: Komunikačné a sieťové technológie. VŠB-TUO Ostrava (KIT).", done: false, uni: true },
      { year: "2026+", title: "B2 certifikát — Angličtina", place: "Cieľ", desc: "Chcem získať certifikát B2 z anglického jazyka a posunúť sa na vyššiu úroveň.", done: false },
    ],
  },
  EN: {
    nav: ["About", "Skills", "Projects", "Experience", "Contact"],
    available: "Available for freelance",
    heroTagline: "Building clean web & Android experiences.",
    aboutTitle: "About Me",
    aboutDesc:
      "My name is Matúš Hrtánek, I'm 19 years old and I'm from Žilina, Slovakia. I focus on building websites, mobile apps and network solutions. I offer custom solutions — whether you need a simple website, an app or something more complex.",
    aboutStats: [
      { value: "3+", label: "Projects Built" },
      { value: "CCNA", label: "Cisco Certified" },
      { value: "2025", label: "Erasmus+ Alumni" },
    ],
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    expTitle: "Experience",
    contactTitle: "Contact",
    contactSub: "Have a project in mind? I'd love to hear about it.",
    heroCta1: "Get in touch",
    heroCta2: "View projects",
    viewProject: "GitHub →",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    formSend: "Send message",
    formSending: "Sending...",
    formOk: "Message sent!",
    formErr: "Error, please try again.",
    exp: [
      { year: "2022", title: "Enrolled at SSOSZA", place: "Žilina", desc: "Started IT studies — programming, networking and digital technologies.", done: true },
      { year: "2024", title: "CCNA Certificate", place: "Cisco Networking Academy", desc: "Successfully passed — networking basics, routing, switching, TCP/IP.", done: true },
      { year: "03–04/2025", title: "Erasmus+ Internship", place: "Ekip Europa · Málaga 🇪🇸", desc: "Selected among top 10 students. Upgraded 45 PCs, configured networks, built website in React.js.", done: true },
      { year: "05/2026", title: "Graduation", place: "SSOSZA · Žilina", desc: "IT programme 2569 M — Information and Digital Technologies.", done: true },
      { year: "2026+", title: "University", place: "VŠB-TUO · Ostrava", desc: "Goal: Communication and Network Technologies. VŠB-TUO Ostrava (KIT).", done: false, uni: true },
      { year: "2026+", title: "B2 English Certificate", place: "Goal", desc: "Aiming to obtain a B2 English certificate and reach a higher level of proficiency.", done: false },
    ],
  },
  DE: {
    nav: ["Über mich", "Fähigkeiten", "Projekte", "Erfahrung", "Kontakt"],
    available: "Verfügbar für Freelance",
    heroTagline: "Web- und Android-Apps professionell entwickeln.",
    aboutTitle: "Über mich",
    aboutDesc:
      "Mein Name ist Matúš Hrtánek, ich bin 19 Jahre alt und komme aus Žilina, Slowakei. Ich spezialisiere mich auf Webentwicklung, mobile Apps und Netzwerklösungen. Ich biete maßgeschneiderte Lösungen — ob einfache Website, App oder etwas Komplexeres.",
    aboutStats: [
      { value: "3+", label: "Projekte" },
      { value: "CCNA", label: "Cisco-Zertifikat" },
      { value: "2025", label: "Erasmus+ Praktikum" },
    ],
    skillsTitle: "Fähigkeiten",
    projectsTitle: "Projekte",
    expTitle: "Erfahrung",
    contactTitle: "Kontakt",
    contactSub: "Haben Sie ein Projekt? Ich freue mich auf Ihre Nachricht.",
    heroCta1: "Kontakt aufnehmen",
    heroCta2: "Projekte ansehen",
    viewProject: "GitHub →",
    formName: "Name",
    formEmail: "E-Mail",
    formMsg: "Nachricht",
    formSend: "Nachricht senden",
    formSending: "Wird gesendet...",
    formOk: "Nachricht gesendet!",
    formErr: "Fehler, erneut versuchen.",
    exp: [
      { year: "2022", title: "Eintritt in SSOSZA", place: "Žilina", desc: "Beginn des IT-Studiums — Programmierung, Netzwerke, digitale Technologien.", done: true },
      { year: "2024", title: "CCNA-Zertifikat", place: "Cisco Networking Academy", desc: "Erfolgreich bestanden — Netzwerkgrundlagen, Routing, Switching, TCP/IP.", done: true },
      { year: "03–04/2025", title: "Erasmus+ Praktikum", place: "Ekip Europa · Málaga 🇪🇸", desc: "Unter den Top 10 Schülern ausgewählt. 45 PCs aufgerüstet, Netzwerke konfiguriert, Website in React.js erstellt.", done: true },
      { year: "05/2026", title: "Abitur", place: "SSOSZA · Žilina", desc: "IT-Programm 2569 M — Informations- und Digitaltechnologien.", done: true },
      { year: "2026+", title: "Universität", place: "VŠB-TUO · Ostrava", desc: "Ziel: Kommunikations- und Netzwerktechnologien. VŠB-TUO Ostrava (KIT).", done: false, uni: true },
      { year: "2026+", title: "B2-Zertifikat Englisch", place: "Ziel", desc: "Ich möchte ein B2-Zertifikat in Englisch erwerben.", done: false },
    ],
  },
  CS: {
    nav: ["O mně", "Dovednosti", "Projekty", "Zkušenosti", "Kontakt"],
    available: "Dostupný pro spolupráci",
    heroTagline: "Tvořím webové a Android aplikace na míru.",
    aboutTitle: "O mně",
    aboutDesc:
      "Jmenuji se Matúš Hrtánek, je mi 19 let a pocházím ze Žiliny. Věnuji se tvorbě webových stránek, mobilních aplikací a sítí. Nabízím řešení na míru — ať už potřebuješ jednoduchou stránku, aplikaci nebo něco komplexnějšího.",
    aboutStats: [
      { value: "3+", label: "Projektů" },
      { value: "CCNA", label: "Cisco certifikát" },
      { value: "2025", label: "Erasmus+ stáž" },
    ],
    skillsTitle: "Dovednosti",
    projectsTitle: "Projekty",
    expTitle: "Zkušenosti",
    contactTitle: "Kontakt",
    contactSub: "Máš projekt? Rád si o něm poslechnu.",
    heroCta1: "Kontaktuj mě",
    heroCta2: "Zobrazit projekty",
    viewProject: "GitHub →",
    formName: "Jméno",
    formEmail: "Email",
    formMsg: "Zpráva",
    formSend: "Odeslat zprávu",
    formSending: "Odesílá...",
    formOk: "Zpráva odeslána!",
    formErr: "Chyba, zkus znovu.",
    exp: [
      { year: "2022", title: "Nástup do SSOSZA", place: "Žilina", desc: "Začátek IT studia — základy programování, sítí a digitálních technologií.", done: true },
      { year: "2024", title: "CCNA certifikát", place: "Cisco Networking Academy", desc: "Úspěšně složen — základy sítí, směrování, přepínání, TCP/IP.", done: true },
      { year: "03–04/2025", title: "Erasmus+ stáž", place: "Ekip Europa · Málaga 🇪🇸", desc: "Vybrán mezi 10 nejlepšími žáky. Upgrade 45 PC, konfigurace sítí, tvorba webu v React.js.", done: true },
      { year: "05/2026", title: "Maturita", place: "SSOSZA · Žilina", desc: "Maturitní obor 2569 M — Informační a digitální technologie.", done: true },
      { year: "2026+", title: "Vysoká škola", place: "VŠB-TUO · Ostrava", desc: "Cíl: Komunikační a síťové technologie. VŠB-TUO Ostrava (KIT).", done: false, uni: true },
      { year: "2026+", title: "B2 certifikát — Angličtina", place: "Cíl", desc: "Chci získat certifikát B2 z anglického jazyka a posunout se na vyšší úroveň.", done: false },
    ],
  },
};

const PROJECTS = [
  {
    id: 1,
    title: "My Expenses",
    desc: {
      SK: "Android aplikácia pre sledovanie hotovostných výdavkov. Maturitná práca. Od konceptu po finálny produkt.",
      EN: "Android app for tracking cash expenses. Final thesis project. From concept to finished product.",
      DE: "Android-App zur Verfolgung von Barausgaben. Abschlussprojekt. Vom Konzept zum fertigen Produkt.",
      CS: "Android aplikace pro sledování hotovostních výdajů. Maturitní práce. Od konceptu po finální produkt.",
    },
    tags: ["Kotlin", "Android Studio", "SharedPreferences"],
    link: "https://github.com/MHrtanek/funds_app",
    images: [
      "screenshots/Appka01.png",
      "screenshots/Appka02.png",
      "screenshots/Appka03.png",
      "screenshots/Appka04.png",
      "screenshots/Appka05.png",
      "screenshots/Appka06.png",
    ],
  },
  {
    id: 2,
    title: "XML Validator",
    desc: {
      SK: "Webová aplikácia pre automatické porovnávanie a validáciu bankových výpisov vo formáte XML. Nasadené na AWS.",
      EN: "Web app for automatic comparison and validation of bank statements in XML format. Deployed on AWS.",
      DE: "Web-App zum automatischen Vergleich von Kontoauszügen im XML-Format. Auf AWS deployed.",
      CS: "Webová aplikace pro automatické porovnávání a validaci bankovních výpisů ve formátu XML. Nasazeno na AWS.",
    },
    tags: ["TypeScript", "HTML", "CSS", "AWS", "Git"],
    link: "https://github.com/MHrtanek",
    images: [
      "screenshots/ValidatorO1.png",
      "screenshots/Validator02.png",
      "screenshots/Validator03.png",
      "screenshots/Validator04.png",
      "screenshots/Validator05.png",
      "screenshots/Validator06.png",
    ],
  },
  {
    id: 3,
    title: "Vinyl E-Shop",
    desc: {
      SK: "Webová stránka vytvorená počas Erasmus+ stáže v Málage. React.js, HTML/CSS, phpMyAdmin.",
      EN: "Website built during Erasmus+ internship in Málaga. React.js, HTML/CSS, phpMyAdmin.",
      DE: "Website während des Erasmus+ Praktikums in Málaga erstellt. React.js, HTML/CSS, phpMyAdmin.",
      CS: "Webová stránka vytvořená během Erasmus+ stáže v Málaze. React.js, HTML/CSS, phpMyAdmin.",
    },
    tags: ["React.js", "HTML", "CSS", "phpMyAdmin"],
    link: "https://github.com/MHrtanek",
    images: [
      "screenshots/Vinyl_Prihlasenie_do_admin_panelu.png",
      "screenshots/Vinyl_znazornenie_produktu.png",
      "screenshots/Vinyl_prudukty.png",
    ],
  },
  {
    id: 4,
    title: "Domovník",
    desc: {
      SK: "Webová aplikácia pre správu budov a bytov. Evidencia nájomníkov, platieb a správy budovy.",
      EN: "Web application for building and apartment management. Tenant records, payments and property administration.",
      DE: "Webanwendung für Gebäude- und Wohnungsverwaltung. Mieterverwaltung, Zahlungen und Hausverwaltung.",
      CS: "Webová aplikace pro správu budov a bytů. Evidence nájemníků, plateb a správy budovy.",
    },
    tags: ["Next.js", "TypeScript", "MySQL"],
    link: "https://github.com/MHrtanek",
    liveLink: "https://domovnik.online",
    live: true,
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

export default function App() {
  const [lang, setLang] = useState("SK");
  const [lightbox, setLightbox] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const t = TRANSLATIONS[lang];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const openGallery = (project) => {
    if (project.images.length === 0) return;
    setLightbox({ images: project.images, index: 0 });
  };
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((l) => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));
  const nextImg = () => setLightbox((l) => ({ ...l, index: (l.index + 1) % l.images.length }));

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
    <div className="app">
      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <button className="lb__close" onClick={closeLightbox}>✕</button>
            <button className="lb__prev" onClick={(e) => { e.stopPropagation(); prevImg(); }}>‹</button>
            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={lightbox.images[lightbox.index]}
              alt=""
              className="lb__img"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lb__next" onClick={(e) => { e.stopPropagation(); nextImg(); }}>›</button>
            <div className="lb__counter">{lightbox.index + 1} / {lightbox.images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAV */}
      <motion.nav
        className="nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="nav__logo" onClick={() => scrollTo("hero")}>MH</button>
        <ul className="nav__links">
          {["about", "skills", "projects", "experience", "contact"].map((id, i) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>{t.nav[i]}</button>
            </li>
          ))}
        </ul>
        <div className="lang-switcher">
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
      </motion.nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__content">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="hero__stack">
            <motion.div
              variants={fadeUp}
              className="hero__avatar-wrap"
            >
              <div className="hero__avatar">
                <img
                  src="/avatar.jpg"
                  alt="Matúš Hrtánek"
                  className="hero__avatar-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <span className="hero__avatar-icon" style={{ display: "none" }}>
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                    <circle cx="40" cy="28" r="16" fill="currentColor" opacity="0.35" />
                    <ellipse cx="40" cy="66" rx="26" ry="16" fill="currentColor" opacity="0.25" />
                  </svg>
                </span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="hero__badge">
              <span className="badge-dot" />
              {t.available}
            </motion.div>
            <motion.h1 variants={fadeUp} className="hero__name">
              Matúš Hrtánek
            </motion.h1>
            <motion.p variants={fadeUp} className="hero__role">
              Web &amp; Android Developer
            </motion.p>
            <motion.p variants={fadeUp} className="hero__tagline">
              {t.heroTagline}
            </motion.p>
            <motion.div variants={fadeUp} className="hero__contacts">
              <span>hrtanekmatus02@gmail.com</span>
              <span className="hero__contacts-sep">·</span>
              <span>+421 949 156 133</span>
            </motion.div>
            <motion.div variants={fadeUp} className="hero__ctas">
              <button className="btn btn--primary" onClick={() => scrollTo("contact")}>
                {t.heroCta1}
              </button>
              <a
                className="btn btn--outline"
                href="https://github.com/MHrtanek"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <button className="btn btn--ghost" onClick={() => scrollTo("projects")}>
                {t.heroCta2}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section__inner">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section__title"
          >
            {t.aboutTitle}
          </motion.h2>
          <div className="about__grid">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about__text"
            >
              {t.aboutDesc}
            </motion.p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about__stats"
            >
              {t.aboutStats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="stat-card">
                  <div className="stat-card__value">{stat.value}</div>
                  <div className="stat-card__label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section--alt">
        <div className="section__inner">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section__title"
          >
            {t.skillsTitle}
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="skills__grid"
          >
            {SKILLS.map(({ cat, items }) => (
              <motion.div key={cat.EN} variants={fadeUp} className="skill-category">
                <h3 className="skill-category__title">{cat[lang]}</h3>
                <div className="skill-badges">
                  {items.map((item) => (
                    <span key={item} className="skill-badge">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="cert-card"
          >
            <span className="cert-card__icon">🎓</span>
            <div>
              <div className="cert-card__title">CCNA: Introduction to Networks</div>
              <div className="cert-card__sub">Cisco Networking Academy · 2024</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section__inner">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section__title"
          >
            {t.projectsTitle}
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="projects__grid"
          >
            {PROJECTS.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`project-card${p.images.length > 0 ? " project-card--clickable" : ""}`}
                onClick={() => openGallery(p)}
              >
                <div className="project-card__img">
                  {p.images.length > 0 ? (
                    <>
                      <img src={p.images[0]} alt={p.title} />
                      {p.images.length > 1 && (
                        <div className="project-card__count">+{p.images.length} photos</div>
                      )}
                    </>
                  ) : (
                    <div className="project-card__placeholder" />
                  )}
                  {p.live && <div className="project-card__live-badge">Live</div>}
                </div>
                <div className="project-card__body">
                  <h3>{p.title}</h3>
                  <p>{p.desc[lang]}</p>
                  <div className="project-card__tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    {p.liveLink && (
                      <a
                        href={p.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link project-link--live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ↗ Live
                      </a>
                    )}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t.viewProject}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section section--alt">
        <div className="section__inner">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section__title"
          >
            {t.expTitle}
          </motion.h2>
          <div className="timeline">
            {t.exp.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
                className={`timeline__item${item.done ? "" : " timeline__item--future"}`}
              >
                <div className="timeline__marker">
                  <div className="timeline__dot" />
                  {i < t.exp.length - 1 && <div className="timeline__line" />}
                </div>
                <div className="timeline__card">
                  <div className="timeline__header">
                    <span className="timeline__year">{item.year}</span>
                    {item.done ? (
                      <span className="timeline__badge timeline__badge--done">Completed</span>
                    ) : (
                      <span className="timeline__badge timeline__badge--upcoming">Upcoming</span>
                    )}
                  </div>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__place">{item.place}</p>
                  <p className="timeline__desc">{item.desc}</p>
                  {item.uni && (
                    <div className="timeline__unis">
                      <a href="https://www.vsb.cz/cs" target="_blank" rel="noreferrer" className="uni-link">
                        VŠB-TUO Ostrava <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="section__inner">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section__title"
          >
            {t.contactTitle}
          </motion.h2>
          <div className="contact__layout">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="contact__info"
            >
              <motion.p variants={fadeUp} className="contact__sub">{t.contactSub}</motion.p>
              {[
                { label: "Email", value: "hrtanekmatus02@gmail.com", href: "mailto:hrtanekmatus02@gmail.com" },
                { label: lang === "DE" ? "Telefon" : "Phone", value: "+421 949 156 133", href: "tel:+421949156133" },
                { label: "GitHub", value: "github.com/MHrtanek", href: "https://github.com/MHrtanek" },
              ].map(({ label, value, href }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={label === "GitHub" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact__card"
                >
                  <span className="contact__label">{label}</span>
                  <span className="contact__val">{value}</span>
                  <span className="contact__arrow">→</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="form__field">
                <label>{t.formName}</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder={`${t.formName}...`}
                />
              </div>
              <div className="form__field">
                <label>{t.formEmail}</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder={`${t.formEmail}...`}
                />
              </div>
              <div className="form__field">
                <label>{t.formMsg}</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder={`${t.formMsg}...`}
                />
              </div>
              {formStatus === "ok" ? (
                <div className="form__status form__status--ok">{t.formOk}</div>
              ) : (
                <>
                  {formStatus === "err" && (
                    <div className="form__status form__status--err">{t.formErr}</div>
                  )}
                  <button type="submit" className="btn btn--primary" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? t.formSending : t.formSend}
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2026 Matúš Hrtánek</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}
