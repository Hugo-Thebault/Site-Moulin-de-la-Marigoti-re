import MenuNavigation from "../components/MenuNavigation";
import photoPlat from "../assets/images/photo-plat.jpg";
import leafIcon from "../assets/images/leaf-icon.png";

export default function Menu39({ openModal }) {
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
        {/* Titre et informations */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-cormorant-sc text-center mb-4 text-base-content">
            Notre menu à 39€
          </h1>
          <p className="text-lg text-center text-base-content/70 mb-8">
            Minimum 10 personnes
          </p>
        </div>

        {/* Amuse-bouches */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              8 Amuse-bouches au choix
            </h3>
            <div className="font-inter text-base md:text-lg space-y-3 text-base-content">
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Soufflé d'églefin au cresson</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Vol au vent andouille de Vire, pomme</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Blinis quenelle de rillette de poisson</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Gougère escargot en persillade</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Nem croustillant confit de canard</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Croustille de truite de mer au curcuma</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Burger boeuf confit, Pont-l'Evêque</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Rognon de lapin, sauce moutarde violette</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Feuilleté oignon, chutney boudin blanc</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Cuiller saumon Gravlax, crème coriandre</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Cake boudin noir, crème de sésame</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Paupiette de cabillaud, crème de pesto</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Acra de morue, épices douces</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Duo de volaille et chorizo</span>
              </div>
              {/* Options végétariennes à la fin */}
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <div className="flex items-center gap-2">
                  <span>Sablé parmesan, pavot, beurre de betterave</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                    <img src={leafIcon} alt="Végétarien" className="w-3 h-3" />
                    Végétarien
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <div className="flex items-center gap-2">
                  <span>Tartelette courgette, curry</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                    <img src={leafIcon} alt="Végétarien" className="w-3 h-3" />
                    Végétarien
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Entrées */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Entrée au choix
            </h3>
            <div className="font-inter text-base md:text-lg space-y-3 text-base-content">
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Terrine maison et ses pickles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Velouté de légumes du moment</span>
              </div>
              {/* Option végétarienne à la fin */}
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <div className="flex items-center gap-2">
                  <span>Salade composée de saison</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                    <img src={leafIcon} alt="Végétarien" className="w-3 h-3" />
                    Végétarien
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plats */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Plat au choix
            </h3>
            <div className="font-inter text-base md:text-lg space-y-3 text-base-content">
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Volaille fermière rôtie, jus au cidre</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Pavé de saumon, beurre blanc citronné</span>
              </div>
              {/* Option végétarienne à la fin */}
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <div className="flex items-center gap-2">
                  <span>Gratin de légumes du marché</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                    <img src={leafIcon} alt="Végétarien" className="w-3 h-3" />
                    Végétarien
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-base-300">
              <p className="font-inter text-base text-base-content/70 italic">
                Accompagnements : Légumes de saison et pommes de terre rôties
              </p>
            </div>
          </div>
        </div>

        {/* Desserts */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-cormorant-sc text-[#9B1227] mb-6">
              Dessert au choix
            </h3>
            <div className="font-inter text-base md:text-lg space-y-3 text-base-content">
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Tarte du jour</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Mousse au chocolat maison</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-base-content/70 mt-1">•</span>
                <span>Panna cotta aux fruits rouges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-base-200 rounded-lg shadow-lg p-8">
            <h3 className="text-xl md:text-2xl font-cormorant-sc text-[#9B1227] mb-4">
              Informations importantes
            </h3>
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
          </div>
        </div>

        {/* Bouton devis */}
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
