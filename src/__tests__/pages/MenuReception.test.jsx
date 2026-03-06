import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";
import MenuReception from "@/pages/MenuReception";

describe("MenuReception", () => {
  it("se monte sans crash", () => {
    const openModal = vi.fn();
    const { container } = renderWithProviders(
      <MenuReception openModal={openModal} />
    );
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("affiche le titre de la page", () => {
    renderWithProviders(<MenuReception openModal={vi.fn()} />);
    expect(screen.getByText("Menu Réception")).toBeInTheDocument();
  });

  it("affiche les sections entrées et plats", () => {
    renderWithProviders(<MenuReception openModal={vi.fn()} />);
    expect(screen.getByText("Entrées")).toBeInTheDocument();
    expect(screen.getByText("Plat principal")).toBeInTheDocument();
  });

  it("affiche les prix mis à jour des viandes", () => {
    renderWithProviders(<MenuReception openModal={vi.fn()} />);
    const prices = screen.getAllByText("27 €");
    expect(prices.length).toBeGreaterThan(0); // tournedos, pintade, pigeon
  });

  it("contient le bouton de devis", () => {
    const openModal = vi.fn();
    renderWithProviders(<MenuReception openModal={openModal} />);
    const buttons = screen.getAllByText("Demandez votre devis");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
