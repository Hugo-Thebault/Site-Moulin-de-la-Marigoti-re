import MenuNavigation from "@/components/MenuNavigation";
import { commonImages } from "@/data/imagesData";
import SEO from "@/components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const { photoPlat, photoPlat2, photoPlat3, photoPlat4 } = commonImages;

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

        {/* Hero Section */}
        <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={photoPlat2}
            alt="Brunch"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/35 to-black/15" />

          <div className="relative h-full container mx-auto px-6 flex items-end">
            <div className="w-full max-w-4xl pb-10 md:pb-14">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Brunch
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Petit-déjeuner
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm font-semibold text-white ring-1 ring-white/20">
                  Convivialité
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-cormorant-sc text-white leading-tight">
                Formule Brunch
              </h1>
              <p className="mt-4 text-base md:text-lg font-inter text-white/90 leading-relaxed">
                Un moment convivial et gourmand pour vos événements en matinée. 
                Notre brunch allie saveurs sucrées et salées avec des produits frais et de saison.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={openModal} size="lg">
                  Demandez votre devis
                </Button>
                <a
                  href="#formule"
                  className="btn btn-outline btn-lg border-white/60 text-white hover:bg-white/10 hover:border-white"
                >
                  Voir la formule
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-14 md:py-16" id="formule">
          {/* Prix et introduction */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <p className="text-base md:text-lg font-inter leading-relaxed text-base-content">
                    Idéal pour les réceptions de mariage, événements familiaux ou professionnels, 
                    notre brunch offre une alternative raffinée et décontractée.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <span className="inline-flex items-center rounded-full bg-[#9B1227] px-5 py-2.5 text-xl font-semibold text-white">
                    32 €
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Boissons chaudes */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Boissons chaudes
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Café</p>
                <p>• Thé</p>
                <p>• Chocolat</p>
                <p>• Lait</p>
              </div>
            </Card>
          </div>

          {/* Jus de fruits */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Jus de fruits
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Jus d'orange</p>
                <p>• Jus de pomme</p>
              </div>
            </Card>
          </div>

          {/* Viennoiseries & Pains */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Viennoiseries & Pains
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Brioche</p>
                <p>• Mini viennoiseries</p>
                <p>• Baguettes</p>
              </div>
            </Card>
          </div>

          {/* Accompagnements sucrés */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Accompagnements sucrés
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Céréales</p>
                <p>• Miel</p>
                <p>• Nutella</p>
                <p>• Confiture</p>
                <p>• Beurre</p>
              </div>
            </Card>
          </div>

          {/* Plats chauds */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Plats chauds
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Oeufs brouillés</p>
                <p>• Bacon</p>
                <p>• Pancake</p>
              </div>
            </Card>
          </div>

          {/* Charcuterie */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Charcuterie
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Jambon blanc</p>
                <p>• Jambon sec</p>
              </div>
            </Card>
          </div>

          {/* Salades & accompagnements */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Salades & accompagnements
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Salade de tomate</p>
                <p>• Taboulé</p>
              </div>
            </Card>
          </div>

          {/* Produits laitiers */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Produits laitiers & Fromages
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Fromage blanc</p>
                <p>• Gruyère</p>
                <p>• Brie</p>
                <p>• Chèvre</p>
              </div>
            </Card>
          </div>

          {/* Desserts & Fruits */}
          <div className="max-w-5xl mx-auto mb-10">
            <Card className="bg-base-100 border border-base-300 shadow-xl" padding="p-6 md:p-8">
              <SectionTitle color="primary" centered={false} className="mb-6">
                Desserts & Fruits
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 font-inter text-base md:text-lg text-base-content">
                <p>• Tartelette de fruit</p>
                <p>• Corbeille de fruit</p>
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
