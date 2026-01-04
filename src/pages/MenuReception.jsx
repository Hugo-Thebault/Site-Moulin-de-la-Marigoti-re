import MenuNavigation from "@/components/MenuNavigation";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { commonImages } from "@/data/imagesData";
import SEO from "../components/SEO";
import buffet4 from "@/assets/images/Buffet4.optimized.webp";

const { photoPlat } = commonImages;

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

        <div className="w-full h-96 overflow-hidden">
          <img
            src={buffet4}
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
          </div>

          {/* Amuses-bouches */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <SectionTitle color="primary" centered={false} className="mb-6">
                Amuses-bouches (1,20€ pièce)
              </SectionTitle>
              <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
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

          {/* Atelier apéritif */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <SectionTitle color="primary" centered={false} className="mb-6">
                Atelier apéritif
              </SectionTitle>
              <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                <p>
                  • Kiosque de gamba marinée aux épices Thaï cuite à la plancha
                </p>
                <p>
                  • Kiosque foie gras de canard poêlé, cuit à la plancha sur un
                  pain brioché
                </p>
                <p>• Kiosque de découpe de saumon fumé et mariné sur blinis</p>
              </div>
            </Card>
          </div>

          {/* Entrées */}
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <SectionTitle color="primary" centered={false} className="mb-6">
                Entrées
              </SectionTitle>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    L'assiette du Moulin de la Marigotière : 18 €
                  </h4>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Notre foie gras de canard, chutney de saison</p>
                    <p>• Raviole de volaille, crème de truffe</p>
                    <p>• Vol au vent de saumon au pesto</p>
                    <p>• Gratin d'escargot, champignon, crème persillée</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    L'assiette "Prestige du Moulin" : 19 €
                  </h4>
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

                <div>
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    L'assiette "Normandises" : 17 €
                  </h4>
                  <div className="font-inter text-base space-y-1 text-base-content">
                    <p>• Cassolette de sot-l'y-laisse et andouille de Vire</p>
                    <p>• Sandwich de foie gras de canard poêlé aux poires</p>
                    <p>• Beignet de Camembert, mesclun vinaigre de cidre</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    L'assiette "Terre & Mer" : 19 €
                  </h4>
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

                <div>
                  <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                    La "grande assiette de crustacés" : 27 €
                  </h4>
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
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <SectionTitle color="primary" centered={false} className="mb-6">
                Les Sorbets (1,50 € pièce)
              </SectionTitle>
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
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
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
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
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
          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <SectionTitle color="primary" centered={false} className="mb-6">
                Les desserts (7,20 € pièce)
              </SectionTitle>
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

          {/* Café et mignardises */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <SectionTitle color="primary" centered={false} className="mb-6">
                Café et mignardises (1,70 €)
              </SectionTitle>
              <p className="font-inter text-base text-base-content">
                Guimauves, pâtes de fruits, cannelés, chocolats
              </p>
            </Card>
          </div>

          {/* Message final */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-base-200">
              <div className="font-inter text-lg text-center space-y-4 text-base-content">
                <p className="font-semibold">
                  Nous pouvons vous établir un devis gratuit et rapide !
                </p>
                <p>
                  Nous pouvons aussi nous rencontrer pour étudier ensemble tous
                  les détails de votre projet.
                </p>
              </div>
            </Card>
          </div>

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
