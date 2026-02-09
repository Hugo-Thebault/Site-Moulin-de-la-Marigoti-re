import MenuNavigation from "../components/MenuNavigation";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
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

        {/* Hero Section */}
        <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={entree3}
            alt="Menu à 39€"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/15" />

          <div className="relative h-full container mx-auto px-6 flex items-end">
            <div className="w-full max-w-4xl pb-10 md:pb-14">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Menu complet
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  39€
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Réception
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-cormorant-sc text-white leading-tight">
                Menu à 39€
              </h1>
              <p className="mt-4 text-base md:text-lg font-inter text-white/90 leading-relaxed">
                Un menu complet et raffiné avec entrée, plat, fromage et dessert au choix. 
                Préparé avec des produits frais et de saison par notre maître restaurateur.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={openModal} size="lg">
                  Demandez votre devis
                </Button>
                <a
                  href="#formule"
                  className="btn btn-outline btn-lg border-white/60 text-white hover:bg-white/10 hover:border-white"
                >
                  Voir le menu
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-14 md:py-16" id="formule">
          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <p className="text-base md:text-lg font-inter leading-relaxed text-base-content mb-2">
                    Notre menu à 39€ offre un excellent rapport qualité-prix sans compromis 
                    sur la fraîcheur des produits et le savoir-faire de notre maître restaurateur.
                  </p>
                  <p className="text-sm font-inter text-base-content/70">
                    Minimum 10 personnes
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <span className="inline-flex items-center rounded-full bg-[#9B1227] px-5 py-2.5 text-xl font-semibold text-white">
                    39 €
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Entrées */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Entrée au choix
              </SectionTitle>
              <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                {entrees.map((item, index) => (
                  <p key={index}>• {item.name}</p>
                ))}
              </div>
            </Card>
          </div>

          {/* Plats */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Plat au choix
              </SectionTitle>
              <div className="font-inter text-base md:text-lg space-y-2 text-base-content mb-4">
                {plats.map((item, index) => (
                  <p key={index}>• {item.name}</p>
                ))}
              </div>
              <p className="font-inter text-sm text-base-content/70 italic pt-4 border-t border-base-300">
                Toutes nos garnitures et sauces peuvent être changées selon vos envies et par rapport à la saison
              </p>
            </Card>
          </div>

          {/* Mesclun et Fromage */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Mesclun et Fromage
              </SectionTitle>
              <div className="font-inter text-base md:text-lg text-base-content">
                <p>Salade du moment et trois fromages affinés</p>
              </div>
            </Card>
          </div>

          {/* Desserts */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Dessert au choix
              </SectionTitle>
              <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                {desserts.map((item, index) => (
                  <p key={index}>• {item.name}</p>
                ))}
              </div>
            </Card>
          </div>

          {/* Options et informations */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Options et informations
              </SectionTitle>
              <div className="font-inter text-base space-y-3 text-base-content">
                <p>
                  <strong>Formule :</strong> Entrée + Plat + Mesclun & Fromage + Dessert
                </p>
                <p>
                  <strong>Minimum :</strong> 10 personnes
                </p>
                <p>
                  <strong>Boissons :</strong> Non incluses (supplément sur demande)
                </p>
                <p>
                  <strong>Option :</strong> Des amuse-bouches du menu réception peuvent être ajoutés selon vos envies (supplément)
                </p>
              </div>
            </Card>
          </div>

          {/* Message final */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-base-200 border border-base-300 shadow-xl" padding="p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <p className="font-inter text-lg md:text-xl text-base-content">
                    <span className="font-semibold">
                      Nous pouvons vous établir un devis gratuit et rapide.
                    </span>{" "}
                    Nous pouvons aussi nous rencontrer pour étudier ensemble
                    tous les détails de votre projet.
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <Button onClick={openModal} size="lg">
                    Demandez votre devis
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
