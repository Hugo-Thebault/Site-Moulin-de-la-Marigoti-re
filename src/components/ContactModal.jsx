import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement backend logic
    console.log("Form submitted:", formData);
    alert(
      "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais."
    );
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          Demandez votre devis
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-base-content"
            >
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-base-300 rounded focus:border-[#9B1227] focus:outline-none bg-base-100 text-base-content transition-colors"
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-base-content"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-base-300 rounded focus:border-[#9B1227] focus:outline-none bg-base-100 text-base-content transition-colors"
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 text-base-content"
            >
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9\s\.\-\+\(\)]+"
              className="w-full px-4 py-2 border-2 border-base-300 rounded focus:border-[#9B1227] focus:outline-none bg-base-100 text-base-content transition-colors"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium mb-2 text-base-content"
            >
              Adresse postale
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-base-300 rounded focus:border-[#9B1227] focus:outline-none bg-base-100 text-base-content transition-colors"
              placeholder="123 Rue de la République, 27000 Évreux"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-base-content"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border-2 border-base-300 rounded focus:border-[#9B1227] focus:outline-none resize-none bg-base-100 text-base-content transition-colors"
              placeholder="Décrivez votre événement, le nombre de personnes, la date souhaitée..."
            />
          </div>

          <div className="text-xs text-base-content/60 mb-4">
            <span className="text-red-500">*</span> Champs obligatoires
          </div>

          <button
            type="submit"
            className="w-full gradient-primary text-white px-6 py-3 rounded font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  );
}
