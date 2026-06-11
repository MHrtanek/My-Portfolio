import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <button className="lb-close" onClick={onClose}>✕</button>
        <button className="lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>

        <motion.img
          key={index}
          className="lb-img"
          src={images[index]}
          alt=""
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        />

        <button className="lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
        <div className="lb-counter">{index + 1} / {images.length}</div>
      </motion.div>
    </AnimatePresence>
  );
}
