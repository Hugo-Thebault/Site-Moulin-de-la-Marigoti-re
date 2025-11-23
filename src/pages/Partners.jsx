import { useState } from "react";
import { partnerCategories, getPartnersByCategory } from "../data/partnersData";
import PartnerCard from "../components/partners/PartnerCard";
import SectionTitle from "../components/ui/SectionTitle";

export default function Partners() {
  const [openCategories, setOpenCategories] = useState({
    vaisselle: true,
    salles: true,
    wedding: true,
  });

  const toggleCategory = (categoryId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <main className="min-h-screen">
      {/* Section titre */}
      <div className="bg-base-100 py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle color="base">Nos Partenaires</SectionTitle>
          <p className="text-lg md:text-xl font-inter text-center max-w-3xl mx-auto text-base-content leading-relaxed mt-6">
            Depuis plusieurs années déjà, le Moulin de la Marigotière travaille
            avec des partenaires locaux aussi bien pour les lieux de réceptions
            que pour les produits. Nous privilégions les circuits courts et les
            producteurs qui partagent nos valeurs de qualité et d'authenticité.
          </p>
        </div>
      </div>

      {/* Sections par catégorie */}
      <div className="gradient-primary pt-16 pb-16">
        <div className="container mx-auto px-6">
          {partnerCategories.map((category) => (
            <div key={category.id} className="mb-12">
              {/* Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between py-4 border-b-2 border-white/30 hover:border-white transition-colors group"
              >
                <h2 className="text-3xl md:text-4xl font-cormorant-sc text-white">
                  {category.title}
                </h2>
                <svg
                  className={`w-8 h-8 text-white transition-transform duration-300 ${
                    openCategories[category.id] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Grid des partenaires */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 transition-all duration-500 overflow-hidden ${
                  openCategories[category.id]
                    ? "max-h-[5000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {getPartnersByCategory(category.id).map((partner) => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
