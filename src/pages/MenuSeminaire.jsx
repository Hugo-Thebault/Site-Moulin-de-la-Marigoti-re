import photoPlat from "../assets/images/photo-plat.jpg";
import photoPlat2 from "../assets/images/photo-plat-2.webp";
import photoPlat3 from "../assets/images/photo-plat-3.webp";
import photoPlat4 from "../assets/images/photo-plat-4.webp";
import SEO from "../components/SEO";

const dishImages = [
  photoPlat4,
  photoPlat,
  photoPlat2,
  photoPlat3,
  photoPlat4,
  photoPlat,
];

export default function MenuSeminaire({ openModal }) {
  return (
    <>
      <SEO
        title="Séminaire"
        description="Traiteur séminaire à Thiberville : pauses café, déjeuners d’affaires et cocktails de networking. Formules flexibles pour vos événements pros."
        keywords="traiteur séminaire, entreprise, Thiberville, pause café, Eure"
      />
      <main className="bg-base-100">
        <div className="w-full h-96 overflow-hidden">
          <img
            src={photoPlat}
            alt="Séminaire"
            className="w-full h-full object-cover"
          />
        </div>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-12 text-base-content">
          Séminaire
        </h1>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content mb-6">
            Nous accompagnons vos événements professionnels avec des formules
            adaptées : pauses café gourmandes, déjeuners d'affaires, cocktails
            de networking. Notre service discret et efficace saura répondre à
            vos exigences.
          </p>
          <p className="text-lg md:text-xl font-inter leading-relaxed text-base-content">
            Des formules flexibles pour s'adapter à votre planning, du
            petit-déjeuner au cocktail dînatoire, en passant par les pauses
            rafraîchissantes.
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
                alt={`Séminaire ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Formule Déjeuner Séminaire
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>• Entrée : Salade de saison ou soupe maison</p>
              <p>• Plat : Viande ou poisson avec accompagnement</p>
              <p>• Dessert : Tarte du jour ou plateau de fromages</p>
              <p>• Café et mignardises</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Pause Café Gourmande
            </h3>
            <div className="font-inter text-lg space-y-4 text-base-content">
              <p>• Café, thé, jus de fruits frais</p>
              <p>• Viennoiseries et pâtisseries maison</p>
              <p>• Fruits de saison</p>
              <p>• Mini-sandwichs salés (option)</p>
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
