import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Copier les fichiers du dossier public
  publicDir: "public",
  build: {
    // Optimisations pour la production
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer React et React-DOM dans un chunk
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          helmet: ["react-helmet-async"],
        },
      },
    },
    // Utiliser esbuild pour la minification (plus rapide que terser)
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    // Taille des chunks
    chunkSizeWarningLimit: 500,
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
