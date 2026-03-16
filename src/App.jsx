import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { useModal } from "./hooks/useModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from "./components/CookieBanner";

// Lazy loading des pages
const Home = lazy(() => import("./pages/Home"));
const MenuReception = lazy(() => import("./pages/MenuReception"));
const MenuBrunch = lazy(() => import("./pages/MenuBrunch"));
const MenuDinatoire = lazy(() => import("./pages/MenuDinatoire"));
const MenuBuffetFroid = lazy(() => import("./pages/MenuBuffetFroid"));
const Menu39 = lazy(() => import("./pages/Menu39"));
const Partners = lazy(() => import("./pages/Partners"));
const Gallery = lazy(() => import("./pages/Gallery"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const Welcome = lazy(() => import("./pages/Welcome"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#9B1227]"></div>
        <p className="mt-4 text-base-content font-inter">Chargement...</p>
      </div>
    </div>
  );
}

function AppContent() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useModal();

  const location = useLocation();

  // Scroll vers le haut lors du changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isMenuPage = location.pathname.startsWith("/menus/");
  const isLandingPage = location.pathname === "/";

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <GoogleAnalytics />
      <CookieBanner />
      {!isLandingPage ? (
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          openModal={openModal}
          whiteHeader={isMenuPage}
        />
      ) : null}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/accueil" element={<Home openModal={openModal} />} />
          <Route
            path="/menus/reception"
            element={<MenuReception openModal={openModal} />}
          />
          <Route
            path="/menus/brunch"
            element={<MenuBrunch openModal={openModal} />}
          />
          <Route
            path="/menus/dinatoire"
            element={<MenuDinatoire openModal={openModal} />}
          />
          <Route
            path="/menus/buffet-froid"
            element={<MenuBuffetFroid openModal={openModal} />}
          />
          <Route
            path="/menus/menu-39"
            element={<Menu39 openModal={openModal} />}
          />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/galerie" element={<Gallery openModal={openModal} />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isLandingPage ? <Footer /> : null}
      {!isLandingPage ? (
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      ) : null}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
