import { useState } from "react";
import localisationImage from "@/assets/images/Localisation.webp";
import ImageGalleryModal from "./ImageGalleryModal";

export default function Location() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const address = "203 Rue des Métiers, 27230 Thiberville";
  const latitude = "49.14361735574991";
  const longitude = "0.4512997314945483";

  const galleryImages = [
    {
      src: localisationImage,
      alt: "Plan d'accès - Moulin de la Marigotière",
    },
  ];

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);
  const navigateGallery = () => {
    // Galerie 1 image : pas de navigation
  };

  // URL pour desktop (Google Maps web)
  const desktopMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  // URL pour mobile (ouvre le sélecteur d'apps)
  const mobileMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <section className="py-16 px-6 gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-cormorant-sc text-center mb-12 text-white"
          style={{ fontVariant: "small-caps" }}
        >
          Où nous trouver ?
        </h2>

        {/* Desktop: 2 colonnes (infos à gauche / image à droite) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
          {/* Carte d'informations stylisée */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:col-span-2">
            <div className="p-8 md:p-12 text-center">
              {/* Icône de localisation */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#9B1227] to-[#570a16] rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-cormorant-sc text-base-content mb-4">
                Notre adresse
              </h3>

              <p className="text-lg md:text-xl font-inter text-base-content mb-8 leading-relaxed">
                {address}
              </p>

              {/* Bouton intelligent - Desktop uniquement */}
              <a
                href={desktopMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-full font-inter font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Ouvrir dans Google Maps
              </a>

              {/* Bouton intelligent - Mobile/Tablette */}
              <a
                href={mobileMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-full font-inter font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Obtenir l'itinéraire
              </a>
            </div>
          </div>

          {/* Image localisation */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl md:col-span-3 cursor-pointer hover:scale-102 transition-transform duration-300"
            onClick={openGallery}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openGallery();
            }}
            aria-label="Agrandir l'image de localisation"
          >
            <img
              src={localisationImage}
              alt="Plan d'accès - Moulin de la Marigotière"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {isGalleryOpen && (
          <ImageGalleryModal
            images={galleryImages}
            currentIndex={0}
            onClose={closeGallery}
            onNavigate={navigateGallery}
          />
        )}
      </div>
    </section>
  );
}
