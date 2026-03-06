import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";

// Mock de toutes les images partenaires
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
vi.mock("@/assets/images/leaf-icon.webp", () => ({ default: "/mock.webp" }));

// Mock des images spécial menus
vi.mock("@/assets/images/special-menus/MenuFete2025(1).webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/special-menus/MenuFete2025(2).webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/special-menus/MenuFete2025(3).webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/special-menus/CarteFete2025(1).webp", () => ({ default: "/mock.webp" }));
vi.mock("@/assets/images/special-menus/CarteFete2025(2).webp", () => ({ default: "/mock.webp" }));

import Home from "@/pages/Home";

describe("Home", () => {
  it("se monte sans crash", () => {
    const openModal = vi.fn();
    const { container } = renderWithProviders(<Home openModal={openModal} />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });
});
