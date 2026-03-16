import { useState, useEffect, useCallback } from "react";
import {
  galleryImages,
  galleryCategories,
  heroGalleryImages,
} from "../data/galleryData";
import SEO from "../components/SEO";

/**
 * Carrousel hero plein écran avec navigation et autoplay
 */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const images = heroGalleryImages;

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] overflow-hidden bg-black">
      {/* Images */}
      {images.map((img, i) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      ))}

      {/* Overlay titre */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-cormorant-sc text-white mb-3 drop-shadow-lg"
          style={{ fontVariant: "small-caps" }}
        >
          Notre Galerie
        </h1>
        <p className="text-lg md:text-xl font-inter text-white/90 max-w-2xl drop-shadow">
          Découvrez nos créations culinaires, nos buffets et nos dressages pour
          vos événements.
        </p>
      </div>

      {/* Flèches navigation */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
        aria-label="Photo précédente"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
        aria-label="Photo suivante"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Aller à la photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Lightbox modale au clic sur une image
 */
function Lightbox({ image, images, onClose, onNavigate }) {
  const currentIdx = images.findIndex((img) => img.id === image.id);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIdx - 1 + images.length) % images.length;
    onNavigate(images[prevIdx]);
  }, [currentIdx, images, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIdx + 1) % images.length;
    onNavigate(images[nextIdx]);
  }, [currentIdx, images, onNavigate]);

  // Échap et flèches clavier
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
        aria-label="Fermer"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
        aria-label="Photo précédente"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
        aria-label="Photo suivante"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Compteur */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-inter text-sm">
        {currentIdx + 1} / {images.length}
      </div>
    </div>
  );
}

/**
 * Page Galerie complète
 */
export default function Gallery({ openModal }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <SEO
        title="Galerie - Nos Créations Culinaires"
        description="Découvrez en images les créations culinaires de l'Odasiette : entrées raffinées, plats gastronomiques, buffets élégants et pièces dînatoires pour vos événements."
        keywords="galerie traiteur, photos plats, buffet mariage, cuisine gastronomique, Odasiette, traiteur Normandie"
      />

      <main className="min-h-screen bg-base-100">
        {/* Carrousel hero */}
        <HeroCarousel />

        {/* Filtres par catégorie */}
        <section className="py-10 md:py-14 px-4 md:px-6">
          <div className="container mx-auto">
            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-inter font-medium text-sm md:text-base transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "gradient-primary text-white shadow-lg scale-105"
                      : "bg-base-200 text-base-content hover:bg-base-300 hover:scale-102"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Compteur */}
            <p className="text-center font-inter text-base-content/60 text-sm mb-8">
              {filteredImages.length} photo
              {filteredImages.length > 1 ? "s" : ""}
            </p>

            {/* Grille masonry */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="break-inside-avoid mb-4 md:mb-5 group cursor-pointer"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                        image.orientation === "portrait"
                          ? "aspect-3/4"
                          : "aspect-4/3"
                      }`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={image.orientation === "portrait" ? 1067 : 600}
                    />
                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white font-inter text-sm drop-shadow">
                          {image.alt}
                        </p>
                        <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-inter capitalize">
                          {
                            galleryCategories.find(
                              (c) => c.id === image.category
                            )?.label
                          }
                        </span>
                      </div>
                    </div>
                    {/* Icône loupe */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message si aucun résultat */}
            {filteredImages.length === 0 && (
              <p className="text-center font-inter text-base-content/50 text-lg py-16">
                Aucune photo dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* CTA bas de page */}
        <section className="gradient-primary py-14 md:py-20 px-6">
          <div className="container mx-auto text-center">
            <h2
              className="text-3xl md:text-5xl font-cormorant-sc text-white mb-5"
              style={{ fontVariant: "small-caps" }}
            >
              Envie d'en savoir plus ?
            </h2>
            <p className="text-lg md:text-xl font-inter text-white/90 max-w-2xl mx-auto mb-8">
              Contactez-nous pour recevoir un devis personnalisé et découvrir
              comment nous pouvons sublimer votre événement.
            </p>
            <button
              onClick={openModal}
              className="inline-block bg-white text-[#9B1227] px-8 py-3 rounded font-inter font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Nous contacter
            </button>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          images={filteredImages}
          onClose={() => setLightboxImage(null)}
          onNavigate={setLightboxImage}
        />
      )}
    </>
  );
}
