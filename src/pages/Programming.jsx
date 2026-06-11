import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { PROJECTS } from "../data/projects";
import Lightbox from "../components/Lightbox";

export default function Programming() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];
  const [lightbox, setLightbox] = useState(null);

  const openGallery = (project, idx = 0) => {
    if (project.images.length === 0) return;
    setLightbox({ images: project.images, index: idx });
  };

  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((l) => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));
  const nextImg = () => setLightbox((l) => ({ ...l, index: (l.index + 1) % l.images.length }));

  return (
    <>
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            index={lightbox.index}
            onClose={closeLightbox}
            onPrev={prevImg}
            onNext={nextImg}
          />
        )}
      </AnimatePresence>

      <div className="page-section">
        <h1 className="page-title">{t.progTitle}</h1>
        <p className="page-subtitle">{t.progSubtitle}</p>

        {PROJECTS.map((project) => (
          <div key={project.id} className="project-card">
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
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {t.viewApp}
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link--secondary project-link"
              >
                {t.viewGithub}
              </a>
              {project.images.length > 0 && (
                <button
                  className="gallery-trigger"
                  onClick={() => openGallery(project)}
                >
                  📸 {project.images.length} photos
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
