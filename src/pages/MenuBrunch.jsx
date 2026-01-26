import MenuNavigation from "@/components/MenuNavigation";
import { commonImages } from "@/data/imagesData";
import SEO from "@/components/SEO";

const { photoPlat, photoPlat2, photoPlat3, photoPlat4 } = commonImages;

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
    <>
      <SEO
        title="Brunch"
        description="Brunch traiteur à Thiberville : formule sucrée/salée conviviale pour mariages, réceptions et événements professionnels. Produits frais et de saison."
        keywords="brunch, traiteur, Thiberville, réception, mariage, événement, Eure"
      />
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
                <strong>Prix :</strong> 32€ par personne
              </p>
              <p>
                <strong>Boissons :</strong> Café, Thé, Chocolat chaud, Lait, Jus
                d'orange, Jus de pomme
              </p>
              <p>
                <strong>Sucré et accompagnement :</strong> Brioche, minis
                viennoiseries, baguettes, céréales, tartelette de fruit,
                corbeille de fruit, miel, nutella, confiture, beurre
              </p>
              <p>
                <strong>Salé :</strong> Oeufs brouillés, bacon, pancake, jambon
                blanc, jambon sec, salade de tomate, taboulé, fromage blanc
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
    </>
  );
}
