import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { describe, it, expect, vi } from "vitest";

// Helper pour wrapper les composants avec Router + Helmet
function renderWithProviders(ui, { route = "/" } = {}) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </HelmetProvider>
  );
}

// Mock des images (jsdom ne charge pas les vrais fichiers)
vi.mock("@/data/imagesData", () => ({
  commonImages: {
    photoPlat: "/mock-image.webp",
    photoPlat2: "/mock-image.webp",
    photoPlat3: "/mock-image.webp",
    photoPlat4: "/mock-image.webp",
    leafIcon: "/mock-icon.webp",
  },
}));

vi.mock("@/assets/images/Buffet4.optimized.webp", () => ({
  default: "/mock-buffet.webp",
}));
vi.mock("@/assets/images/Dinatoire1.webp", () => ({
  default: "/mock-dinatoire.webp",
}));
vi.mock("@/assets/images/Entree3.jpeg", () => ({
  default: "/mock-entree.webp",
}));
vi.mock("@/assets/images/photo-plat-4.webp", () => ({
  default: "/mock-plat4.webp",
}));
vi.mock("@/assets/images/Localisation.webp", () => ({
  default: "/mock-loc.webp",
}));
vi.mock("@/assets/images/Logo.sm.webp", () => ({
  default: "/mock-logo.webp",
}));

export { renderWithProviders };
