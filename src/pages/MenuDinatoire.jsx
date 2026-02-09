import { useState } from "react";
import MenuNavigation from "@/components/MenuNavigation";
import { commonImages } from "@/data/imagesData";
import SEO from "@/components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import dinatoireImage from "@/assets/images/Dinatoire1.webp";

const { photoPlat, photoPlat2, photoPlat3, photoPlat4 } = commonImages;

function PricePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#9B1227]/10 px-3 py-1 text-sm font-semibold text-[#9B1227]">
      {children}
    </span>
  );
}

export default function MenuDinatoire({ openModal }) {
  const [activeFormula, setActiveFormula] = useState("prestige");
  return (
    <>
      <SEO
        title="Cocktail Dinatoire"
        description="Cocktail dinatoire à Thiberville : bouchées raffinées, verrines et pièces apéritives pour vos réceptions et événements. Service traiteur en Normandie."
        keywords="cocktail dinatoire, apéritif, traiteur, Thiberville, réception, Eure, Normandie"
      />
      <main className="bg-base-100">
        <MenuNavigation currentMenu="dinatoire" />

        {/* Hero */}
        <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={dinatoireImage}
            alt="Cocktail Dinatoire"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/15" />

          <div className="relative h-full container mx-auto px-6 flex items-end">
            <div className="w-full max-w-4xl pb-10 md:pb-14">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Cocktail
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Apéritif Dinatoire
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Réception
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-cormorant-sc text-white leading-tight">
                Cocktail Dinatoire
              </h1>
              <p className="mt-4 text-base md:text-lg font-inter text-white/90 leading-relaxed">
                Surprenez vos invités avec des bouchées raffinées, des ateliers plancha et kiosque, pour un moment convivial et gourmand.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={openModal} size="lg">
                  Demandez votre devis
                </Button>
                <a
                  href="#formule"
                  className="btn btn-outline btn-lg border-white/60 text-white hover:bg-white/10 hover:border-white"
                >
                  Voir les formules
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-14 md:py-16" id="formule">
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="text-center">
                <p className="text-base md:text-lg font-inter leading-relaxed text-base-content mb-6">
                  Découvrez nos trois formules cocktail dinatoire pour vos événements : 
                  une option raffinée et complète, ou des alternatives plus simples et conviviales.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setActiveFormula("prestige")}
                    className={`inline-flex items-center rounded-full px-5 py-2.5 text-lg md:text-xl font-semibold transition-all ${
                      activeFormula === "prestige"
                        ? "bg-[#9B1227] text-white shadow-lg scale-105"
                        : "bg-[#9B1227]/20 text-[#9B1227] hover:bg-[#9B1227]/30"
                    }`}
                  >
                    Formule Prestige - 49 €
                  </button>
                  <button
                    onClick={() => setActiveFormula("audace")}
                    className={`inline-flex items-center rounded-full px-5 py-2.5 text-lg md:text-xl font-semibold transition-all ${
                      activeFormula === "audace"
                        ? "bg-[#9B1227] text-white shadow-lg scale-105"
                        : "bg-[#9B1227]/20 text-[#9B1227] hover:bg-[#9B1227]/30"
                    }`}
                  >
                    Formule L'Audace - 39 €
                  </button>
                  <button
                    onClick={() => setActiveFormula("classique")}
                    className={`inline-flex items-center rounded-full px-5 py-2.5 text-lg md:text-xl font-semibold transition-all ${
                      activeFormula === "classique"
                        ? "bg-[#9B1227] text-white shadow-lg scale-105"
                        : "bg-[#9B1227]/20 text-[#9B1227] hover:bg-[#9B1227]/30"
                    }`}
                  >
                    Formule Classique - 30 €
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Formule Prestige */}
          {activeFormula === "prestige" && (
            <>
              {/* Titre section Prestige */}
              <div className="max-w-5xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <SectionTitle color="primary" centered={false} className="mb-0">
                    Formule Prestige
                  </SectionTitle>
                  <PricePill>49 € / personne</PricePill>
                </div>
              </div>

              {/* Amuses-bouches */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <SectionTitle color="primary" centered={false} className="mb-0">
                      Amuses-bouches
                    </SectionTitle>
                  </div>
                  <p className="font-inter text-sm text-base-content/70 mb-4">
                    10 amuses-bouches au choix
                  </p>
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

              {/* Ateliers */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Ateliers
                  </SectionTitle>

                  <div className="space-y-6">
                    <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                      <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                        Plancha
                      </h4>
                      <div className="font-inter text-base space-y-1 text-base-content">
                        <p>• Brochette de boeuf</p>
                        <p>• Brochette volailles marinées</p>
                        <p>• Brochette légumes</p>
                      </div>
                    </div>

                    <div className="rounded-lg border border-base-300 bg-base-200/40 p-5">
                      <h4 className="text-xl font-cormorant-sc text-[#9B1227] mb-3">
                        Kiosque
                      </h4>
                      <div className="font-inter text-base space-y-1 text-base-content">
                        <p>• Saumon fumé sur blinis</p>
                        <p>• Brochette saumon gravlax</p>
                        <p>• Toast saumon mariné</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Autres préparations */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Autres préparations
                  </SectionTitle>
                  <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                    <p>• Tartine foie gras de canard</p>
                    <p>• Brunchetta italienne (jambon tomate feta)</p>
                    <p>• Paupiette de cabillaud landées</p>
                    <p>• Brochette melon</p>
                    <p>• Brochette tomate pesto mozarella</p>
                    <p>• Verrine de rillette de poisson et petit légumes</p>
                  </div>
                </Card>
              </div>

              {/* Fromage */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Fromage
                  </SectionTitle>
                  <div className="font-inter text-base md:text-lg text-base-content">
                    <p>Plateau de fromage avec différents pains et confiture</p>
                  </div>
                </Card>
              </div>

              {/* Desserts */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <SectionTitle color="primary" centered={false} className="mb-0">
                      Buffet de desserts
                    </SectionTitle>
                  </div>
                  <p className="font-inter text-sm text-base-content/70 mb-4">
                    4 desserts au choix
                  </p>
                  <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                    <p>• Tartelette poire amandine "Vieille France"</p>
                    <p>• Notre Paris-Brest crumble croustillant</p>
                    <p>• Verrine tiramisu aux fruits exotiques</p>
                    <p>• Nem croustillant aux pommes "Tatin"</p>
                    <p>• Crème Carambar, poire pochée aux épices douces</p>
                    <p>• Brownie aux graines, crème tendre au chocolat</p>
                    <p>• Panna-cotta citron vert, coulis de framboise</p>
                    <p>• Parfait glacé vanille ou café ou spéculoos</p>
                    <p>• Brochette d'ananas pochée au sirop et caramélisée</p>
                    <p>• Trois chocolats, biscuit aux amandes, pailleté feuillantine</p>
                    <p>• Pot "crème d'antan" - vanille, pistache, café</p>
                    <p>• Crème tendre pistache, coulis de framboise fraîche</p>
                    <p>• Charlotte aux fruits de saison</p>
                    <p>• Sorbet et glace "maison" tous parfums</p>
                    <p>• Soupe de fruits frais au sirop vanillé</p>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Formule L'Audace */}
          {activeFormula === "audace" && (
            <>
              {/* Titre Formule L'Audace */}
              <div className="max-w-5xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <SectionTitle color="primary" centered={false} className="mb-0">
                    Formule L'Audace
                  </SectionTitle>
                  <PricePill>39 € / personne</PricePill>
                </div>
              </div>

              {/* Amuses-bouches L'Audace */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <SectionTitle color="primary" centered={false} className="mb-0">
                      Amuses-bouches
                    </SectionTitle>
                  </div>
                  <p className="font-inter text-sm text-base-content/70 mb-4">
                    8 amuses-bouches au choix
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                    <p>• Tartine jambon serrano conté roquette</p>
                    <p>• Broche foie gras confiture de saison</p>
                    <p>• Verinne de tourteaux petits légumes</p>
                    <p>• Brunchetta de saumon fumé artisanal</p>
                    <p>• Navette thon et tomate confite</p>
                    <p>• Gaspacho tomate ou velouté chaud de légumes de saison</p>
                    <p>• Brochette melon</p>
                    <p>• Brochette tomates mozzarella</p>
                  </div>
                </Card>
              </div>

              {/* Desserts L'Audace */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Buffet de desserts
                  </SectionTitle>
                  <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                    <p>• Croustillant chocolat</p>
                    <p>• Brochette ananas</p>
                    <p>• Paris Brest</p>
                    <p>• Panna cotta citron framboise</p>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Formule Classique */}
          {activeFormula === "classique" && (
            <>
              {/* Titre Formule Classique */}
              <div className="max-w-5xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <SectionTitle color="primary" centered={false} className="mb-0">
                    Formule Classique
                  </SectionTitle>
                  <PricePill>30 € / personne</PricePill>
                </div>
              </div>

              {/* Amuses-bouches Classique */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Amuses-bouches
                  </SectionTitle>
                  <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                    <p>• Tataki boeuf</p>
                    <p>• Saumon gravlax</p>
                    <p>• Sablé parmesan</p>
                    <p>• Navette thon</p>
                    <p>• Toast Chèvre noix miel</p>
                    <p>• Bagel tomates confites et légumes</p>
                  </div>
                </Card>
              </div>

              {/* Préparations Classique */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Préparations
                  </SectionTitle>
                  <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                    <p>• Verrine froide rillette poisson courgettes</p>
                    <p>• Pain brioché foie gras confiture saison</p>
                    <p>• Brunchetta saumon mariné citron vert</p>
                    <p>• Tartine de jambon serrano et condiments</p>
                    <p>• Tartine roquette parmesan tomate</p>
                  </div>
                </Card>
              </div>

              {/* Desserts Classique */}
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <SectionTitle color="primary" centered={false} className="mb-6">
                    Desserts
                  </SectionTitle>
                  <div className="font-inter text-base md:text-lg space-y-2 text-base-content">
                    <p>• Fondant chocolat/griottes</p>
                    <p>• Paris brest</p>
                    <p>• Financiers Amandes</p>
                    <p>• Brochette ananas</p>
                  </div>
                </Card>
              </div>
            </>
          )}

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
