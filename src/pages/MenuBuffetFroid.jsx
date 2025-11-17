import MenuNavigation from "../components/MenuNavigation";
import photoPlat from "../assets/images/photo-plat.jpg";
import photoPlat2 from "../assets/images/photo-plat-2.webp";
import photoPlat3 from "../assets/images/photo-plat-3.webp";
import photoPlat4 from "../assets/images/photo-plat-4.webp";

const dishImages = [
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
  photoPlat3,
];

export default function MenuBuffetFroid({ openModal }) {
  return (
    <main className="bg-base-100">
      <MenuNavigation currentMenu="buffet-froid" />

      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat}
          alt="Buffet Froid"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
          Buffet Froid
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Nos buffets froids sont parfaits pour vos événements estivaux,
            cocktails ou réceptions en extérieur. Une sélection de produits
            frais et de qualité présentés avec élégance.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Salades composées, terrines maison, charcuteries fines, fromages
            sélectionnés et desserts gourmands composent nos buffets adaptés à
            toutes vos occasions.
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
                alt={`Buffet ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Exemple de Buffet Froid
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>
                • Assortiment de salades composées (salade niçoise, taboulé,
                salade de pâtes)
              </p>
              <p>• Terrines et pâtés maison</p>
              <p>• Sélection de charcuteries fines</p>
              <p>• Plateau de fromages normands</p>
              <p>• Crudités et leurs sauces</p>
              <p>• Desserts variés (tartelettes, verrines sucrées)</p>
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
