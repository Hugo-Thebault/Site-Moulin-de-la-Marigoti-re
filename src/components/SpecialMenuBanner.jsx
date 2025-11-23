import { useState, useEffect, useRef } from "react";
import { specialMenuConfig } from "../config/specialMenuConfig";
import ImageGalleryModal from "./ImageGalleryModal";

export default function SpecialMenuBanner() {
  const { layout, images } = specialMenuConfig;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  // Autoplay carousel mobile (3 secondes)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Gestion du swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      setCurrentSlide(
        (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

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

  // Version mobile : carousel avec 1 image
  const MobileCarousel = () => (
    <div className="md:hidden">
      <div
        ref={sliderRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="w-full shrink-0 px-4"
              onClick={() => openGallery(index)}
            >
              <div className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Points de pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  if (layout === 1) {
    // Disposition 1 : 3 portraits + 2 paysages
    return (
      <>
        <section className="py-8 gradient-primary mt-8">
          <div className="container mx-auto px-6">
            {/* Titre et description */}
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-cormorant-sc text-white mb-4"
                style={{ fontVariant: "small-caps" }}
              >
                Menu spécial pour les fêtes
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-inter text-white max-w-3xl mx-auto">
                Pour les fêtes le chef vous propose trois menus différents et
                une carte à venir chercher le jour des fêtes.
              </p>
            </div>

            {/* Mobile : Carousel */}
            <MobileCarousel />

            {/* Desktop : Grid */}
            <div className="hidden md:block">
              {/* Ligne 1 : 3 portraits */}
              <div className="grid grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openGallery(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Ligne 2 : 2 paysages centrés */}
              <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                {galleryImages.slice(3, 5).map((image, index) => (
                  <div
                    key={index + 3}
                    className="aspect-[1.414/1] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openGallery(index + 3)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
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
              className="text-3xl md:text-4xl lg:text-5xl font-cormorant-sc text-white mb-4"
              style={{ fontVariant: "small-caps" }}
            >
              Menu spécial pour les fêtes
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-inter text-white max-w-3xl mx-auto">
              Pour les fêtes, le chef vous propose trois menus différents et une
              carte à venir chercher le jour même.
            </p>
          </div>

          {/* Mobile : Carousel */}
          <MobileCarousel />

          {/* Desktop : Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openGallery(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
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
