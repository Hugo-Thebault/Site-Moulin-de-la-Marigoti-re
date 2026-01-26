import MenuNavigation from "../components/MenuNavigation";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import MenuSection from "../components/menu/MenuSection";
import { commonImages } from "../data/imagesData";
import entree3 from "@/assets/images/Entree3.jpeg";
import SEO from "../components/SEO";

export default function Menu39({ openModal }) {
  const { photoPlat } = commonImages;

  // Données des entrées
  const entrees = [
    {
      name: "Tarte fine andouille de Vire et pomme, crème de Camembert et son mesclun",
    },
    { name: "Mousseline de cabillaud, coulis de crustacé, semoule de brocoli" },
    { name: "Brochette de saumon poêlée au sésame, caviar d'aubergine" },
    {
      name: "Vol au vent champignons et escargots en persillade, crème de cresson",
    },
    {
      name: "Terrine gourmande « tout canard », aiguillette, foie gras, magret, chutney fruits de saison",
    },
  ];

  const plats = [
    { name: "Pavé de lieu jaune, étuve de légumes, beurre blanc" },
    { name: "Dorade poêlée et son risotto, fine ratatouille" },
    { name: "Cuisse de canard confite par nos soins, petits grecs" },
    { name: "Paleron de bœuf cuit longuement, fine purée de céleri" },
    {
      name: "Filet mignon de porc, tarte au boudin noir, pomme Dauphine « Maison »",
    },
    { name: "Caille désossée et farcie, étuve de choux verts et rouges" },
    { name: "Suprême de pintade rôti, pomme grenaille et champignons" },
  ];

  const desserts = [
    { name: "Tarte Tatin et sa crème fraîche" },
    { name: "Croustillant chocolat, praliné, noisette" },
    { name: "Paris-Brest, crumble et amandes caramélisées" },
    { name: "Nougat glacé, carpaccio d'ananas" },
    { name: "Tarte fine aux pommes, glace caramel, beurre salé" },
    { name: "Brownie chocolat, crème tendre" },
    { name: "Assiette de trois desserts en dégustation" },
  ];

  return (
    <>
      <SEO
        title="Menu à 39€"
        description="Menu traiteur à 39€ par personne (dès 10 personnes) : entrée, plat, mesclun & fromages, dessert. Réalisé avec des produits frais et de saison."
        keywords="menu 39€, traiteur, Thiberville, menu réception, Eure, Normandie"
      />
      <main className="bg-base-100">
        <MenuNavigation currentMenu="menu-39" />

      {/* Photo hero */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={entree3}
          alt="Menu à 39€"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Titre */}
        <div className="max-w-4xl mx-auto mb-12">
          <SectionTitle color="base">Notre menu à 39€</SectionTitle>
          <p className="text-lg text-center text-base-content/70 mb-8">
            Minimum 10 personnes
          </p>
        </div>

        {/* Sections du menu */}
        <MenuSection title="Entrée au choix" items={entrees} className="mb-8" />

        <MenuSection
          title="Plat au choix"
          items={plats}
          note="Toutes nos garnitures et sauces peuvent être changées selon vos envies et par rapport à la saison"
          className="mb-8"
        />

        {/* Mesclun et Fromage */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <SectionTitle color="primary" centered={false} className="mb-6">
              Mesclun et Fromage
            </SectionTitle>
            <div className="font-inter text-base md:text-lg text-base-content">
              <p>Salade du moment et trois fromages affinés</p>
            </div>
          </Card>
        </div>

        <MenuSection
          title="Dessert au choix"
          items={desserts}
          className="mb-8"
        />

        {/* Informations */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <SectionTitle color="primary" centered={false} className="mb-4">
              Informations importantes
            </SectionTitle>
            <div className="font-inter text-base space-y-3 text-base-content">
              <p>
                <strong>Prix :</strong> 39€ par personne
              </p>
              <p>
                <strong>Minimum :</strong> 10 personnes
              </p>
              <p>
                <strong>Formule :</strong> Entrée + Plat + Mesclun & Fromage +
                Dessert
              </p>
              <p>
                <strong>Boissons :</strong> Non incluses (supplément sur
                demande)
              </p>
              <p>
                <strong>Option :</strong> Des amuse-bouches du menu réception
                peuvent être ajoutés selon vos envies (supplément)
              </p>
              <p className="text-sm italic text-base-content/70 mt-4 pt-4 border-t border-base-300">
                Notre menu à 39€ offre un excellent rapport qualité-prix sans
                compromis sur la fraîcheur des produits et le savoir-faire de
                notre maître restaurateur. Chaque plat est préparé avec soin en
                utilisant des produits locaux et de saison.
              </p>
            </div>
          </Card>
        </div>

        {/* Bouton devis */}
        <div className="text-center">
          <Button onClick={openModal} size="lg">
            Demandez votre devis
          </Button>
        </div>
      </div>
      </main>
    </>
  );
}
