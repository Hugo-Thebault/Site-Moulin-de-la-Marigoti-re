import { useState, useEffect, useRef } from "react";

/**
 * Hook personnalisé pour détecter quand un élément entre dans le viewport
 * @param {object} options - Options de l'IntersectionObserver
 * @returns {object} ref et état isIntersecting
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
        ...options,
      }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return { ref: targetRef, isIntersecting };
}
