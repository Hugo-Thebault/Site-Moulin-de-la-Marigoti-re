import { describe, it, expect, vi } from "vitest";

// Mock des images partenaires
vi.mock("@/assets/images/croix-au-liard.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/lorangerie.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/jonqueret.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/petite-haye.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/chateau-de-carsix.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/chateau-de-la-chapelle.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/mille-et-une-emotion.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/paula.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/loca.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/pascal-animations.jpg", () => ({ default: "/mock.webp" }));

import {
  partnersFullData,
  partnerCategories,
  getPartnersByCategory,
  partnersCarousel,
} from "@/data/partnersData";

describe("partnersData", () => {
  it("contient au moins 1 partenaire", () => {
    expect(partnersFullData.length).toBeGreaterThan(0);
  });

  it("chaque partenaire a un id, un nom et une image", () => {
    partnersFullData.forEach((partner) => {
      expect(partner).toHaveProperty("id");
      expect(partner).toHaveProperty("name");
      expect(partner).toHaveProperty("image");
      expect(partner).toHaveProperty("category");
    });
  });

  it("les ids sont uniques", () => {
    const ids = partnersFullData.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("les catégories sont définies", () => {
    expect(partnerCategories.length).toBeGreaterThan(0);
    partnerCategories.forEach((cat) => {
      expect(cat).toHaveProperty("id");
      expect(cat).toHaveProperty("title");
    });
  });

  it("chaque partenaire appartient à une catégorie existante", () => {
    const categoryIds = partnerCategories.map((c) => c.id);
    partnersFullData.forEach((partner) => {
      expect(categoryIds).toContain(partner.category);
    });
  });

  it("getPartnersByCategory filtre correctement", () => {
    const salles = getPartnersByCategory("salles");
    salles.forEach((partner) => {
      expect(partner.category).toBe("salles");
    });
  });

  it("partnersCarousel contient les bons champs", () => {
    partnersCarousel.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("image");
    });
  });

  it("contient la catégorie animation musicale", () => {
    const animation = partnerCategories.find((c) => c.id === "animation");
    expect(animation).toBeDefined();
    expect(animation.title).toBe("Animation musicale");
  });

  it("Pascal animations est dans la catégorie animation", () => {
    const animPartners = getPartnersByCategory("animation");
    expect(animPartners.some((p) => p.name === "Pascal animations")).toBe(true);
  });
});
