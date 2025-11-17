import { useState } from "react";
import { specialMenuConfig } from "../config/specialMenuConfig";
import ImageGalleryModal from "./ImageGalleryModal";

export default function SpecialMenuBanner() {
  const { layout, images } = specialMenuConfig;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper pour construire le chemin complet de l'image
  const getImagePath = (imageName) => {
    try {
      return new URL(
        `../assets/images/special-menus/${imageName}`,
        import.meta.url
      ).href;
    } catch (error) {
      console.warn(`Image non trouvée : ${imageName}`);
      return `https://via.placeholder.com/400x566/9B1227/FFFFFF?text=Image+manquante`;
    }
  };

  // Construire le tableau d'images pour la galerie
  const galleryImages =
    layout === 1
      ? [
          { src: getImagePath(images.portrait1), alt: "Menu spécial 1" },
          { src: getImagePath(images.portrait2), alt: "Menu spécial 2" },
          { src: getImagePath(images.portrait3), alt: "Menu spécial 3" },
          { src: getImagePath(images.landscape1), alt: "Menu spécial 4" },
          { src: getImagePath(images.landscape2), alt: "Menu spécial 5" },
        ]
      : [
          { src: getImagePath(images.portrait1), alt: "Menu spécial 1" },
          { src: getImagePath(images.portrait2), alt: "Menu spécial 2" },
          { src: getImagePath(images.portrait3), alt: "Menu spécial 3" },
        ];

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const navigateGallery = (direction) => {
    if (direction === "prev" && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (
      direction === "next" &&
      currentImageIndex < galleryImages.length - 1
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  if (layout === 1) {
    // Disposition 1 : 3 portraits + 2 paysages
    return (
      <>
        <section className="py-8 gradient-primary mt-8">
          <div className="container mx-auto px-6">
            {/* Titre et description */}
            <div className="text-center mb-8">
              <h2
                className="text-4xl md:text-5xl font-cormorant-sc text-white mb-4"
                style={{ fontVariant: "small-caps" }}
              >
                Menu spécial pour les fêtes
              </h2>
              <p className="text-lg md:text-xl font-inter text-white max-w-3xl mx-auto">
                Pour les fêtes le chef vous propose trois menus différents et
                une carte à venir chercher le jour des fêtes.
              </p>
            </div>

            {/* Ligne 1 : 3 portraits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
              <div
                className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openGallery(0)}
              >
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openGallery(1)}
              >
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openGallery(2)}
              >
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Ligne 2 : 2 paysages centrés */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div
                className="aspect-[1.414/1] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openGallery(3)}
              >
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="aspect-[1.414/1] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openGallery(4)}
              >
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {isGalleryOpen && (
          <ImageGalleryModal
            images={galleryImages}
            currentIndex={currentImageIndex}
            onClose={closeGallery}
            onNavigate={navigateGallery}
          />
        )}
      </>
    );
  }

  // Disposition 2 : 3 portraits seulement
  return (
    <>
      <section className="py-8 gradient-primary mt-8">
        <div className="container mx-auto px-6">
          {/* Titre et description */}
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-cormorant-sc text-white mb-4"
              style={{ fontVariant: "small-caps" }}
            >
              Menu spécial pour les fêtes
            </h2>
            <p className="text-lg md:text-xl font-inter text-white max-w-3xl mx-auto">
              Pour les fêtes, le chef vous propose trois menus différents et une
              carte à venir chercher le jour même.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openGallery(0)}
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openGallery(1)}
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openGallery(2)}
            >
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {isGalleryOpen && (
        <ImageGalleryModal
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeGallery}
          onNavigate={navigateGallery}
        />
      )}
    </>
  );
}
