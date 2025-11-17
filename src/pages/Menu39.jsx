import MenuNavigation from "../components/MenuNavigation";
import photoPlat from "../assets/images/photo-plat.jpg";
import photoPlat2 from "../assets/images/photo-plat-2.webp";
import photoPlat3 from "../assets/images/photo-plat-3.webp";
import photoPlat4 from "../assets/images/photo-plat-4.webp";

const dishImages = [
  photoPlat,
  photoPlat3,
  photoPlat2,
  photoPlat4,
  photoPlat,
  photoPlat3,
];

export default function Menu39({ openModal }) {
  return (
    <main className="bg-base-100">
      <MenuNavigation currentMenu="menu-39" />

      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat}
          alt="Menu à 39€"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
          Notre menu à 39€
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Une formule complète et accessible pour vos événements. Un menu
            équilibré avec entrée, plat et dessert, préparé avec le même soin et
            la même qualité que toutes nos prestations.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Notre menu à 39€ offre un excellent rapport qualité-prix sans
            compromis sur la fraîcheur des produits et le savoir-faire de notre
            maître restaurateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {dishImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Menu 39€ ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Formule à 39€ par personne
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>
                <strong>Entrée au choix :</strong> Terrine maison ou Salade
                composée
              </p>
              <p>
                <strong>Plat au choix :</strong> Volaille fermière rôtie ou Pavé
                de saumon
              </p>
              <p>
                <strong>Accompagnements :</strong> Légumes de saison et pommes
                de terre
              </p>
              <p>
                <strong>Dessert au choix :</strong> Tarte du jour ou Mousse au
                chocolat
              </p>
              <p className="text-sm italic mt-4">
                * Boissons non incluses (supplément sur demande)
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={openModal}
            className="gradient-primary text-white px-10 py-4 rounded font-medium text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Demandez votre devis
          </button>
        </div>
      </div>
    </main>
  );
}
