import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";
import MenuDinatoire from "@/pages/MenuDinatoire";

describe("MenuDinatoire", () => {
  it("se monte sans crash", () => {
    const { container } = renderWithProviders(
      <MenuDinatoire openModal={vi.fn()} />
    );
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("affiche le titre Cocktail Dinatoire", () => {
    renderWithProviders(<MenuDinatoire openModal={vi.fn()} />);
    expect(
      screen.getByRole("heading", { level: 1, name: /cocktail dinatoire/i })
    ).toBeInTheDocument();
  });

  it("affiche la formule Prestige par défaut", () => {
    renderWithProviders(<MenuDinatoire openModal={vi.fn()} />);
    const matches = screen.getAllByText(/49\s*€/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("bascule vers la formule L'Audace au clic", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MenuDinatoire openModal={vi.fn()} />);

    const audaceTab = screen.getByText(/Formule L'Audace/i);
    await user.click(audaceTab);

    expect(screen.getByText(/39\s*€\s*\/\s*personne/)).toBeInTheDocument();
  });

  it("bascule vers la formule Classique au clic", async () => {
    const user = userEvent.setup();
    renderWithProviders(<MenuDinatoire openModal={vi.fn()} />);

    const classiqueTab = screen.getByText(/Formule Classique/i);
    await user.click(classiqueTab);

    expect(screen.getByText(/30\s*€\s*\/\s*personne/)).toBeInTheDocument();
  });
});
