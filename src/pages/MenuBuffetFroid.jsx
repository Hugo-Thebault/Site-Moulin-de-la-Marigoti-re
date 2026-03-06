import { useState } from "react";
import MenuNavigation from "@/components/MenuNavigation";
import { commonImages } from "@/data/imagesData";
import SEO from "@/components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const { photoPlat4 } = commonImages;

function PricePill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#9B1227]/10 px-3 py-1 text-sm font-semibold text-[#9B1227]">
      {children}
    </span>
  );
}

export default function MenuBuffetFroid({ openModal }) {
  const [activeFormula, setActiveFormula] = useState("classique");

  return (
    <>
      <SEO
        title="Buffet Froid"
        description="Buffet froid traiteur à Thiberville : deux formules Classique et Prestige avec salades, terrines, charcuteries, fromages et desserts pour vos réceptions."
        keywords="buffet froid, traiteur, Thiberville, réception, cocktail, Eure, Normandie"
      />
      <main className="bg-base-100">
        <MenuNavigation currentMenu="buffet-froid" />

        {/* Hero */}
        <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={photoPlat4}
            alt="Buffet Froid"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/15" />

          <div className="relative h-full container mx-auto px-6 flex items-end">
            <div className="w-full max-w-4xl pb-10 md:pb-14">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Buffet
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Réception
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Été
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-cormorant-sc text-white leading-tight">
                Buffet Froid
              </h1>
              <p className="mt-4 text-base md:text-lg font-inter text-white/90 leading-relaxed">
                Nos buffets froids sont parfaits pour vos événements estivaux. Une sélection de produits frais et de qualité présentés avec élégance.
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
          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="text-center">
                <p className="text-base md:text-lg font-inter leading-relaxed text-base-content mb-4">
                  <strong>Minimum 20 couverts.</strong> Chaque buffet peut être modifié selon vos souhaits et envies en discussion avec notre chef traiteur.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
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
                  <button
                    onClick={() => setActiveFormula("prestige")}
                    className={`inline-flex items-center rounded-full px-5 py-2.5 text-lg md:text-xl font-semibold transition-all ${
                      activeFormula === "prestige"
                        ? "bg-[#9B1227] text-white shadow-lg scale-105"
                        : "bg-[#9B1227]/20 text-[#9B1227] hover:bg-[#9B1227]/30"
                    }`}
                  >
                    Formule Prestige - 40 €
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Formule Classique */}
          {activeFormula === "classique" && (
            <>
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <SectionTitle color="primary" centered={false} className="mb-0">
                      Formule Classique
                    </SectionTitle>
                    <PricePill>30 € par personne</PricePill>
                  </div>

                  <div className="font-inter text-base space-y-2 text-base-content">
                    <p>• Saumon fumé citron vert</p>
                    <p>• Plateau charcuterie</p>
                    <p>• Terrine de viande</p>
                    <p>• Salade piémontaise</p>
                    <p>• Salade taboulé</p>
                    <p>• Rôti de porc</p>
                    <p>• Poulet froid</p>
                    <p>• Brie de Meaux</p>
                    <p>• Tarte de fruit du moment</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-base-300">
                    <h4 className="text-lg font-cormorant-sc text-[#9B1227] mb-3">
                      Accompagnements
                    </h4>
                    <div className="font-inter text-base text-base-content">
                      <p>Mayonnaise • Tartare • Choron • Moutarde • Beurre • Cornichons</p>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* Formule Prestige */}
          {activeFormula === "prestige" && (
            <>
              <div className="max-w-5xl mx-auto mb-10">
                <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <SectionTitle color="primary" centered={false} className="mb-0">
                      Formule Prestige
                    </SectionTitle>
                    <PricePill>40 € par personne</PricePill>
                  </div>

                  <div className="font-inter text-base space-y-2 text-base-content">
                    <p>• Saumon fumé artisanal</p>
                    <p>• Terrine gourmande au foie gras</p>
                    <p>• Jambon serrano et ses condiments</p>
                    <p>• Salade de penne thon/crevettes aneth</p>
                    <p>• Salade tomate feta concombre olive</p>
                    <p>• Jambon york sur présentoir</p>
                    <p>• Cœur de rumsteak sur présentoir</p>
                    <p>• Wok de légumes et grenailles</p>
                    <p>• Plateau de fromages normand</p>
                    <p>• Salade verte + vinaigrette</p>
                    <p>• Buffet de desserts à choisir dans notre menu réception</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-base-300">
                    <h4 className="text-lg font-cormorant-sc text-[#9B1227] mb-3">
                      Accompagnements
                    </h4>
                    <div className="font-inter text-base text-base-content">
                      <p>Mayonnaise • Choron • Tartare • Cornichons • Beurre • Moutarde</p>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          )}

          {/* CTA Final */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-base-200 border border-base-300 shadow-xl" padding="p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <p className="font-inter text-lg md:text-xl text-base-content">
                    <span className="font-semibold">
                      Contactez-nous pour personnaliser votre buffet.
                    </span>{" "}
                    Notre chef traiteur sera ravi d'adapter nos formules selon vos envies et vos besoins.
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
