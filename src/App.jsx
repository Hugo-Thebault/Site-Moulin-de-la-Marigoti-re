import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import Home from "./pages/Home";
import MenuReception from "./pages/MenuReception";
import MenuBrunch from "./pages/MenuBrunch";
import MenuDinatoire from "./pages/MenuDinatoire";
import MenuBuffetFroid from "./pages/MenuBuffetFroid";
import Menu39 from "./pages/Menu39";
import Partners from "./pages/Partners";
import MentionsLegales from "./pages/MentionsLegales";

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const location = useLocation();
  // Scroll vers le haut lors du changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isMenuPage = location.pathname.startsWith("/menus/");

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        openModal={openModal}
        whiteHeader={isMenuPage}
      />
      <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
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
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
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
