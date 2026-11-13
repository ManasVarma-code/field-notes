import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/beenhere/Hero";
import { InvestigationChapter } from "@/components/beenhere/InvestigationChapter";
import { MindsetChapter } from "@/components/beenhere/MindsetChapter";
import { InvitationChapter } from "@/components/beenhere/InvitationChapter";
import { SiteFooter } from "@/components/beenhere/SiteFooter";

describe("BeenHere landing page chapters", () => {
  it("renders Chapter 01 (Hero) with editorial headline and actions", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/A better first commit\s*starts with research/i);
    expect(screen.getByText(/what exists, what’s worth reusing/i)).toBeInTheDocument();

    const getBtn = screen.getByRole("link", { name: /Install BeenHere/i });
    expect(getBtn).toHaveAttribute("href", "#invitation");

    const exploreBtn = screen.getByRole("link", { name: /Explore a research run/i });
    expect(exploreBtn).toHaveAttribute("href", "#investigation");
  });

  it("renders Chapter 02 (Investigation) with the signature ATS build decision", () => {
    render(<InvestigationChapter />);

    expect(screen.getByText(/A real research run/i)).toBeInTheDocument();
    expect(screen.getByText(/Build the review layer/i)).toBeInTheDocument();
    expect(screen.getByText(/Not another ATS/i)).toBeInTheDocument();
    expect(screen.queryByText(/months|benchmark/i)).not.toBeInTheDocument();
  });

  it("renders Chapter 03 (Mindset) with the four research lenses", () => {
    render(<MindsetChapter />);

    expect(screen.getByRole("heading", { name: /A trail from question to decision/i })).toBeInTheDocument();
    expect(screen.getByText(/Frame the question/i)).toBeInTheDocument();
    expect(screen.getByText(/Survey the terrain/i)).toBeInTheDocument();
    expect(screen.getByText(/Inspect foundations/i)).toBeInTheDocument();
    expect(screen.getByText(/Make the call/i)).toBeInTheDocument();
  });

  it("renders Chapter 04 (Invitation) with copyable terminal command", () => {
    render(<InvitationChapter />);

    expect(screen.getByRole("heading", { name: /Install once. Research on demand./i })).toBeInTheDocument();

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
