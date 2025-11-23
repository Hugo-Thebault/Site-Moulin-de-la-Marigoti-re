import MenuNavigation from "@/components/MenuNavigation";
import { commonImages } from "@/data/imagesData";

const { photoPlat, photoPlat2, photoPlat3, photoPlat4 } = commonImages;

const dishImages = [
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
  photoPlat2,
];

export default function MenuReception({ openModal }) {
  return (
    <main className="bg-base-100">
      <MenuNavigation currentMenu="reception" />

      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat}
          alt="Réception"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-4 text-base-content">
          Réception
        </h1>
        <p className="text-2xl md:text-3xl font-cormorant-sc text-center mb-12 text-base-content/70">
          (mariage/anniversaire)
        </p>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Faites de votre réception un moment inoubliable avec nos menus
            raffinés et personnalisés. Notre maître restaurateur François
            Duperrey met tout son savoir-faire à votre service pour créer une
            expérience culinaire qui marquera les esprits de vos invités.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Chaque menu est élaboré avec des produits frais et de saison, en
            collaboration avec nos partenaires locaux. Nous adaptons nos
            propositions à vos envies, votre budget et le nombre de vos
            convives.
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
                alt={`Réception ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Menu Prestige
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>
                <strong>Entrée :</strong> Foie gras mi-cuit et son chutney de
                figues
              </p>
              <p>
                <strong>Plat :</strong> Filet de bœuf sauce au poivre vert,
                légumes de saison
              </p>
              <p>
                <strong>Fromage :</strong> Sélection de fromages normands
              </p>
              <p>
                <strong>Dessert :</strong> Pièce montée traditionnelle ou
                wedding cake
              </p>
            </div>
          </div>

          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Menu Tradition
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>
                <strong>Entrée :</strong> Terrine maison et ses pickles
              </p>
              <p>
                <strong>Plat :</strong> Suprême de volaille fermière, jus au
                cidre
              </p>
              <p>
                <strong>Fromage :</strong> Plateau de fromages régionaux
              </p>
              <p>
                <strong>Dessert :</strong> Tarte normande flambée au calvados
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
