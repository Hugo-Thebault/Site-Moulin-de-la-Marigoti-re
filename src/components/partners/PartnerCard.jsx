/**
 * Composant pour afficher une carte partenaire
 */
export default function PartnerCard({ partner }) {
  const CardContent = () => (
    <>
      <div className="relative">
        <img
          src={partner.image}
          alt={partner.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white font-cormorant-sc text-2xl p-6 w-full">
            {partner.name}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="font-inter text-base text-gray-700 mb-4">
          {partner.description}
        </p>
        {partner.location && (
          <p className="font-inter text-sm text-gray-600 mb-2">
            📍 {partner.location}
          </p>
        )}
        {partner.phone && (
          <p className="font-inter text-sm text-gray-600 mb-4">
            📞 {partner.phone}
          </p>
        )}
        {partner.url ? (
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#9B1227] font-medium group-hover:underline"
          >
            Visiter le site →
          </a>
        ) : (
          <p className="text-gray-500 italic text-sm">
            Contactez-nous pour plus d'informations
          </p>
        )}
      </div>
    </>
  );

  const baseClasses =
    "bg-white rounded-lg shadow-xl overflow-hidden hover:scale-102 hover:shadow-2xl transition-all duration-300 group";

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className={baseClasses}>
      <CardContent />
    </div>
  );
}
