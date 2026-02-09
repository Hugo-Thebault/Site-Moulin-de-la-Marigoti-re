import MenuNavigation from "@/components/MenuNavigation";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";
import buffet4 from "@/assets/images/Buffet4.optimized.webp";

function PricePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#9B1227]/10 px-3 py-1 text-sm font-semibold text-[#9B1227]">
      {children}
    </span>
  );
}

export default function MenuReception({ openModal }) {
  return (
    <>
      <SEO
        title="Menu Réception - Mariage & Anniversaire"
        description="Menus raffinés pour vos mariages et réceptions à Thiberville. François Duperrey crée des expériences culinaires inoubliables avec des produits frais et locaux."
        keywords="menu mariage, réception Thiberville, traiteur mariage Eure, menu anniversaire, gastronomie"
      />
      <main className="bg-base-100">
        <MenuNavigation currentMenu="reception" />

        {/* Hero */}
        <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={buffet4}
            alt="Buffet et réception"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/15" />

          <div className="relative h-full container mx-auto px-6 flex items-end">
            <div className="w-full max-w-4xl pb-10 md:pb-14">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Mariage
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Anniversaire
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Réception
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-cormorant-sc text-white leading-tight">
                Menu Réception
              </h1>
              <p className="mt-4 text-base md:text-lg font-inter text-white/90 leading-relaxed">
                Faites de votre réception un moment inoubliable avec une cuisine
                raffinée, des produits de saison et un devis sur mesure.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={openModal} size="lg">
                  Demandez votre devis
                </Button>
                <a
                  href="#formules"
                  className="btn btn-outline btn-lg border-white/60 text-white hover:bg-white/10 hover:border-white"
                >
                  Voir les formules
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-14 md:py-16" id="formules">
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <p className="text-base md:text-lg font-inter leading-relaxed text-base-content">
                    Notre carte Réception vous laisse composer un menu complet :
                    pièces apéritives, entrées, sorbets, plats, fromages et desserts.
                    Nous adaptons les propositions selon la saison et vos envies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <PricePill>Amuses-bouches : 1,20€</PricePill>
                  <PricePill>Sorbets : 1,50€</PricePill>
                  <PricePill>Desserts : 7,20€</PricePill>
                </div>
              </div>
            </Card>
          </div>

          {/* Amuses-bouches */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <SectionTitle color="primary" centered={false} className="mb-0">
                  Amuses-bouches
                </SectionTitle>
                <PricePill>1,20€ pièce</PricePill>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Soufflé d'églefin au cresson</p>
                <p>• Vol au vent andouille de Vire, pomme</p>
                <p>• Blinis quenelle de rillette de poisson</p>
                <p>• Sablé parmesan, pavot, beurre de betterave</p>
                <p>• Gougère escargot en persillade</p>
                <p>• Nem croustillant confit de canard</p>
                <p>• Croustille de truite de mer au curcuma</p>
                <p>• Burger boeuf confit, Pont-l'Evêque</p>
                <p>• Rognon de lapin, sauce moutarde violette</p>
                <p>• Tartelette courgette, curry</p>
                <p>• Feuilleté oignon, chutney boudin blanc</p>
                <p>• Cuiller saumon Gravlax, crème coriandre</p>
                <p>• Cake boudin noir, crème de sésame</p>
                <p>• Paupiette de cabillaud, crème de pesto</p>
                <p>• Acra de morue, épices douces</p>
                <p>• Duo de volaille et chorizo</p>
              </div>
            </Card>
          </div>

          {/* Amuses-bouches Prestige */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Amuses-bouches Prestige
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Ris de veau braisé au porto <span className="text-[#9B1227] font-semibold">(2,20 €)</span></p>
                <p>• Cuisse de caille rôti aux épices <span className="text-[#9B1227] font-semibold">(1,50 €)</span></p>
                <p>• Huître chaude ou froide <span className="text-[#9B1227] font-semibold">(2,00 €)</span></p>
                <p>• Briochette foie gras poêlé <span className="text-[#9B1227] font-semibold">(2,50 €)</span></p>
              </div>
            </Card>
          </div>

          {/* Ateliers Prestige */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Ateliers Prestige
              </SectionTitle>

              <div className="space-y-6">
                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    Kiosque Plancha
                  </h4>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Gambas épices thaï <span className="text-[#9B1227] font-semibold">(2,60 €)</span></p>
                    <p>• Foie gras poêlé <span className="text-[#9B1227] font-semibold">(2,60 €)</span></p>
                    <p>• Brochette volaille marinée <span className="text-[#9B1227] font-semibold">(2,20 €)</span></p>
                    <p>• Noix de St-Jacques snackée <span className="text-[#9B1227] font-semibold">(2,10 €)</span></p>
                  </div>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    Atelier Découpe
                  </h4>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Jambon serrano sur pâte <span className="text-[#9B1227] font-semibold">(2,60 €)</span></p>
                    <p>• Saumon fumé/mariné/gravlax sur blinis <span className="text-[#9B1227] font-semibold">(2,50 €)</span></p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Entrées */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Entrées
              </SectionTitle>

              <div className="space-y-6">
                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-cormorant-sc text-[#9B1227]">
                      L'assiette du Moulin de la Marigotière
                    </h4>
                    <PricePill>18 €</PricePill>
                  </div>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Notre foie gras de canard, chutney de saison</p>
                    <p>• Raviole de volaille, crème de truffe</p>
                    <p>• Vol au vent de saumon au pesto</p>
                    <p>• Gratin d'escargot, champignon, crème persillée</p>
                  </div>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-cormorant-sc text-[#9B1227]">
                      L'assiette "Prestige du Moulin"
                    </h4>
                    <PricePill>19 €</PricePill>
                  </div>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Gratin de ris de veau, champignon de saison</p>
                    <p>
                      • Foie gras de canard mi-cuit, pain d'épices, pomme et
                      compote de fruits de saison
                    </p>
                    <p>• Raviole de gamba, coulis de tête et carapace</p>
                    <p>
                      • Verrine de tourteau, petits légumes, mayonnaise Savora
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-cormorant-sc text-[#9B1227]">
                      L'assiette "Normandises"
                    </h4>
                    <PricePill>17 €</PricePill>
                  </div>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Cassolette de sot-l'y-laisse et andouille de Vire</p>
                    <p>• Sandwich de foie gras de canard poêlé aux poires</p>
                    <p>• Beignet de Camembert, mesclun vinaigre de cidre</p>
                  </div>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-cormorant-sc text-[#9B1227]">
                      L'assiette "Terre & Mer"
                    </h4>
                    <PricePill>19 €</PricePill>
                  </div>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>
                      • Tartare de saumon mariné au citron vert, semoule de
                      brocoli
                    </p>
                    <p>
                      • Cassolette de pétoncle, champignon, jus de crustacé aux
                      épices
                    </p>
                    <p>
                      • Nem croustillant de dorade florentine et fenouil confit
                    </p>
                    <p>
                      • Charlotte de crabe, légumes de saison, pousse de poireau
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-cormorant-sc text-[#9B1227]">
                      La "grande assiette de crustacés"
                    </h4>
                    <PricePill>27 €</PricePill>
                  </div>
                  <p className="font-inter text-sm text-base-content/70 mb-2">
                    Homard ou langouste ou langoustine (selon la saison)
                  </p>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>
                      • Le tronçon, rémoulade de légumes, vinaigrette de fruits
                      rouges
                    </p>
                    <p>• Le gratin aux lentilles vertes du Puy</p>
                    <p>• Le beignet en tempura, crème aux herbes</p>
                    <p>• Le nem croustillant, fenouil confit</p>
                    <p>• La bisque, jus de tête et carapace</p>
                    <p>• La raviole florentine</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sorbets */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <SectionTitle color="primary" centered={false} className="mb-0">
                  Les Sorbets
                </SectionTitle>
                <PricePill>1,50 € pièce</PricePill>
              </div>
              <p className="font-inter text-sm text-base-content/70 mb-4">
                Servis avec ou sans alcool
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-cormorant-sc text-[#9B1227] mb-3">
                    Les "Classiques"
                  </h4>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Poire • Pomme • Mûre</p>
                    <p>• Griotte • Cassis • Citron</p>
                    <p>• Mandarine • Framboise • Citron vert</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-cormorant-sc text-[#9B1227] mb-3">
                    Les "Originaux"
                  </h4>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Poire, pomme, Pommeau miel</p>
                    <p>• Pomme, cassis, cannelle</p>
                    <p>• Fraise, carotte, poivre de Sechuan</p>
                    <p>• Poire, mandarine, gingembre</p>
                    <p>• Agrumes, menthe, limoncello</p>
                    <p>• Fruits des Îles, Ti'Punch</p>
                    <p>• Poire, betterave, banane</p>
                    <p>• Mojito • Framboise, litchi</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Plat principal */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Plat principal
              </SectionTitle>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-cormorant-sc text-[#9B1227] mb-3">
                    Les Viandes
                  </h4>
                  <div className="font-inter text-base space-y-2 text-base-content">
                    <p>
                      <strong>Boeuf :</strong> le tournedos, brochette de pomme
                      grenaille persillée, sauce réduction Porto rouge{" "}
                      <span className="text-[#9B1227]">25 €</span>
                    </p>
                    <p>
                      <strong>Canette :</strong> le filet laqué au sésame, sauce
                      aigre douce, panier vapeur de légumes{" "}
                      <span className="text-[#9B1227]">18 €</span>
                    </p>
                    <p>
                      <strong>Pintade :</strong> le suprême poêlé sur peau,
                      sandwich foie gras de canard poêlé, légumes de saison{" "}
                      <span className="text-[#9B1227]">26 €</span>
                    </p>
                    <p>
                      <strong>Canard :</strong> le magret (200 g), champignon du
                      moment, cocotte de purée aux truffes{" "}
                      <span className="text-[#9B1227]">19 €</span>
                    </p>
                    <p>
                      <strong>Veau :</strong> le filet mignon fondant, crème de
                      cèpe, pomme dauphine amandine{" "}
                      <span className="text-[#9B1227]">23 €</span>
                    </p>
                    <p>
                      <strong>Trilogie de veau :</strong> le ris, le quasi, la
                      joue braisée et confite aux morilles ou girolles, pois
                      gourmands <span className="text-[#9B1227]">26 €</span>
                    </p>
                    <p>
                      <strong>Agneau :</strong> la souris cuite longuement,
                      petits cocos cuisinés au chorizo{" "}
                      <span className="text-[#9B1227]">25 €</span>
                    </p>
                    <p>
                      <strong>Pigeon :</strong> désossé, farci de champignons et
                      aromates, escalope de foie gras de canard poêlé, jus de
                      truffe <span className="text-[#9B1227]">25 €</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-cormorant-sc text-[#9B1227] mb-3">
                    Les poissons de mer et rivière
                  </h4>
                  <div className="font-inter text-base space-y-2 text-base-content">
                    <p>
                      <strong>Lotte :</strong> médaillons cuits vapeur, coulis
                      de crustacés, légumes du wok{" "}
                      <span className="text-[#9B1227]">20 €</span>
                    </p>
                    <p>
                      <strong>Bar :</strong> saisi et cuit lentement, écrasée de
                      pomme de terre et champignon, crème de ciboulette{" "}
                      <span className="text-[#9B1227]">21 €</span>
                    </p>
                    <p>
                      <strong>Cabillaud :</strong> épais, rôti aux épices Thaï,
                      risotto crémeux, beurre de carotte{" "}
                      <span className="text-[#9B1227]">19 €</span>
                    </p>
                    <p>
                      <strong>Dorade royale :</strong> cuite sur peau, mirepoix
                      aromates, fine ratatouille, beurre nantais{" "}
                      <span className="text-[#9B1227]">17 €</span>
                    </p>
                    <p>
                      <strong>Trilogie :</strong> trio de poissons du moment,
                      légume de saison, sauce selon vos goûts ou vos envies{" "}
                      <span className="text-[#9B1227]">22 €</span>
                    </p>
                    <p>
                      <strong>Saint-Jacques :</strong> poêlée sur un bâton de
                      citronnelle, purée de brocoli, dés de chorizo{" "}
                      <span className="text-[#9B1227]">19 €</span>
                    </p>
                    <p>
                      <strong>Sandre :</strong> velouté et salade de cresson,
                      croustillant d'escargot cuisiné en persillade{" "}
                      <span className="text-[#9B1227]">18 €</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Fromage */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Fromage
              </SectionTitle>
              <div className="font-inter text-base space-y-2 text-base-content">
                <p>
                  Les cinq fromages affinés selon votre choix accompagnés de
                  mesclun <span className="text-[#9B1227]">6 €</span>
                </p>
                <p className="italic text-sm">ou</p>
                <p>
                  Le Brie de Meaux aux truffes accompagné de mesclun{" "}
                  <span className="text-[#9B1227]">5 €</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Desserts */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <SectionTitle color="primary" centered={false} className="mb-0">
                  Les desserts
                </SectionTitle>
                <PricePill>7,20 € pièce</PricePill>
              </div>
              <p className="font-inter text-sm text-base-content/70 mb-4">
                Composez votre assiette de quatre desserts au choix
              </p>
              <div className="font-inter text-base space-y-2 text-base-content">
                <p>• Tartelette poire amandine "Vieille France"</p>
                <p>• Notre Paris-Brest crumble croustillant</p>
                <p>• Verrine tiramisu aux fruits exotiques</p>
                <p>• Nem croustillant aux pommes "Tatin"</p>
                <p>• Crème Carambar, poire pochée aux épices douces</p>
                <p>• Brownie aux graines, crème tendre au chocolat</p>
                <p>• Panna-cotta citron vert, coulis de framboise</p>
                <p>• Parfait glacé vanille ou café ou spéculoos</p>
                <p>• Brochette d'ananas pochée au sirop et caramélisée</p>
                <p>
                  • Trois chocolats, biscuit aux amandes, pailleté feuillantine
                </p>
                <p>• Pot "crème d'antan" - vanille, pistache, café</p>
                <p>• Crème tendre pistache, coulis de framboise fraîche</p>
                <p>• Charlotte aux fruits de saison</p>
                <p>• Sorbet et glace "maison" tous parfums</p>
                <p>• Soupe de fruits frais au sirop vanillé</p>
              </div>
              <div className="mt-6 pt-6 border-t border-base-300">
                <p className="font-inter text-base text-base-content">
                  <strong>Pour vos réceptions, mariages, anniversaires,</strong>{" "}
                  nous pouvons, sur demande, vous proposer :
                </p>
                <div className="font-inter text-base space-y-1 text-base-content mt-2">
                  <p>• Pièce montée chou (Grand Marnier, Rhum, vanille)</p>
                  <p>• Pièce montée macaron</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Café et cannelés */}
          <div className="max-w-5xl mx-auto mb-12">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <SectionTitle color="primary" centered={false} className="mb-0">
                  Café et cannelés
                </SectionTitle>
                <PricePill>1,70 €</PricePill>
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
