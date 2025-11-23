import { memo } from "react";
import { Link } from "react-router-dom";
import { partnersCarousel } from "../../data/partnersData";
import { useCarousel } from "../../hooks/useCarousel";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

/**
 * Version optimisée du composant Partners avec memo et intersection observer
 */
const PartnerCard = memo(({ partner }) => {
  const CardWrapper = partner.url ? "a" : "div";
  const cardProps = partner.url
    ? {
        href: partner.url,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="block relative rounded-lg overflow-hidden shadow-lg hover:scale-102 transition-transform duration-300 group"
    >
      <img
        src={partner.image}
        alt={partner.name}
        className="w-full h-64 object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end">
        <p className="text-white font-inter text-xl p-4 w-full text-center">
          {partner.name}
        </p>
      </div>
    </CardWrapper>
  );
});

PartnerCard.displayName = "PartnerCard";

function PartnersComponent() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const partners = partnersCarousel;
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const { currentIndex, handleNext, handlePrevious } = useCarousel(
    partners.length,
    isIntersecting ? 3000 : 0,
    true
  );

  // Dupliquer pour infinite loop
  const extendedPartners = [
    ...partners.slice(-itemsPerView),
    ...partners,
    ...partners.slice(0, itemsPerView),
  ];

  return (
    <section ref={ref} className="py-16 px-6 bg-base-100">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-cormorant-sc text-center mb-6 text-base-content"
          style={{ fontVariant: "small-caps" }}
        >
          Nos partenaires
        </h2>
        <p className="text-lg font-inter text-center max-w-3xl mx-auto mb-12 text-base-content">
          Depuis plusieurs années déjà, le Moulin de la Marigotière travaille
          avec des partenaires locaux aussi bien pour les lieux de réceptions
          que pour les produits.
        </p>

        <div className="relative max-w-6xl mx-auto mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex + itemsPerView) * (100 / itemsPerView)
                }%)`,
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className={`${
                    itemsPerView === 1 ? "w-full" : "w-1/3"
                  } shrink-0 px-4`}
                >
                  <PartnerCard partner={partner} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9B1227] border-2 border-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Previous"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#9B1227] border-2 border-[#9B1227] hover:scale-110 transition-transform duration-300 shadow-lg"
            aria-label="Next"
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
        </div>

        <div className="text-center">
          <Link
            to="/partenaires"
            className="gradient-primary text-white px-6 py-2.5 rounded font-inter font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Découvrez la liste de nos partenaires
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(PartnersComponent);
