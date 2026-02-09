import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page introuvable"
        description="La page que vous cherchez n'existe pas ou a été déplacée."
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-cormorant-sc text-[#9B1227] mb-4">
            404
          </h1>
          <p className="text-xl text-base-content mb-8">
            Oups ! Cette page n'existe pas.
          </p>
          <Link
            to="/"
            className="inline-block gradient-primary text-white px-8 py-3 rounded font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
}
