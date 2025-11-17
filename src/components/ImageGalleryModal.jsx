import { useEffect } from "react";

export default function ImageGalleryModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) {
  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNavigate]);

  // Empêcher le scroll du body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const currentImage = images[currentIndex];
  const totalImages = images.length;

  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Fermer"
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Indicateur de position */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-inter">
        {currentIndex + 1} / {totalImages}
      </div>

      {/* Flèche gauche */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("prev");
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Image précédente"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Image principale */}
      <div
        className="max-w-[80vw] max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl"
        />
      </div>

      {/* Flèche droite */}
      {currentIndex < totalImages - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("next");
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Image suivante"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Zone cliquable gauche */}
      {currentIndex > 0 && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 cursor-w-resize"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("prev");
          }}
        />
      )}

      {/* Zone cliquable droite */}
      {currentIndex < totalImages - 1 && (
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 cursor-e-resize"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate("next");
          }}
        />
      )}
    </div>
  );
}
