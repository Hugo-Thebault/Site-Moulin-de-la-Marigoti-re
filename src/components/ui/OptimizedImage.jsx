import { useState, useEffect, useRef } from "react";

/**
 * Image optimisée avec lazy loading natif
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  );
}
