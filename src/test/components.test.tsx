import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/beenhere/Hero";
import { InvestigationChapter } from "@/components/beenhere/InvestigationChapter";
import { MindsetChapter } from "@/components/beenhere/MindsetChapter";
import { InvitationChapter } from "@/components/beenhere/InvitationChapter";
import { SiteFooter } from "@/components/beenhere/SiteFooter";

describe("BeenHere Redesign 2.0 Chapters", () => {
  it("renders Chapter 01 (Hero) with editorial headline and actions", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Before you build it/i);
    expect(screen.getByText(/Someone solved part of this already/i)).toBeInTheDocument();

    const getBtn = screen.getByRole("link", { name: /Get BeenHere/i });
    expect(getBtn).toHaveAttribute("href", "#invitation");

    const exploreBtn = screen.getByRole("link", { name: /Explore the Research/i });
    expect(exploreBtn).toHaveAttribute("href", "#investigation");
  });

  it("renders Chapter 02 (Investigation) with the signature ATS build decision", () => {
    render(<InvestigationChapter />);

    expect(screen.getByText(/The Investigation/i)).toBeInTheDocument();
    expect(screen.getByText(/Build the review layer/i)).toBeInTheDocument();
    expect(screen.getByText(/Not another ATS/i)).toBeInTheDocument();
  });

  it("renders Chapter 03 (Mindset) with the four research lenses", () => {
    render(<MindsetChapter />);

    expect(screen.getByText(/The Mindset/i)).toBeInTheDocument();
    expect(screen.getByText(/Find the precedents/i)).toBeInTheDocument();
    expect(screen.getByText(/Inspect what can be reused/i)).toBeInTheDocument();
    expect(screen.getByText(/Look beyond the obvious category/i)).toBeInTheDocument();
    expect(screen.getByText(/Decide what actually needs building/i)).toBeInTheDocument();
  });

  it("renders Chapter 04 (Invitation) with copyable terminal command", () => {
    render(<InvitationChapter />);

    expect(screen.getByText(/Research first/i)).toBeInTheDocument();
    expect(screen.getByText(/Build better/i)).toBeInTheDocument();

    const cmd = screen.getByText("npx skills add manasvignesh/BeenHere");
    expect(cmd).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /Copy install command/i });
    expect(copyBtn).toBeInTheDocument();
  });

  it("renders SiteFooter with verified GitHub and documentation links", () => {
    render(<SiteFooter />);

    const ghLink = screen.getByRole("link", { name: /GitHub/i });
    expect(ghLink).toHaveAttribute("href", "https://github.com/manasvignesh/BeenHere");
  });
});
