import { useState, useEffect, useRef } from "react";

/**
 * Composant d'image avec lazy loading natif et fallback
 */
export default function LazyImage({
  src,
  alt,
  className = "",
  fallback = null,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (hasError && fallback) {
    return fallback;
  }

  return (
    <img
      ref={imgRef}
      src={isLoaded ? src : undefined}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
}
