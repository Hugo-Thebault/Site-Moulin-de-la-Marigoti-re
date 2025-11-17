import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="gradient-primary text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="font-inter text-sm md:text-base">
          © {new Date().getFullYear()} Traiteur de Thiberville - François
          Duperrey. Tous droits réservés.
        </p>
        <Link
          to="/mentions-legales"
          className="inline-block mt-4 font-inter text-sm hover:text-gray-300 transition-colors underline"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
