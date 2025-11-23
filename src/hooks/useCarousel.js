import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour gérer un carousel avec autoplay
 * @param {number} itemsCount - Nombre total d'items dans le carousel
 * @param {number} autoplayDelay - Délai en ms entre chaque slide (0 = pas d'autoplay)
 * @param {boolean} infinite - Active la boucle infinie
 * @returns {object} État et fonctions du carousel
 */
export function useCarousel(itemsCount, autoplayDelay = 0, infinite = true) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(autoplayDelay > 0);

  // Autoplay avec boucle infinie
  useEffect(() => {
    if (!autoplayEnabled || autoplayDelay === 0 || itemsCount === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (infinite) {
          // Boucle infinie : retour au début après la fin
          return (prev + 1) % itemsCount;
        } else {
          // Sans boucle : arrêt à la fin
          return prev < itemsCount - 1 ? prev + 1 : prev;
        }
      });
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [currentIndex, autoplayEnabled, autoplayDelay, itemsCount, infinite]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (infinite) {
        return (prev + 1) % itemsCount;
      } else {
        return prev < itemsCount - 1 ? prev + 1 : prev;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (infinite) {
        return (prev - 1 + itemsCount) % itemsCount;
      } else {
        return prev > 0 ? prev - 1 : prev;
      }
    });
  };

  const goToIndex = (index) => {
    if (index >= 0 && index < itemsCount) {
      setAutoplayEnabled(false);
      setCurrentIndex(index);
    }
  };

  const disableAutoplay = () => {
    setAutoplayEnabled(false);
  };

  const enableAutoplay = () => {
    setAutoplayEnabled(true);
  };

  return {
    currentIndex,
    handleNext,
    handlePrevious,
    goToIndex,
    disableAutoplay,
    enableAutoplay,
    autoplayEnabled,
  };
}
