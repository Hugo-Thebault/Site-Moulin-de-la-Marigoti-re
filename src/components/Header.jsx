import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header({
  toggleDarkMode,
  darkMode,
  openModal,
  whiteHeader = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <>
      <header
        className={`shadow-md ${
          whiteHeader ? "bg-base-100" : "gradient-primary"
        }`}
      >
        {/* Ligne unique : Menu hamburger, Textes + Logo + Textes, Boutons */}
        <div className="py-4 md:py-6 px-2 md:px-4 lg:px-6">
          <div className="relative flex items-center justify-between w-full">
            {/* Menu Hamburger + Icône maison */}
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
              {/* Menu Hamburger */}
              <button
                onClick={toggleMenu}
                className={`p-1 md:p-2 rounded transition ${
                  whiteHeader ? "hover:bg-base-200" : "hover:bg-white/10"
                }`}
                aria-label="Menu"
              >
                <svg
                  className={`w-6 h-6 md:w-10 md:h-10 ${
                    whiteHeader ? "icon-gradient" : "text-white"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Icône maison - retour à l'accueil */}
              <Link
                to="/"
                className={`p-1 md:p-2 rounded transition ${
                  whiteHeader ? "hover:bg-base-200" : "hover:bg-white/10"
                }`}
                aria-label="Retour à l'accueil"
              >
                <svg
                  className={`w-6 h-6 md:w-10 md:h-10 ${
                    whiteHeader ? "icon-gradient" : "text-white"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </div>

            {/* Centre : Moulin + Logo + Traiteur */}
            <div className="flex items-center gap-2 md:gap-4 absolute left-1/2 transform -translate-x-1/2">
              <div className={`hidden lg:flex flex-col items-end text-right`}>
                <span
                  className={`font-cormorant-sc text-xl md:text-2xl whitespace-nowrap ${
                    whiteHeader ? "text-base-content" : "text-white"
                  }`}
                  style={{ fontVariant: "small-caps" }}
                >
                  Moulin de la Marigotière
                </span>
                <span
                  className={`font-cormorant-sc text-xl md:text-2xl ${
                    whiteHeader ? "text-base-content" : "text-white"
                  }`}
                  style={{ fontVariant: "small-caps" }}
                >
                  François Duperrey
                </span>
              </div>
              <Link to="/" className="flex items-center">
                {whiteHeader ? (
                  <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-lg flex items-center justify-center overflow-hidden border-2 border-base-300">
                    <Logo className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain" />
                  </div>
                ) : (
                  <div className="bg-white rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-lg flex items-center justify-center overflow-hidden">
                    <Logo className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain" />
                  </div>
                )}
              </Link>
              <div className={`hidden lg:flex flex-col items-start text-left`}>
                <h1
                  className={`font-cormorant-sc text-xl md:text-2xl ${
                    whiteHeader ? "text-base-content" : "text-white"
                  }`}
                  style={{ fontVariant: "small-caps" }}
                >
                  Traiteur de Thiberville
                </h1>
              </div>
            </div>

            {/* Boutons à droite */}
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
              {/* Bouton/Icône Nous contacter */}
              <button
                onClick={openModal}
                className={`p-2 md:px-6 md:py-2.5 rounded font-inter font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 ${
                  whiteHeader
                    ? "gradient-primary text-white"
                    : "bg-white text-[#9B1227]"
                }`}
                aria-label="Nous contacter"
              >
                {/* Icône enveloppe sur mobile */}
                <svg
                  className="w-6 h-6 md:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {/* Texte sur desktop */}
                <span className="hidden md:inline">Nous contacter</span>
              </button>

              {/* Toggle Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className={`p-1 md:p-2 rounded transition ${
                  whiteHeader ? "hover:bg-base-200" : "hover:bg-white/10"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg
                    className={`w-6 h-6 md:w-10 md:h-10 ${
                      whiteHeader ? "icon-gradient" : "text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg
                    className={`w-6 h-6 md:w-10 md:h-10 ${
                      whiteHeader ? "icon-gradient" : "text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile slide-in avec animation */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />
          <div className="fixed top-0 left-0 h-full w-80 gradient-primary text-white z-50 slide-in-left overflow-y-auto">
            <div className="p-6">
              <button
                onClick={closeMenu}
                className="mb-8 p-2 hover:bg-white/10 rounded transition"
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

              <nav className="space-y-4">
                {/* Accueil */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block font-cormorant-infant text-xl py-2 hover:text-gray-200 transition"
                >
                  Accueil
                </Link>

                {/* Nos menus avec sous-menu */}
                <div>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="w-full text-left font-cormorant-infant text-xl py-2 flex items-center justify-between hover:text-gray-200 transition"
                  >
                    Nos menus
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        submenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {submenuOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link
                        to="/menus/reception"
                        onClick={closeMenu}
                        className="block py-2 hover:text-gray-200 transition"
                      >
                        Réception
                      </Link>
                      <Link
                        to="/menus/brunch"
                        onClick={closeMenu}
                        className="block py-2 hover:text-gray-200 transition"
                      >
                        Brunch
                      </Link>
                      <Link
                        to="/menus/dinatoire"
                        onClick={closeMenu}
                        className="block py-2 hover:text-gray-200 transition"
                      >
                        Dinatoire
                      </Link>
                      <Link
                        to="/menus/buffet-froid"
                        onClick={closeMenu}
                        className="block py-2 hover:text-gray-200 transition"
                      >
                        Buffet froid
                      </Link>
                      <Link
                        to="/menus/menu-39"
                        onClick={closeMenu}
                        className="block py-2 hover:text-gray-200 transition"
                      >
                        Notre menu à 39€
                      </Link>
                    </div>
                  )}
                </div>

                {/* Nos partenaires */}
                <Link
                  to="/partenaires"
                  onClick={closeMenu}
                  className="block font-cormorant-infant text-xl py-2 hover:text-gray-200 transition"
                >
                  Nos partenaires
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
