import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { renderWithProviders } from "../helpers";
import Menu39 from "@/pages/Menu39";

describe("Menu39", () => {
  it("se monte sans crash", () => {
    const { container } = renderWithProviders(<Menu39 openModal={vi.fn()} />);
    expect(container.querySelector("main")).toBeInTheDocument();
  });

  it("affiche le prix de 39 €", () => {
    renderWithProviders(<Menu39 openModal={vi.fn()} />);
    const matches = screen.getAllByText(/39\s*€/);
    expect(matches.length).toBeGreaterThan(0);
  });
});
