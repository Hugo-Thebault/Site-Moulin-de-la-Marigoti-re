import { commonImages } from "../data/imagesData";

export default function Hero() {
  return (
    <section className="py-12 md:py-16 px-6 bg-base-100">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-cormorant-sc text-center mb-12 text-base-content"
          style={{ fontVariant: "small-caps" }}
        >
          François Duperrey
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          {/* Photo du chef */}
          <div className="w-full md:w-2/5 shrink-0">
            <div className="rounded-lg overflow-hidden shadow-xl max-w-[200px] md:max-w-[250px] mx-auto">
              <img
                src={commonImages.photoChef}
                alt="François Duperrey - Chef"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texte avec police Inter */}
          <div className="w-full md:w-3/5 space-y-5">
            <p className="text-base md:text-lg font-inter leading-relaxed text-base-content">
              Le maitre restaurateur François Duperrey, traiteur depuis
              maintenant 23 ans serait ravis de vous aider dans l'élaboration
              d'un menu pour vos festivités (mariage, anniversaire, séminaire)
            </p>
            <p className="text-base md:text-lg font-inter leading-relaxed text-base-content">
              Nous pouvons vous établir un devis gratuitement et rapidement.
            </p>
            <p className="text-base md:text-lg font-inter leading-relaxed text-base-content">
              Nous pouvons également nous rencontrer pour étudier ensemble tous
              les détails de votre projet et faire une dégustation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
