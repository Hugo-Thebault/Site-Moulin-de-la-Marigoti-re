import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";
import MenuBrunch from "@/pages/MenuBrunch";

describe("MenuBrunch", () => {
  it("se monte sans crash", () => {
    const { container } = renderWithProviders(
      <MenuBrunch openModal={vi.fn()} />
    );
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("affiche le titre Brunch", () => {
    renderWithProviders(<MenuBrunch openModal={vi.fn()} />);
    expect(
      screen.getByRole("heading", { level: 1, name: /brunch/i })
    ).toBeInTheDocument();
  });

  it("affiche le prix de 32 €", () => {
    renderWithProviders(<MenuBrunch openModal={vi.fn()} />);
    expect(screen.getByText(/32\s*€/)).toBeInTheDocument();
  });
});
