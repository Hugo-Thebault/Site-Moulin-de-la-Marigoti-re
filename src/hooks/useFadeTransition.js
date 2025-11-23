import { useState } from "react";

/**
 * Hook personnalisé pour gérer les transitions de fade
 * @param {number} duration - Durée de la transition en ms
 * @returns {object} État fadeOut et fonction triggerFade
 */
export function useFadeTransition(duration = 150) {
  const [fadeOut, setFadeOut] = useState(false);

  const triggerFade = (callback) => {
    setFadeOut(true);
    setTimeout(() => {
      if (callback) callback();
      setFadeOut(false);
    }, duration);
  };

  return {
    fadeOut,
    triggerFade,
  };
}
