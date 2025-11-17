import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import croixAuxLiardsImg from "../assets/images/croix-au-liard.webp";
import lorangerieImg from "../assets/images/lorangerie.webp";
import jonqueretImg from "../assets/images/jonqueret.jpg";
import petiteHayeImg from "../assets/images/petite-haye.jpg";
import chateauCarsixImg from "../assets/images/chateau-de-carsix.jpg";
import chateauChapelleImg from "../assets/images/chateau-de-la-chapelle.webp";
import milleEmotionsImg from "../assets/images/mille-et-une-emotion.jpg";
import paulaImg from "../assets/images/paula.jpg";

const partners = [
  {
    id: 1,
    name: "Loca Reception",
    image:
      "https://via.placeholder.com/400x300/9B1227/FFFFFF?text=Loca+Reception",
    url: null,
  },
  {
    id: 2,
    name: "Château de La Chapelle",
    image: chateauChapelleImg,
    url: "https://chateaudelachapelle.com/",
  },
  {
    id: 3,
    name: "Domaine La Croix aux Liards",
    image: croixAuxLiardsImg,
    url: "https://www.lacroixauxliards.com/",
  },
  {
    id: 4,
    name: "L'Orangerie",
    image: lorangerieImg,
    url: "https://www.mariages.net/chateau-mariage/lorangerie-chateau-de-beaumesnil--e107144",
  },
  {
    id: 5,
    name: "Salle des Jonquerets de Livet",
    image: jonqueretImg,
    url: "https://www.mesnil-en-ouche.fr/notre-territoire/location-des-salles-des-fetes/jonquerets-de-livet/",
  },
  {
    id: 6,
    name: "Domaine de la Petite Haye",
    image: petiteHayeImg,
    url: "https://www.petite-haye.com/",
  },
  {
    id: 7,
    name: "Château de Carsix",
    image: chateauCarsixImg,
    url: "https://chateaudecarsix.com/",
  },
  {
    id: 8,
    name: "Mille et une émotions",
    image: milleEmotionsImg,
    url: "https://www.facebook.com/milleetuneemotions",
  },
  {
    id: 9,
    name: "Paula Événements",
    image: paulaImg,
    url: "https://paula-evenements.com/",
  },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef(null);

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
      const newItemsPerView = window.innerWidth < 768 ? 1 : 3;
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
      <div className="container mx-auto">
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

        <div className="relative max-w-6xl mx-auto mb-8">
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
                    itemsPerView === 1 ? "w-full" : "w-1/3"
                  } shrink-0 px-4`}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9B1227] border-2 border-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9B1227] border-2 border-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
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
