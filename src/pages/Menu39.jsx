import MenuNavigation from "../components/MenuNavigation";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import MenuSection from "../components/menu/MenuSection";
import { commonImages } from "../data/imagesData";

export default function Menu39({ openModal }) {
  const { photoPlat } = commonImages;

  // Données des amuse-bouches
  const amuseBouches = [
    { name: "Soufflé d'églefin au cresson" },
    { name: "Vol au vent andouille de Vire, pomme" },
    { name: "Blinis quenelle de rillette de poisson" },
    { name: "Gougère escargot en persillade" },
    { name: "Nem croustillant confit de canard" },
    { name: "Croustille de truite de mer au curcuma" },
    { name: "Burger boeuf confit, Pont-l'Evêque" },
    { name: "Rognon de lapin, sauce moutarde violette" },
    { name: "Feuilleté oignon, chutney boudin blanc" },
    { name: "Cuiller saumon Gravlax, crème coriandre" },
    { name: "Cake boudin noir, crème de sésame" },
    { name: "Paupiette de cabillaud, crème de pesto" },
    { name: "Acra de morue, épices douces" },
    { name: "Duo de volaille et chorizo" },
    { name: "Sablé parmesan, pavot, beurre de betterave", vegetarian: true },
    { name: "Tartelette courgette, curry", vegetarian: true },
  ];

  const entrees = [
    { name: "Terrine maison et ses pickles" },
    { name: "Velouté de légumes du moment" },
    { name: "Salade composée de saison", vegetarian: true },
  ];

  const plats = [
    { name: "Volaille fermière rôtie, jus au cidre" },
    { name: "Pavé de saumon, beurre blanc citronné" },
    { name: "Gratin de légumes du marché", vegetarian: true },
  ];

  const desserts = [
    { name: "Tarte du jour" },
    { name: "Mousse au chocolat maison" },
    { name: "Panna cotta aux fruits rouges" },
  ];

  return (
    <main className="bg-base-100">
      <MenuNavigation currentMenu="menu-39" />

      {/* Photo hero */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={photoPlat}
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
        <MenuSection
          title="8 Amuse-bouches au choix"
          items={amuseBouches}
          className="mb-8"
        />

        <MenuSection title="Entrée au choix" items={entrees} className="mb-8" />

        <MenuSection
          title="Plat au choix"
          items={plats}
          note="Accompagnements : Légumes de saison et pommes de terre rôties"
          className="mb-8"
        />

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
                <strong>Boissons :</strong> Non incluses (supplément sur
                demande)
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
  );
}
