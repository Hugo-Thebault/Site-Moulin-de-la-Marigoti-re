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

export default function MenuPlatEmporter({ openModal }) {
  return (
    <main className="bg-base-100">
      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat}
          alt="Plat à Emporter"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
          Plat à Emporter
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Profitez de notre savoir-faire gastronomique chez vous ! Nos plats à
            emporter sont préparés avec le même soin et la même qualité que nos
            prestations traiteur, pour que vous puissiez déguster notre cuisine
            en toute occasion.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Commandez à l'avance pour vos repas en famille, vos dîners entre
            amis ou simplement pour vous faire plaisir. Notre carte évolue au
            fil des saisons.
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
                alt={`Plat à emporter ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Nos Spécialités à Emporter
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>• Terrines et pâtés maison</p>
              <p>• Plats mijotés (bœuf bourguignon, blanquette, coq au vin)</p>
              <p>• Quiches et tartes salées</p>
              <p>• Salades composées</p>
              <p>• Desserts maison (tartes, gâteaux, verrines)</p>
              <p>• Plateaux de fromages sélectionnés</p>
              <p>• Formules complètes pour 2, 4 ou 6 personnes</p>
            </div>
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <p className="font-inter text-base text-base-content">
                <strong>Commande :</strong> Passez commande 48h à l'avance par
                téléphone ou via notre formulaire de contact. Retrait sur place
                aux horaires convenus.
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
