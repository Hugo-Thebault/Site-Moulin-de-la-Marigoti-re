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

export default function MenuBrunch({ openModal }) {
  return (
    <main className="bg-base-100">
      <MenuNavigation currentMenu="brunch" />

      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat2}
          alt="Brunch"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
          Brunch
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Un moment convivial et gourmand pour vos événements en matinée.
            Notre brunch allie des saveurs sucrées et salées avec des produits
            frais et de saison pour satisfaire tous les palais.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Idéal pour les réceptions de mariage, les événements familiaux ou
            professionnels, notre brunch offre une alternative raffinée et
            décontractée.
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
                alt={`Brunch ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Formule Brunch
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>
                <strong>Boissons chaudes :</strong> Café, thé, chocolat chaud
              </p>
              <p>
                <strong>Jus de fruits :</strong> Orange pressée, pamplemousse,
                pomme
              </p>
              <p>
                <strong>Viennoiseries :</strong> Croissants, pains au chocolat,
                pains aux raisins
              </p>
              <p>
                <strong>Charcuterie :</strong> Jambon, saucisson, terrines
                maison
              </p>
              <p>
                <strong>Fromages :</strong> Sélection de fromages normands
              </p>
              <p>
                <strong>Plats chauds :</strong> Œufs brouillés, bacon, saucisses
              </p>
              <p>
                <strong>Sucré :</strong> Pancakes, gaufres, fruits frais,
                confitures maison
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
