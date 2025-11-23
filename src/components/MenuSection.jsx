import { Link } from "react-router-dom";
import { menusData } from "../data/menusData";
import { useCarousel } from "../hooks/useCarousel";
import { useFadeTransition } from "../hooks/useFadeTransition";

export default function MenuSection() {
  const {
    currentIndex,
    handleNext,
    handlePrevious,
    goToIndex,
    disableAutoplay,
  } = useCarousel(menusData.length, 5000);

  const { fadeOut, triggerFade } = useFadeTransition(150);

  const handlePreviousWithFade = () => {
    disableAutoplay();
    triggerFade(handlePrevious);
  };

  const handleNextWithFade = () => {
    disableAutoplay();
    triggerFade(handleNext);
  };

  const handleDotClickWithFade = (index) => {
    disableAutoplay();
    triggerFade(() => goToIndex(index));
  };

  const currentMenu = menusData[currentIndex];

  return (
    <section className="py-8 md:py-12 bg-base-100">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* PARTIE GAUCHE - Bloc rouge avec titre et photo, collé à gauche */}
        <div className="gradient-primary py-6 md:py-8 px-6 md:px-8 lg:rounded-r-3xl w-full lg:w-auto flex flex-col items-center lg:items-start">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-cormorant-sc text-white text-center lg:text-left mb-4 md:mb-6 title-underline"
            style={{ fontVariant: "small-caps" }}
          >
            Nos Menus
          </h2>

          {/* Photo du menu avec transition simple */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-video w-full max-w-xl">
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
        <div className="bg-base-100 py-6 md:py-8 px-6 md:px-36 lg:px-0 flex flex-col flex-1">
          {/* Titre avec sous-titre optionnel */}
          <div
            className={`mb-8 md:mb-16 transition-opacity duration-150 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-cormorant-sc text-base-content">
              {currentMenu.title}
            </h3>
            {currentMenu.subtitle && (
              <p className="text-xl md:text-2xl lg:text-3xl font-cormorant-sc text-base-content/70 mt-2">
                {currentMenu.subtitle}
              </p>
            )}
          </div>

          {/* Texte descriptif */}
          <p
            className={`text-sm md:text-base lg:text-lg font-inter text-base-content leading-relaxed mb-auto transition-opacity duration-150 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentMenu.description}
          </p>

          {/* Bouton */}
          <div className="text-right mt-6">
            <Link
              to={currentMenu.link}
              className="inline-block gradient-primary text-white px-8 py-3 rounded font-inter font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Découvrir les menus
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {/* Flèche gauche */}
            <button
              onClick={handlePreviousWithFade}
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
              {menusData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClickWithFade(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "gradient-primary scale-150"
                      : "bg-base-300 hover:bg-base-400"
                  }`}
                  aria-label={`Aller au menu ${index + 1}`}
                />
              ))}
            </div>

            {/* Flèche droite */}
            <button
              onClick={handleNextWithFade}
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
