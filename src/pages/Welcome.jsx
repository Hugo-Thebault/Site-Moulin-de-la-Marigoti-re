import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Logo from "@/components/Logo";

export default function Welcome() {
  return (
    <>
      <SEO
        title="Bienvenue"
        description="Bienvenue à l'Odasiette."
      />
      <main className="min-h-screen gradient-primary text-white px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-3xl text-center">
          <div className="mx-auto mb-8 bg-white rounded-full w-36 h-36 md:w-48 md:h-48 shadow-lg flex items-center justify-center overflow-hidden">
            <Logo className="w-28 h-28 md:w-36 md:h-36 object-contain" />
          </div>

          <h1 className="font-cormorant-sc text-5xl md:text-7xl mb-6">
            Bienvenue à L'Odasiette
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 mb-10">
            Traiteur de Thiberville — François Duperrey
          </p>

          <div className="bg-white/10 border border-white/20 rounded-xl p-6 md:p-8 mb-10">
            <h2 className="font-cormorant-sc text-3xl mb-4">Coordonnées du chef</h2>
            <div className="font-inter text-base md:text-lg space-y-2">
              <p>
                Téléphone :{" "}
                <a
                  href="tel:+33603900537"
                  className="underline hover:opacity-80"
                >
                  +33 6 03 90 05 37
                </a>
              </p>
              <p>
                Email :{" "}
                <a
                  href="mailto:contact.moulin.marigotiere@gmail.com"
                  className="underline hover:opacity-80"
                >
                  contact.moulin.marigotiere@gmail.com
                </a>
              </p>
            </div>
          </div>

          <Link
            to="/accueil"
            className="inline-block bg-white text-[#9B1227] font-inter font-semibold px-10 py-4 rounded hover:scale-105 transition-all duration-300"
          >
            Entrer
          </Link>
        </div>
      </main>
    </>
  );
}
