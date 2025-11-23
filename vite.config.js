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
  build: {
    // Optimisations pour la production
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer React et React-DOM dans un chunk
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
    // Compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
      },
    },
    // Taille des chunks
    chunkSizeWarningLimit: 1000,
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
