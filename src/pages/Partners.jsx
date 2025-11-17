import { useState } from "react";
import croixAuxLiardsImg from "../assets/images/croix-au-liard.webp";
import lorangerieImg from "../assets/images/lorangerie.webp";
import jonqueretImg from "../assets/images/jonqueret.jpg";
import petiteHayeImg from "../assets/images/petite-haye.jpg";
import chateauCarsixImg from "../assets/images/chateau-de-carsix.jpg";
import chateauChapelleImg from "../assets/images/chateau-de-la-chapelle.webp";
import milleEmotionsImg from "../assets/images/mille-et-une-emotion.jpg";
import paulaImg from "../assets/images/paula.jpg";

const partnersData = [
  // Location de vaisselle
  {
    id: 1,
    name: "Loca Reception",
    description:
      "Location de vaisselle et nappage pour tous vos événements. Situé à Berville-la-Campagne.",
    phone: "02 32 30 05 88",
    location: "Berville-la-Campagne",
    image:
      "https://via.placeholder.com/400x300/9B1227/FFFFFF?text=Loca+Reception",
    url: null,
    category: "vaisselle",
  },
  // Salles de réception
  {
    id: 2,
    name: "Château de La Chapelle",
    description:
      "Château situé à La Neuve-Lyre offrant un cadre exceptionnel et élégant pour vos réceptions.",
    location: "La Neuve-Lyre",
    image: chateauChapelleImg,
    url: "https://chateaudelachapelle.com/",
    category: "salles",
  },
  {
    id: 3,
    name: "Domaine La Croix aux Liards",
    description:
      "Domaine de charme situé à Notre-Dame-d'Estrées pour des événements mémorables.",
    location: "Notre-Dame-d'Estrées",
    image: croixAuxLiardsImg,
    url: "https://www.lacroixauxliards.com/",
    category: "salles",
  },
  {
    id: 4,
    name: "L'Orangerie",
    description:
      "Magnifique orangerie située au Château de Beaumesnil, cadre idéal pour vos célébrations.",
    location: "Beaumesnil",
    image: lorangerieImg,
    url: "https://www.mariages.net/chateau-mariage/lorangerie-chateau-de-beaumesnil--e107144",
    category: "salles",
  },
  {
    id: 5,
    name: "Salle des Jonquerets de Livet",
    description:
      "Salle de réception municipale située à Livet, parfaite pour accueillir vos invités dans un cadre convivial.",
    location: "Livet (Mesnil-en-Ouche)",
    image: jonqueretImg,
    url: "https://www.mesnil-en-ouche.fr/notre-territoire/location-des-salles-des-fetes/jonquerets-de-livet/",
    category: "salles",
  },
  {
    id: 6,
    name: "Domaine de la Petite Haye",
    description:
      "Domaine champêtre offrant un cadre authentique et verdoyant pour vos événements.",
    image: petiteHayeImg,
    url: "https://www.petite-haye.com/",
    category: "salles",
  },
  {
    id: 7,
    name: "Château de Carsix",
    description:
      "Château historique situé à Carsix, lieu prestigieux pour vos réceptions dans un cadre d'exception.",
    location: "Carsix",
    image: chateauCarsixImg,
    url: "https://chateaudecarsix.com/",
    category: "salles",
  },
  // Wedding planners
  {
    id: 8,
    name: "Mille et une émotions",
    description:
      "Wedding planner professionnel pour organiser votre mariage de rêve avec attention aux moindres détails.",
    image: milleEmotionsImg,
    url: "https://www.facebook.com/milleetuneemotions",
    category: "wedding",
  },
  {
    id: 9,
    name: "Paula Événements",
    description:
      "Organisation d'événements sur mesure avec créativité et professionnalisme pour faire de votre jour un moment unique.",
    image: paulaImg,
    url: "https://paula-evenements.com/",
    category: "wedding",
  },
];

const categories = [
  { id: "salles", title: "Salles de réception" },
  { id: "wedding", title: "Wedding planner" },
  { id: "vaisselle", title: "Location de vaisselle" },
];

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

  const getPartnersByCategory = (categoryId) => {
    return partnersData.filter((partner) => partner.category === categoryId);
  };

  return (
    <main className="min-h-screen">
      {/* Section titre et description avec fond blanc */}
      <div className="bg-base-100 py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center text-base-content mb-6">
            Nos Partenaires
          </h1>
          <p className="text-lg md:text-xl font-inter text-center max-w-3xl mx-auto text-base-content leading-relaxed">
            Depuis plusieurs années déjà, le Moulin de la Marigotière travaille
            avec des partenaires locaux aussi bien pour les lieux de réceptions
            que pour les produits. Nous privilégions les circuits courts et les
            producteurs qui partagent nos valeurs de qualité et d'authenticité.
          </p>
        </div>
      </div>

      {/* Sections par catégorie avec fond gradient rouge */}
      <div className="gradient-primary pt-16 pb-16">
        <div className="container mx-auto px-6">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              {/* Header de catégorie avec flèche alignée à droite */}
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

              {/* Grid des partenaires avec animation */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 transition-all duration-500 overflow-hidden ${
                  openCategories[category.id]
                    ? "max-h-[5000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {getPartnersByCategory(category.id).map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-lg shadow-xl overflow-hidden hover:scale-102 hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-cormorant-sc text-2xl p-6 w-full">
                          {partner.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-inter text-base text-gray-700 mb-4">
                        {partner.description}
                      </p>
                      {partner.location && (
                        <p className="font-inter text-sm text-gray-600 mb-2">
                          📍 {partner.location}
                        </p>
                      )}
                      {partner.phone && (
                        <p className="font-inter text-sm text-gray-600 mb-4">
                          📞 {partner.phone}
                        </p>
                      )}
                      {partner.url ? (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[#9B1227] font-medium group-hover:underline"
                        >
                          Visiter le site →
                        </a>
                      ) : (
                        <p className="text-gray-500 italic text-sm">
                          Contactez-nous pour plus d'informations
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
