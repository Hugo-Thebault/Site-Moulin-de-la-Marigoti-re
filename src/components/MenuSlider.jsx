import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const menuCategories = [
  {
    id: 1,
    title: "Mariage",
    description:
      "Des menus raffinés et personnalisés pour faire de votre mariage un moment inoubliable. Nous créons des expériences culinaires qui marquent les esprits.",
    image: "https://via.placeholder.com/600x400/FFFFFF/9B1227?text=Mariage",
    link: "/menus/mariage",
  },
  {
    id: 2,
    title: "Buffet froid",
    description:
      "Une sélection de produits frais et de qualité pour vos événements. Nos buffets froids allient élégance et saveurs pour tous vos rassemblements.",
    image:
      "https://via.placeholder.com/600x400/FFFFFF/9B1227?text=Buffet+Froid",
    link: "/menus/buffet-froid",
  },
  {
    id: 3,
    title: "Cocktail",
    description:
      "Des bouchées raffinées et créatives pour vos cocktails. Impressionnez vos invités avec nos créations culinaires élégantes et savoureuses.",
    image: "https://via.placeholder.com/600x400/FFFFFF/9B1227?text=Cocktail",
    link: "/menus/cocktail",
  },
  {
    id: 4,
    title: "Séminaire",
    description:
      "Des formules adaptées à vos événements professionnels. Nous accompagnons vos réunions avec des prestations de qualité qui favorisent la convivialité.",
    image: "https://via.placeholder.com/600x400/FFFFFF/9B1227?text=Séminaire",
    link: "/menus/seminaire",
  },
  {
    id: 5,
    title: "Plat à emporter",
    description:
      "Profitez de notre savoir-faire chez vous. Des plats préparés avec soin que vous pouvez déguster en toute occasion dans le confort de votre maison.",
    image:
      "https://via.placeholder.com/600x400/FFFFFF/9B1227?text=Plat+à+Emporter",
    link: "/menus/plat-emporter",
  },
];

export default function MenuSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (autoplayEnabled) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % menuCategories.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplayEnabled, currentSlide]);

  const handlePrevious = () => {
    setAutoplayEnabled(false);
    setCurrentSlide(
      (prev) => (prev - 1 + menuCategories.length) % menuCategories.length
    );
  };

  const handleNext = () => {
    setAutoplayEnabled(false);
    setCurrentSlide((prev) => (prev + 1) % menuCategories.length);
  };

  const handleDotClick = (index) => {
    setAutoplayEnabled(false);
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          {/* Slide content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-500">
            <img
              src={menuCategories[currentSlide].image}
              alt={menuCategories[currentSlide].title}
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-cormorant-sc text-[#9B1227] mb-4">
                {menuCategories[currentSlide].title}
              </h3>
              <p className="text-lg font-cormorant-infant text-base-content mb-6 leading-relaxed">
                {menuCategories[currentSlide].description}
              </p>
              <Link
                to={menuCategories[currentSlide].link}
                className="inline-block bg-white border-2 border-[#9B1227] text-[#9B1227] px-6 py-3 rounded font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Découvrir les menus
              </Link>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
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
            {menuCategories.map((_, index) => (
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
