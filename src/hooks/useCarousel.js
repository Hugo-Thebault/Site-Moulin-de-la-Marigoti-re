import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour gérer un carousel avec autoplay
 * @param {number} itemsCount - Nombre total d'items dans le carousel
 * @param {number} autoplayDelay - Délai en ms entre chaque slide (0 = pas d'autoplay)
 * @param {boolean} infinite - Active la boucle infinie
 * @returns {object} État et fonctions du carousel
 */
export function useCarousel(itemsCount, autoplayDelay = 0, infinite = false) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(autoplayDelay > 0);

  // Autoplay
  useEffect(() => {
    if (!autoplayEnabled || autoplayDelay === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayEnabled, autoplayDelay]);

  const handleNext = () => {
    if (infinite || currentIndex < itemsCount - 1) {
      setCurrentIndex((prev) => (prev + 1) % itemsCount);
    }
  };

  const handlePrevious = () => {
    if (infinite || currentIndex > 0) {
      setCurrentIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
    }
  };

  const goToIndex = (index) => {
    setAutoplayEnabled(false);
    setCurrentIndex(index);
  };

  const disableAutoplay = () => {
    setAutoplayEnabled(false);
  };

  return {
    currentIndex,
    handleNext,
    handlePrevious,
    goToIndex,
    disableAutoplay,
    autoplayEnabled,
  };
}
