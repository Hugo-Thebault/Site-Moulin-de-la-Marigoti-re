import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

describe("Card", () => {
  it("rend les enfants", () => {
    render(<Card>Contenu test</Card>);
    expect(screen.getByText("Contenu test")).toBeInTheDocument();
  });

  it("applique le padding par défaut", () => {
    const { container } = render(<Card>Test</Card>);
    expect(container.firstChild).toHaveClass("p-8");
  });

  it("accepte un padding personnalisé", () => {
    const { container } = render(<Card padding="p-4">Test</Card>);
    expect(container.firstChild).toHaveClass("p-4");
  });

  it("accepte des classes supplémentaires", () => {
    const { container } = render(<Card className="my-custom">Test</Card>);
    expect(container.firstChild).toHaveClass("my-custom");
  });
});

describe("SectionTitle", () => {
  it("rend le titre", () => {
    render(<SectionTitle>Mon Titre</SectionTitle>);
    expect(
      screen.getByRole("heading", { level: 2, name: "Mon Titre" })
    ).toBeInTheDocument();
  });

  it("applique la couleur primary par défaut", () => {
    render(<SectionTitle>Titre</SectionTitle>);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveClass("text-[#9B1227]");
  });

  it("applique la couleur white", () => {
    render(<SectionTitle color="white">Titre</SectionTitle>);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveClass("text-white");
  });

  it("affiche le sous-titre si fourni", () => {
    render(<SectionTitle subtitle="Sous-titre test">Titre</SectionTitle>);
    expect(screen.getByText("Sous-titre test")).toBeInTheDocument();
  });

  it("est centré par défaut", () => {
    const { container } = render(<SectionTitle>Titre</SectionTitle>);
    expect(container.firstChild).toHaveClass("text-center");
  });
});

describe("Button", () => {
  it("rend le texte", () => {
    render(<Button>Cliquer</Button>);
    expect(screen.getByText("Cliquer")).toBeInTheDocument();
  });

  it("appelle onClick au clic", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Cliquer</Button>);
    screen.getByText("Cliquer").click();
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("applique le variant primary par défaut", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("gradient-primary");
  });

  it("applique le variant secondary", () => {
    render(<Button variant="secondary">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("bg-white");
  });

  it("applique la taille lg", () => {
    render(<Button size="lg">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("px-10", "py-4");
  });
});
