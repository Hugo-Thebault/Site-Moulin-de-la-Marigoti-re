import { useState, useEffect } from "react";

const menuImages = [
  {
    id: 1,
    url: "https://via.placeholder.com/800x600/9B1227/FFFFFF?text=Menu+Mariage",
    alt: "Menu Mariage",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/800x600/9B1227/FFFFFF?text=Buffet+Froid",
    alt: "Buffet Froid",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/800x600/9B1227/FFFFFF?text=Cocktail",
    alt: "Cocktail",
  },
  {
    id: 4,
    url: "https://via.placeholder.com/800x600/9B1227/FFFFFF?text=Séminaire",
    alt: "Séminaire",
  },
  {
    id: 5,
    url: "https://via.placeholder.com/800x600/9B1227/FFFFFF?text=Plat+à+Emporter",
    alt: "Plat à Emporter",
  },
];

export default function MenuCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (autoplayEnabled) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % menuImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplayEnabled, currentSlide]);

  const handlePrevious = () => {
    setAutoplayEnabled(false);
    setCurrentSlide(
      (prev) => (prev - 1 + menuImages.length) % menuImages.length
    );
  };

  const handleNext = () => {
    setAutoplayEnabled(false);
    setCurrentSlide((prev) => (prev + 1) % menuImages.length);
  };

  const handleDotClick = (index) => {
    setAutoplayEnabled(false);
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-6 gradient-primary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-cormorant-sc text-white text-center mb-12">
          Nos Menus
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Image container */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="border-4 border-white rounded-lg overflow-hidden">
              <img
                src={menuImages[currentSlide].url}
                alt={menuImages[currentSlide].alt}
                className="w-full h-[400px] md:h-[600px] object-cover transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#9B1227] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Previous slide"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#9B1227] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Next slide"
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

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {menuImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-black scale-125" : "bg-[#9B1227]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
