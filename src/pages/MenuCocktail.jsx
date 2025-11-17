import photoPlat from "../assets/images/photo-plat.jpg";
import photoPlat2 from "../assets/images/photo-plat-2.webp";
import photoPlat3 from "../assets/images/photo-plat-3.webp";
import photoPlat4 from "../assets/images/photo-plat-4.webp";

const dishImages = [
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
];

export default function MenuCocktail({ openModal }) {
  return (
    <main className="bg-base-100">
      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat}
          alt="Cocktail"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
          Cocktail
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Nos cocktails dinatoires et apéritifs sont l'occasion de surprendre
            vos invités avec des bouchées raffinées et créatives. Chaque pièce
            est travaillée avec soin pour allier esthétique et saveurs.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Des verrines délicates aux mini-brochettes gourmandes, en passant
            par les toasts sophistiqués, nous créons des moments de dégustation
            mémorables.
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
                alt={`Cocktail ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Formule Cocktail Prestige
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>• Verrines de saumon fumé et crème citronnée</p>
              <p>• Mini-burgers de bœuf au foie gras</p>
              <p>• Brochettes de Saint-Jacques et chorizo</p>
              <p>• Toasts de chèvre chaud et miel</p>
              <p>• Cuillères apéritives de tartare de thon</p>
              <p>• Mini-éclairs salés variés</p>
              <p>• Verrines sucrées en dessert</p>
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
