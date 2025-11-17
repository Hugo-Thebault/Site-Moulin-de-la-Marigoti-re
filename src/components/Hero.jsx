import photoChef from "../assets/images/photo-chef.jpg";

export default function Hero() {
  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Photo du chef */}
          <div className="w-full lg:w-1/4">
            <img
              src={photoChef}
              alt="Chef François Duperrey"
              className="rounded-lg shadow-xl w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Texte avec police Inter */}
          <div className="w-full lg:w-3/5 space-y-5">
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
