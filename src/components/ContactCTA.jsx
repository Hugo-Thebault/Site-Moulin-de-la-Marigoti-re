export default function ContactCTA({ openModal }) {
  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="container mx-auto max-w-2xl">
        <div className="gradient-primary rounded-2xl p-12 text-center shadow-xl">
          <h2
            className="text-4xl md:text-5xl font-cormorant-sc text-white mb-6"
            style={{ fontVariant: "small-caps" }}
          >
            Contactez nous
          </h2>
          <p className="text-lg md:text-xl font-inter text-white max-w-3xl mx-auto mb-8 leading-relaxed">
            Besoin d'un traiteur pour un évènement, n'attendez pas demander
            votre devis par mail en cliquant sur le bouton ci-dessous.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-[#9B1227] px-8 py-4 rounded font-medium text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Demandez votre devis
          </button>
        </div>
      </div>
    </section>
  );
}
