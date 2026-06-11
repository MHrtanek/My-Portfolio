import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { PROJECTS } from "../data/projects";
import Lightbox from "../components/Lightbox";

function ProjectCard({ project, lang, t, onOpenLightbox }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    onOpenLightbox(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    onOpenLightbox(false);
  };

  const prevImg = () =>
    setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const nextImg = () =>
    setLightboxIndex((i) => (i + 1) % project.images.length);

  return (
    <>
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImg}
            onNext={nextImg}
          />
        )}
      </AnimatePresence>

      <div className="project-card">
        {project.images.length > 0 && (
          <>
            <div className="project-preview" onClick={() => openLightbox(activeThumb)}>
              <img src={project.images[activeThumb]} alt={project.title} />
              <div className="preview-overlay">
                <span>Zobraziť galériu ({project.images.length} fotiek)</span>
              </div>
            </div>

            <div className="thumb-strip">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`thumb${activeThumb === i ? " active" : ""}`}
                  onClick={() => {
                    setActiveThumb(i);
                    openLightbox(i);
                  }}
                />
              ))}
            </div>
          </>
        )}

        <h2>{project.title}</h2>
        <p className="project-meta">{project.meta[lang]}</p>
        <p className="project-desc">{project.desc[lang]}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
              {t.viewApp}
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link project-link--secondary">
            {t.viewGithub}
          </a>
        </div>
      </div>
    </>
  );
}

export default function Programming() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <div className="page-section">
      <h1 className="page-title">{t.progTitle}</h1>
      <p className="page-subtitle">{t.progSubtitle}</p>

      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          lang={lang}
          t={t}
          onOpenLightbox={() => {}}
        />
      ))}
    </div>
  );
}
