import { Check, HelpCircle, Minus, X } from "lucide-react";

interface ComparisonRow {
  capability: string;
  githubSearch: string;
  githubNote: string;
  beenHere: string;
  beenHereNote: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    capability: "Discovery Scope",
    githubSearch: "Keyword matching across public repos",
    githubNote: "Finds repositories matching exact string queries in code and readmes.",
    beenHere: "Multi-source synthesis across products, OSS, papers, & adjacent fields",
    beenHereNote: "Explores products, academic research, and adjacent domain architectures.",
  },
  {
    capability: "Cross-Industry Analogies",
    githubSearch: "Manual query iteration only",
    githubNote: "Limited to what terms the developer already knows to search for.",
    beenHere: "Systematic cross-domain pattern matching",
    beenHereNote: "Bridges problems to established patterns in neighboring technical disciplines.",
  },
  {
    capability: "License & Legal Auditing",
    githubSearch: "Repository-level badge display",
    githubNote: "Shows declared root license; misses sub-dependency and copyleft conflicts.",
    beenHere: "Proactive dependency & AGPL/dual-license checkpoints",
    beenHereNote: "Flags AGPL, copyleft, and commercial restriction risks (e.g. PyMuPDF).",
  },
  {
    capability: "Reusability Evaluation",
    githubSearch: "Stars, forks, and last commit date",
    githubNote: "Raw popularity metrics without architecture fit or breaking change review.",
    beenHere: "Maintenance velocity, issue health, & integration friction",
    beenHereNote: "Evaluates whether adopting a repo saves time vs maintaining a fork.",
  },
  {
    capability: "Output & Deliverable",
    githubSearch: "Unranked list of repository links",
    githubNote: "Developer must manually inspect dozens of repos and synthesize findings.",
    beenHere: "Structured research dossier with build posture recommendation",
    beenHereNote: "Delivers an actionable direction: Adopt, Fork, Integrate, Extend, or Build.",
  },
  {
    capability: "Where It Runs",
    githubSearch: "Web browser tab or GitHub CLI",
    githubNote: "Separate context outside your coding environment.",
    beenHere: "Directly inside OpenAI Codex or Claude Code",
    beenHereNote: "Operates natively within the agent workspace where code is drafted.",
  },
];

export function ComparisonSection() {
  return (
    <section className="bh-case-section" id="comparison" aria-labelledby="comparison-title">
      <div className="bh-section-label">
        <span>03</span>
        <span>THE COMPARISON</span>
        <span className="bh-label-line" />
        <span>CODE SEARCH VS. RESEARCH DOSSIER</span>
      </div>

      <div className="py-6">
        <span className="bh-overline font-mono text-[10px] uppercase text-primary">
          PERSPECTIVE
        </span>
        <h2
          id="comparison-title"
          className="font-editorial text-3xl sm:text-4xl text-foreground mt-2"
        >
          Why not just search GitHub?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Code search is essential for finding implementations once you know what you are looking
          for. BeenHere operates one level higher: it helps you decide{" "}
          <em>what is worth building</em>, evaluates architectural reusability, and warns you about
          licensing hazards before code is written.
        </p>
      </div>

      <div className="border border-border bg-card rounded-xs overflow-hidden mt-4">
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border bg-muted/40 font-mono text-[11px] text-foreground">
          <div className="p-3.5 md:col-span-4 font-semibold text-muted-foreground">
            EVALUATION DIMENSION
          </div>
          <div className="p-3.5 md:col-span-4 border-t md:border-t-0 md:border-l border-border text-muted-foreground">
            STANDARD CODE SEARCH (e.g. GitHub)
          </div>
          <div className="p-3.5 md:col-span-4 border-t md:border-t-0 md:border-l border-border text-primary font-bold">
            BEENHERE AGENT SKILL
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-border text-xs">
          {COMPARISON_DATA.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 p-3.5 md:p-4 hover:bg-background/40 transition-colors gap-2 md:gap-0"
            >
              <div className="md:col-span-4 pr-3">
                <span className="font-mono text-[10px] text-primary block md:inline md:mr-2">
                  0{idx + 1}
                </span>
                <strong className="text-foreground font-semibold">{row.capability}</strong>
              </div>

              <div className="md:col-span-4 md:border-l md:border-border md:px-4 text-foreground/80 space-y-1">
                <div className="font-medium">{row.githubSearch}</div>
                <div className="font-mono text-[10px] text-muted-foreground leading-normal">
                  {row.githubNote}
                </div>
              </div>

              <div className="md:col-span-4 md:border-l md:border-border md:pl-4 text-foreground/90 space-y-1">
                <div className="font-semibold text-foreground flex items-start gap-1.5">
                  <Check className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{row.beenHere}</span>
                </div>
                <div className="font-mono text-[10px] text-muted-foreground leading-normal">
                  {row.beenHereNote}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grounding note */}
        <div className="p-4 bg-muted/20 border-t border-border font-mono text-[10px] text-muted-foreground flex items-center justify-between flex-wrap gap-2">
          <span>
            NOTE: BeenHere complements existing developer search tools—it does not replace
            source-level inspection.
          </span>
          <span className="text-primary font-semibold">INVESTIGATE BEFORE COMMITTING</span>
        </div>
      </div>
    </section>
  );
}
