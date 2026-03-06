import { describe, it, expect, vi } from "vitest";

// Mock des images
vi.mock("@/assets/images/photo-plat.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/photo-plat-2.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/photo-plat-3.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/photo-plat-4.webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/leaf-icon.webp", () => ({ default: "/mock.webp" }));

describe("menusData", () => {
  it("les données de menus se chargent correctement", async () => {
    const mod = await import("@/data/menusData");
    expect(mod.menusData).toBeDefined();
    expect(Array.isArray(mod.menusData)).toBe(true);
    expect(mod.menusData.length).toBeGreaterThan(0);
  });

  it("chaque menu a un titre, une description et un lien", async () => {
    const { menusData } = await import("@/data/menusData");
    menusData.forEach((menu) => {
      expect(menu).toHaveProperty("title");
      expect(menu).toHaveProperty("description");
      expect(menu).toHaveProperty("link");
    });
  });
});
