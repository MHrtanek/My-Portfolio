import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Monitor, Network, Cpu, HardDrive, Bot } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

const SKILL_ICONS = [Code2, Monitor, Network, Cpu, HardDrive, Bot];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];
  const [photoError, setPhotoError] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);

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
    <>
      {/* HERO */}
      <motion.div
        className="hero"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <div className="hero-left">
            <motion.h1 variants={fadeUp}>Matúš Hrtánek</motion.h1>
            <motion.div className="hero-school" variants={fadeUp}>
              <span>{t.heroSchoolPrefix}</span>
              <a href="https://ssosza.edupage.org/" target="_blank" rel="noreferrer">SSOSZA Žilina</a>
            </motion.div>
            <motion.p className="hero-hook" variants={fadeUp}>{t.heroHook}</motion.p>
          </div>

          <motion.div className="hero-photo" variants={fadeUp}>
            {!photoError ? (
              <img
                src="/avatar.jpg"
                alt="Matúš Hrtánek"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="hero-photo-placeholder">Foto (3:4)</div>
            )}
          </motion.div>
        </div>

        <motion.div className="scroll-indicator" variants={fadeUp}>
          <div className="scroll-arrow" />
        </motion.div>
      </motion.div>

      {/* ABOUT */}
      <section id="about" className="section">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.aboutTitle}
        </motion.h2>
        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.aboutP1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.aboutP2}
          </motion.p>
        </div>
      </section>

      {/* SKILLS */}
      <div id="skills" className="section-alt-wrapper">
        <div className="section">
          <h2 className="section-heading">{t.skillsTitle}</h2>
          <div className="skills-grid">
            {t.skills.map((skill, i) => {
              const Icon = SKILL_ICONS[i];
              return (
              <Link key={skill.route} to={skill.route} className="skill-card">
                <div className="skill-card-icon">
                  <Icon size={28} color="#000" />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
                <span className="skill-card-link">
                  {skill.link}
                  <span className="skill-card-arrow">→</span>
                </span>
              </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* PLANS */}
      <section id="plans" className="section">
        <h2 className="section-heading">{t.plansTitle}</h2>
        <div className="plans-content">
          {t.plans.map((plan) => (
            <div key={plan.title} className="plan-card">
              <h3>{plan.title}</h3>
              <p>{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div id="contact" className="section-alt-wrapper">
        <section className="section">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.contactTitle}
          </motion.h2>
          <div className="contact-layout">
            <div className="contact-info">
              <p className="contact-sub">{t.contactSub}</p>
              {[
                { label: "Email", value: "hrtanekmatus02@gmail.com", href: "mailto:hrtanekmatus02@gmail.com" },
                { label: "Phone", value: "+421 949 156 133", href: "tel:+421949156133" },
                { label: "GitHub", value: "github.com/MHrtanek", href: "https://github.com/MHrtanek", external: true },
              ].map(({ label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  className="contact-card"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span className="contact-label">{label}</span>
                  <span className="contact-val">{value}</span>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label>{t.formName}</label>
                <input
                  type="text"
                  required
                  placeholder={`${t.formName}...`}
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                />
              </div>
              <div className="form-field">
                <label>{t.formEmail}</label>
                <input
                  type="email"
                  required
                  placeholder={`${t.formEmail}...`}
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                />
              </div>
              <div className="form-field">
                <label>{t.formMsg}</label>
                <textarea
                  required
                  rows={5}
                  placeholder={`${t.formMsg}...`}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                />
              </div>
              {formStatus === "ok" ? (
                <div className="form-status form-status--ok">{t.formOk}</div>
              ) : (
                <>
                  {formStatus === "err" && (
                    <div className="form-status form-status--err">{t.formErr}</div>
                  )}
                  <button type="submit" className="form-submit" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? t.formSending : t.formSend}
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
