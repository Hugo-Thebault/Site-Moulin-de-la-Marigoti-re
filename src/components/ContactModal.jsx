export default function ContactModal({ isOpen, onClose }) {
  const chefEmail = "contact.moulin.marigotiere@gmail.com";
  const chefPhone = "+33 6 03 90 05 37";

  const mailSubject = "Demande de devis - L'Odasiette";
  const mailBody = [
    "Nom :",
    "Prénom :",
    "",
    "Description de votre demande :",
    "",
  ].join("\n");

  const mailtoHref = `mailto:${chefEmail}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-base-100 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-base-content/50 hover:text-base-content transition-colors z-10"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h3 className="text-3xl font-cormorant-sc text-[#9B1227] mb-6">
          Contactez le chef
        </h3>

        <div className="space-y-5">
          <div className="rounded-lg border border-base-300 bg-base-200/40 p-4 text-sm text-base-content">
            <p className="font-semibold mb-2">Dans votre email, merci d'indiquer :</p>
            <ul className="list-disc list-inside space-y-1 text-base-content/80">
              <li>Votre nom</li>
              <li>Votre prénom</li>
              <li>Une description de votre besoin</li>
            </ul>
          </div>

          <div className="rounded-lg border border-base-300 bg-base-100 p-4 text-sm">
            <p className="font-semibold text-base-content mb-2">Coordonnées du chef</p>
            <p className="text-base-content/80">
              Téléphone :{" "}
              <a href="tel:+33603900537" className="underline hover:opacity-80">
                {chefPhone}
              </a>
            </p>
            <p className="text-base-content/80 mt-1">
              Email :{" "}
              <a href={`mailto:${chefEmail}`} className="underline hover:opacity-80">
                {chefEmail}
              </a>
            </p>
          </div>

          <a
            href={mailtoHref}
            className="block w-full text-center gradient-primary text-white px-6 py-3 rounded font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Ouvrir mon application mail
          </a>
        </div>
      </div>
    </div>
  );
}
