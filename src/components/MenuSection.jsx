import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photoPlat from "../assets/images/photo-plat.jpg";
import photoPlat2 from "../assets/images/photo-plat-2.webp";
import photoPlat3 from "../assets/images/photo-plat-3.webp";
import photoPlat4 from "../assets/images/photo-plat-4.webp";

const menuData = [
  {
    id: 1,
    title: "Réception",
    subtitle: "(mariage/anniversaire)",
    description:
      "Des menus raffinés et personnalisés pour faire de votre réception un moment inoubliable. Notre maître restaurateur François Duperrey met tout son savoir-faire à votre service pour créer une expérience culinaire qui marquera les esprits de vos invités.",
    image: photoPlat,
    link: "/menus/reception",
  },
  {
    id: 2,
    title: "Brunch",
    description:
      "Un moment convivial et gourmand pour vos événements en matinée. Notre brunch allie des saveurs sucrées et salées avec des produits frais et de saison pour satisfaire tous les palais.",
    image: photoPlat2,
    link: "/menus/brunch",
  },
  {
    id: 3,
    title: "Dinatoire",
    description:
      "Des bouchées raffinées et créatives pour vos cocktails dînatoires. Impressionnez vos invités avec nos créations culinaires élégantes et savoureuses, servies tout au long de la soirée.",
    image: photoPlat3,
    link: "/menus/dinatoire",
  },
  {
    id: 4,
    title: "Buffet froid",
    description:
      "Une sélection de produits frais et de qualité pour vos événements. Nos buffets froids allient élégance et saveurs pour tous vos rassemblements. Salades composées, terrines maison, charcuteries fines et desserts gourmands.",
    image: photoPlat4,
    link: "/menus/buffet-froid",
  },
  {
    id: 5,
    title: "Notre menu à 39€",
    description:
      "Une formule complète et accessible pour vos événements. Un menu équilibré avec entrée, plat et dessert, préparé avec le même soin et la même qualité que toutes nos prestations.",
    image: photoPlat,
    link: "/menus/menu-39",
  },
];

export default function MenuSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!autoplayEnabled) return;

    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % menuData.length);
        setFadeOut(false);
      }, 150);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplayEnabled, currentSlide]);

  const handlePrevious = () => {
    setAutoplayEnabled(false);
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + menuData.length) % menuData.length);
      setFadeOut(false);
    }, 150);
  };

  const handleNext = () => {
    setAutoplayEnabled(false);
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % menuData.length);
      setFadeOut(false);
    }, 150);
  };

  const handleDotClick = (index) => {
    setAutoplayEnabled(false);
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFadeOut(false);
    }, 150);
  };

  const currentMenu = menuData[currentSlide];

  return (
    <section className="py-12 bg-base-100">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        {/* PARTIE GAUCHE - Fond gradient avec photo */}
        <div className="gradient-primary py-8 px-8 lg:px-16 flex flex-col min-h-[500px] lg:rounded-r-3xl">
          <h2
            className="text-4xl md:text-5xl font-cormorant-sc text-white text-left mb-6 title-underline"
            style={{ fontVariant: "small-caps" }}
          >
            Nos Menus
          </h2>

          {/* Photo du menu avec transition simple */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl h-[350px]">
            <img
              src={currentMenu.image}
              alt={currentMenu.title}
              className={`w-full h-full object-cover transition-opacity duration-150 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
              loading="lazy"
            />
          </div>
        </div>

        {/* PARTIE DROITE - Contenu texte */}
        <div className="bg-base-100 py-8 px-8 lg:px-16 flex flex-col min-h-[500px]">
          {/* Titre avec sous-titre optionnel */}
          <div
            className={`mb-16 transition-opacity duration-150 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <h3 className="text-4xl md:text-5xl font-cormorant-sc text-base-content">
              {currentMenu.title}
            </h3>
            {currentMenu.subtitle && (
              <p className="text-2xl md:text-3xl font-cormorant-sc text-base-content/70 mt-2">
                {currentMenu.subtitle}
              </p>
            )}
          </div>

          {/* Texte descriptif */}
          <p
            className={`text-base md:text-lg font-inter text-base-content leading-relaxed mb-auto transition-opacity duration-150 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentMenu.description}
          </p>

          {/* Bouton */}
          <div className="text-right mb-6">
            <Link
              to={currentMenu.link}
              className="inline-block gradient-primary text-white px-8 py-3 rounded font-inter font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Découvrir les menus
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            {/* Flèche gauche */}
            <button
              onClick={handlePrevious}
              className="p-2 hover:bg-base-200 rounded-full transition-colors"
              aria-label="Menu précédent"
            >
              <svg
                className="w-8 h-8 text-base-content"
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

            {/* Points de pagination */}
            <div className="flex gap-6">
              {menuData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "gradient-primary scale-150"
                      : "bg-base-300 hover:bg-base-400"
                  }`}
                  aria-label={`Aller au menu ${index + 1}`}
                />
              ))}
            </div>

            {/* Flèche droite */}
            <button
              onClick={handleNext}
              className="p-2 hover:bg-base-200 rounded-full transition-colors"
              aria-label="Menu suivant"
            >
              <svg
                className="w-8 h-8 text-base-content"
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
        </div>
      </div>
    </section>
  );
}
