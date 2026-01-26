import { Link } from "react-router-dom";
import { resetCookieConsent } from "@/hooks/useCookieConsent";

export default function Footer() {
  return (
    <footer className="gradient-primary text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="font-inter text-sm md:text-base">
          © {new Date().getFullYear()} Traiteur de Thiberville - François
          Duperrey. Tous droits réservés.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Link
            to="/mentions-legales"
            className="font-inter text-sm hover:text-gray-300 transition-colors underline"
          >
            Mentions légales
          </Link>
          <button
            type="button"
            onClick={resetCookieConsent}
            className="font-inter text-sm hover:text-gray-300 transition-colors underline"
          >
            Gestion des cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
