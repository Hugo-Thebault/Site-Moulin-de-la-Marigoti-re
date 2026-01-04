import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { partnersCarousel } from "../data/partnersData";

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef(null);

  const partners = partnersCarousel;

  // Dupliquer les partenaires : ajouter à la fin ET au début pour la navigation bidirectionnelle
  const extendedPartners = [
    ...partners.slice(-itemsPerView),
    ...partners,
    ...partners.slice(0, itemsPerView),
  ];

  // Commencer à l'index réel (après les copies du début)
  const [realIndex, setRealIndex] = useState(itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView =
        window.innerWidth < 768 ? 1 : window.innerWidth < 1536 ? 3 : 5;
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
        setRealIndex(newItemsPerView);
        setCurrentIndex(newItemsPerView);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  useEffect(() => {
    setCurrentIndex(itemsPerView);
    setRealIndex(itemsPerView);
  }, [itemsPerView]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Réinitialiser la position quand on atteint les copies
  useEffect(() => {
    // Si on atteint la copie de fin, revenir au début réel
    if (currentIndex === itemsPerView + partners.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerView);
      }, 500);
    }
    // Si on atteint la copie du début, aller à la fin réelle
    else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 500);
    }
  }, [currentIndex, itemsPerView]);

  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="w-full">
        <h2
          className="text-4xl md:text-5xl font-cormorant-sc text-center mb-6 text-base-content"
          style={{ fontVariant: "small-caps" }}
        >
          Nos partenaires
        </h2>
        <p className="text-lg font-inter text-center max-w-3xl mx-auto mb-12 text-base-content">
          Depuis plusieurs années déjà, le Moulin de la Marigotière travaille
          avec des partenaires locaux aussi bien pour les lieux de réceptions
          que pour les produits.
        </p>

        <div className="relative mb-8 w-full md:w-[85%] mx-auto overflow-x-hidden">
          {/* Slider container */}
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className={`${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 5
                        ? "w-1/5"
                        : "w-1/3"
                  } shrink-0 ${itemsPerView === 5 ? "px-2" : "px-4"}`}
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-lg overflow-hidden shadow-lg hover:scale-102 transition-transform duration-300 group"
                    >
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end">
                        <p className="text-white font-inter text-xl p-4 w-full text-center">
                          {partner.name}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="block relative rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end">
                        <p className="text-white font-inter text-xl p-4 w-full text-center">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9B1227] border-2 border-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
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

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9B1227] border-2 border-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
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
        </div>

        <div className="text-center">
          <Link
            to="/partenaires"
            className="gradient-primary text-white px-6 py-2.5 rounded font-inter font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Découvrez la liste de nos partenaires
          </Link>
        </div>
      </div>
    </section>
  );
}