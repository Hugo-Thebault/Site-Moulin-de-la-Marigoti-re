export default function Location() {
  const address = "203 Rue des Métiers, Thiberville";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="py-16 px-6 gradient-primary">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-cormorant-sc text-center mb-12 text-white"
          style={{ fontVariant: "small-caps" }}
        >
          Où nous trouver ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Informations */}
          <div className="bg-white rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-cormorant-sc mb-4 text-base-content">
              Notre adresse
            </h3>
            <p className="text-lg font-inter mb-6 text-base-content">
              {address}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-primary text-white px-6 py-3 rounded font-inter font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 inline-block text-center"
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Google Maps Street View */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1762707542712!6m8!1m7!1sPg1Ob-I9rXiKEaFVbTwtmA!2m2!1d49.14361735574991!2d0.4512997314945483!3f165.09649350319629!4f-2.671555799747523!5f2.164487653884374"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Street View - Moulin de la Marigotière"
            />
          </div>
        </div>

        {/* Zone d'action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-cormorant-sc mb-6 text-white">
            Notre zone d'action :
          </h3>
          <p className="text-lg font-inter max-w-3xl mx-auto text-white">
            Nous intervenons dans un rayon de 50 km autour de Thiberville,
            couvrant notamment l'Eure et la région normande.
          </p>
        </div>
      </div>
    </section>
  );
}
