import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";
import MenuBuffetFroid from "@/pages/MenuBuffetFroid";

describe("MenuBuffetFroid", () => {
  it("se monte sans crash", () => {
    const { container } = renderWithProviders(
      <MenuBuffetFroid openModal={vi.fn()} />
    );
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("affiche le titre Buffet Froid", () => {
    renderWithProviders(<MenuBuffetFroid openModal={vi.fn()} />);
    expect(
      screen.getByRole("heading", { level: 1, name: /buffet froid/i })
    ).toBeInTheDocument();
  });

  it("affiche la formule Classique par défaut", () => {
    renderWithProviders(<MenuBuffetFroid openModal={vi.fn()} />);
    expect(screen.getByText(/30\s*€\s*par personne/)).toBeInTheDocument();
  });

  it("bascule vers la formule Prestige au clic", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MenuBuffetFroid openModal={vi.fn()} />);

    const prestigeTab = screen.getByText(/Formule Prestige - 40/i);
    await user.click(prestigeTab);

    expect(screen.getByText(/40\s*€\s*par personne/)).toBeInTheDocument();
  });

  it("affiche le minimum de couverts", () => {
    renderWithProviders(<MenuBuffetFroid openModal={vi.fn()} />);
    expect(screen.getByText(/minimum 20 couverts/i)).toBeInTheDocument();
  });
});
