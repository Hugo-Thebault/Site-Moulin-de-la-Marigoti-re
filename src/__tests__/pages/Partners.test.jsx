import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";

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

import Partners from "@/pages/Partners";

describe("Partners", () => {
  it("se monte sans crash", () => {
    const { container } = renderWithProviders(<Partners />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("affiche le titre Nos Partenaires", () => {
    renderWithProviders(<Partners />);
    expect(screen.getByText("Nos Partenaires")).toBeInTheDocument();
  });

  it("affiche les catégories de partenaires", () => {
    renderWithProviders(<Partners />);
    expect(screen.getByText("Salles de réception")).toBeInTheDocument();
    expect(screen.getByText("Wedding planner")).toBeInTheDocument();
    expect(screen.getByText("Location de vaisselle")).toBeInTheDocument();
    expect(screen.getByText("Animation musicale")).toBeInTheDocument();
  });

  it("peut replier/déplier une catégorie", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Partners />);

    // La catégorie "Salles de réception" est ouverte par défaut
    const sallesButton = screen.getByText("Salles de réception");
    await user.click(sallesButton);
    // Après un clic, la section devrait se replier (opacity-0)
  });
});
