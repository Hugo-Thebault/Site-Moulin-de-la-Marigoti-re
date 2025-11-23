import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour gérer le mode sombre avec persistance localStorage
 * @returns {object} État darkMode et fonction toggle
 */
export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleDarkMode };
}
