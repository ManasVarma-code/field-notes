import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  FileText,
  Scale,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { SiteHeader } from "@/components/beenhere/SiteHeader";
import { SiteFooter } from "@/components/beenhere/SiteFooter";
import { copyTextToClipboard } from "@/lib/clipboard";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: `Documentation — ${SITE_CONFIG.name}` },
      {
        name: "description",
        content:
          "Official technical documentation for BeenHere: Codex and Claude Code installation, quick vs deep modes, dossier interpretation, and licensing checkpoints.",
      },
      { property: "og:title", content: `Documentation — ${SITE_CONFIG.name}` },
      {
        property: "og:description",
        content:
          "Official technical documentation for BeenHere: installation, research modes, and architectural output interpretation.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "/og-image.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `Documentation — ${SITE_CONFIG.name}` },
      {
        name: "twitter:description",
        content:
          "Official technical documentation for BeenHere: installation, research modes, and architectural output interpretation.",
      },
    ],
  }),
  component: DocsPage,
});

type DocSectionId =
  | "getting-started"
  | "codex-install"
  | "claude-install"
  | "research-modes"
  | "reading-outputs"
  | "why-not-github"
  | "case-offline-notes"
  | "licensing-limits"
  | "network-troubleshooting"
  | "contributing";

interface DocNavEntry {
  id: DocSectionId;
  label: string;
  category: "Setup" | "Methodology" | "Archives & Reference";
}

const DOC_NAV: DocNavEntry[] = [
  { id: "getting-started", label: "Getting Started", category: "Setup" },
  { id: "codex-install", label: "Codex Installation", category: "Setup" },
  { id: "claude-install", label: "Claude Code Integration", category: "Setup" },
  { id: "research-modes", label: "Quick vs. Deep Modes", category: "Methodology" },
  { id: "reading-outputs", label: "Understanding Dossiers", category: "Methodology" },
  { id: "why-not-github", label: "Why Not Just Search GitHub?", category: "Methodology" },
  { id: "case-offline-notes", label: "Case File: Offline Notes", category: "Archives & Reference" },
  { id: "licensing-limits", label: "Licensing Limitations", category: "Archives & Reference" },
  { id: "network-troubleshooting", label: "Network & Sandbox", category: "Archives & Reference" },
  { id: "contributing", label: "Contributing & Testing", category: "Archives & Reference" },
];

function DocsPage() {
  const [activeSection, setActiveSection] = useState<DocSectionId>("getting-started");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  async function handleCopy(text: string) {
    const ok = await copyTextToClipboard(text);
    if (ok) {
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  }

  return (
    <div className="bh-page min-h-screen flex flex-col">
      <SiteHeader />

      <main id="main-content" className="flex-1 py-8">
        {/* Breadcrumbs & Header */}
        <div className="pb-6 border-b border-border">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="size-3" /> Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Documentation</span>
            <span>/</span>
            <span className="text-primary">
              {DOC_NAV.find((n) => n.id === activeSection)?.label}
            </span>
          </nav>

          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                FIELD GUIDE TECHNICAL MANUAL · {SITE_CONFIG.version}
              </span>
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground mt-2 break-words">
                BeenHere Documentation
              </h1>
            </div>
            <a
              href={SITE_CONFIG.links.docs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
            >
              Raw Documentation on GitHub <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Documentation Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Sidebar Nav */}
          <aside
            className="lg:col-span-3 lg:border-r lg:border-border lg:pr-6"
            aria-label="Documentation navigation"
          >
            <div className="sticky top-24 space-y-6">
              {["Setup", "Methodology", "Archives & Reference"].map((category) => (
                <div key={category} className="space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground tracking-wider block px-2 mb-1">
                    {category}
                  </span>
                  {DOC_NAV.filter((entry) => entry.category === category).map((entry) => {
                    const isActive = activeSection === entry.id;
                    return (
                      <button
                        key={entry.id}
                        type="button"
                        onClick={() => setActiveSection(entry.id)}
                        className={`w-full text-left px-3 py-1.5 text-xs rounded-xs font-mono transition-colors flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-primary text-primary-foreground font-bold shadow-xs"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span className="truncate">{entry.label}</span>
                        {isActive && (
                          <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}

              <div className="pt-4 border-t border-border font-mono text-[10px] text-muted-foreground space-y-1">
                <div>REPO: manasvignesh/BeenHere</div>
                <div>LICENSE: MIT</div>
                <div>CI: 18/18 JOBS PASSING</div>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <article className="lg:col-span-9 max-w-3xl space-y-8 animate-in fade-in duration-150">
            {activeSection === "getting-started" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 01
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">Getting Started</h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    BeenHere is an open-source Agent Skill designed to run directly inside supported
                    coding agents. Before writing custom code for a new product feature, BeenHere
                    surveys existing implementations, audits reusable open-source repositories,
                    uncovers cross-industry patterns, and highlights licensing risks.
                  </p>
                </div>

                <div className="border border-border bg-card p-4 rounded-xs space-y-3">
                  <h3 className="font-mono text-xs font-bold text-foreground uppercase">
                    Core Operational Philosophy
                  </h3>
                  <ul className="space-y-2 text-xs text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span>
                        <strong>Investigate before committing:</strong> Understand the problem
                        domain and existing prior art before drafting architecture.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span>
                        <strong>Read-only by default:</strong> Analyzes public sources and
                        repository trees; does not execute untrusted third-party code.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span>
                        <strong>Zero mandatory subscriptions:</strong> No proprietary BeenHere API
                        keys or hosted backends.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-editorial text-xl text-foreground">Quickstart</h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Run the universal skill installer in your terminal:
                  </p>
                  <div className="bg-card p-3 border border-border rounded-xs flex items-center justify-between font-mono text-xs">
                    <code>{SITE_CONFIG.installCommands.universal}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.installCommands.universal)}
                      className="p-1 hover:text-primary transition-colors"
                      aria-label="Copy universal install command"
                    >
                      {copiedCode === SITE_CONFIG.installCommands.universal ? (
                        <Check className="size-4 text-green-600" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "codex-install" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 02
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    OpenAI Codex Installation
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    BeenHere has been verified end-to-end inside OpenAI Codex. The skill registers
                    as a natural command extension, allowing you to trigger deep research runs
                    directly from your Codex conversation prompt.
                  </p>
                </div>

                <div className="p-4 border border-primary/40 bg-primary/5 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
                    <Check className="size-4" /> VERIFIED MILESTONE
                  </div>
                  <p className="text-xs text-foreground/90">
                    Public GitHub installation and runtime execution have been verified on OpenAI
                    Codex. Review the official execution log in{" "}
                    <a
                      href={SITE_CONFIG.links.codexTestEvidence}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline font-mono"
                    >
                      docs/CODEX_END_TO_END_TEST.md
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                    1. Install Command
                  </h3>
                  <div className="bg-card p-3 border border-border rounded-xs flex items-center justify-between font-mono text-xs">
                    <code>{SITE_CONFIG.installCommands.codex}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.installCommands.codex)}
                      className="p-1 hover:text-primary transition-colors"
                      aria-label="Copy Codex install command"
                    >
                      {copiedCode === SITE_CONFIG.installCommands.codex ? (
                        <Check className="size-4 text-green-600" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                    2. Invocation in Codex
                  </h3>
                  <div className="bg-card p-3 border border-border rounded-xs flex items-center justify-between font-mono text-xs">
                    <code>{SITE_CONFIG.invocations.codex}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.invocations.codex)}
                      className="p-1 hover:text-primary transition-colors"
                      aria-label="Copy Codex invocation"
                    >
                      {copiedCode === SITE_CONFIG.invocations.codex ? (
                        <Check className="size-4 text-green-600" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "claude-install" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 03
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Claude Code Integration
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    BeenHere is structurally prepared for Claude Code. The repository structure,
                    manifest schemas, and instruction prompts adhere to the standard agent skill
                    specification.
                  </p>
                </div>

                <div className="p-4 border border-border bg-card rounded-xs space-y-2">
                  <div className="font-mono text-xs text-muted-foreground font-bold uppercase">
                    INTEGRATION STATUS
                  </div>
                  <p className="text-xs text-foreground/80">
                    Structural compatibility is verified. Live authenticated runtime execution in
                    Claude Code is scheduled for final verification in an upcoming patch release.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                    CLI Install
                  </h3>
                  <div className="bg-card p-3 border border-border rounded-xs flex items-center justify-between font-mono text-xs">
                    <code>{SITE_CONFIG.installCommands.claudeCode}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.installCommands.claudeCode)}
                      className="p-1 hover:text-primary transition-colors"
                      aria-label="Copy Claude Code install command"
                    >
                      {copiedCode === SITE_CONFIG.installCommands.claudeCode ? (
                        <Check className="size-4 text-green-600" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                    Invocation Syntax
                  </h3>
                  <div className="bg-card p-3 border border-border rounded-xs flex items-center justify-between font-mono text-xs">
                    <code>{SITE_CONFIG.invocations.claudeCode}</code>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.invocations.claudeCode)}
                      className="p-1 hover:text-primary transition-colors"
                      aria-label="Copy Claude Code invocation"
                    >
                      {copiedCode === SITE_CONFIG.invocations.claudeCode ? (
                        <Check className="size-4 text-green-600" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "research-modes" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 04
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Quick vs. Deep Research Modes
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    Depending on your decision timeline, BeenHere supports two investigative depths:
                    a lightweight initial landscape check, and an exhaustive repository and
                    licensing audit.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border bg-card p-4 rounded-xs space-y-2">
                    <span className="font-mono text-xs font-bold text-primary block">
                      QUICK PASS (~60s)
                    </span>
                    <h3 className="font-editorial text-lg text-foreground">
                      Landscape &amp; Prior Art
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Surveys the top commercial products, popular open-source packages, and flags
                      obvious copyleft licensing risks. Ideal for initial concept vetting.
                    </p>
                    <div className="mt-2 pt-2 border-t border-border font-mono text-[10px] text-foreground/80">
                      <code>$beenhere "Quick scan: WebRTC collaborative whiteboard"</code>
                    </div>
                  </div>

                  <div className="border border-border bg-card p-4 rounded-xs space-y-2">
                    <span className="font-mono text-xs font-bold text-primary block">
                      DEEP AUDIT (Comprehensive)
                    </span>
                    <h3 className="font-editorial text-lg text-foreground">
                      Full Architectural Dossier
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Deeply audits candidate repositories for commit recency, breaking changes,
                      sub-dependency licenses, adjacent technical analogies, and formulates a build
                      posture.
                    </p>
                    <div className="mt-2 pt-2 border-t border-border font-mono text-[10px] text-foreground/80">
                      <code>$beenhere "Deep audit: Resume parsing pipeline with Docling"</code>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "reading-outputs" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 05
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Understanding Research Dossiers
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    BeenHere produces a standardized research dossier divided into four logical
                    evidence sections, culminating in an actionable build posture recommendation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 border border-border bg-card rounded-xs">
                    <span className="font-mono text-xs font-bold text-primary">
                      01 · PRECEDENTS
                    </span>
                    <p className="mt-1 text-xs text-foreground/80">
                      Lists commercial products and existing platforms. Explains what jobs they
                      already do well, and highlights where market switching costs or compliance
                      lock-in exist.
                    </p>
                  </div>

                  <div className="p-3.5 border border-border bg-card rounded-xs">
                    <span className="font-mono text-xs font-bold text-primary">
                      02 · REUSABLE REPOSITORIES
                    </span>
                    <p className="mt-1 text-xs text-foreground/80">
                      Lists specific candidate open-source projects, their primary licenses, star
                      velocity, and architectural fit for your proposed stack.
                    </p>
                  </div>

                  <div className="p-3.5 border border-border bg-card rounded-xs">
                    <span className="font-mono text-xs font-bold text-primary">
                      03 · ADJACENT DISCIPLINES
                    </span>
                    <p className="mt-1 text-xs text-foreground/80">
                      Draws analogies from outside the immediate product category (e.g. database
                      commit logs, compiler ASTs, biological sequence alignments) to solve tricky
                      algorithmic challenges.
                    </p>
                  </div>

                  <div className="p-3.5 border border-border bg-card rounded-xs">
                    <span className="font-mono text-xs font-bold text-primary">
                      04 · BUILD POSTURE
                    </span>
                    <p className="mt-1 text-xs text-foreground/80">
                      Concludes with one of five explicit engineering trajectories:{" "}
                      <strong>ADOPT</strong>, <strong>INTEGRATE</strong>, <strong>EXTEND</strong>,{" "}
                      <strong>FORK</strong>, or <strong>BUILD FROM SCRATCH</strong>.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "why-not-github" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 06
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Why Not Just Search GitHub?
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    Code search is essential for finding implementations once you know what you are
                    looking for. BeenHere operates one level higher: it helps you decide{" "}
                    <em>what is worth building</em>, evaluates architectural reusability, and warns
                    you about licensing hazards before code is written.
                  </p>
                </div>

                <div className="border border-border bg-card rounded-xs divide-y divide-border text-xs">
                  <div className="p-4 space-y-1">
                    <span className="font-mono text-primary font-bold">
                      01 · Multi-Source Discovery
                    </span>
                    <p className="text-foreground/90 font-medium">Beyond Public Repositories</p>
                    <p className="text-muted-foreground">
                      Standard search finds keyword matches in code files. BeenHere investigates
                      commercial product workflows, academic approaches, and adjacent domain
                      architectures.
                    </p>
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="font-mono text-primary font-bold">
                      02 · License &amp; Dependency Checkpoints
                    </span>
                    <p className="text-foreground/90 font-medium">
                      Proactive AGPL &amp; Copyleft Audits
                    </p>
                    <p className="text-muted-foreground">
                      Code search displays declared root badges. BeenHere checks nested dependencies
                      and flags viral copyleft restrictions (e.g., PyMuPDF dual-licensing).
                    </p>
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="font-mono text-primary font-bold">
                      03 · Cross-Discipline Analogies
                    </span>
                    <p className="text-foreground/90 font-medium">
                      Sideways Architectural Borrowing
                    </p>
                    <p className="text-muted-foreground">
                      Bridges your inquiry to settled patterns in neighboring industries—such as
                      borrowing CRDT consensus from distributed databases for collaborative editing.
                    </p>
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="font-mono text-primary font-bold">
                      04 · Grounded Decision Synthesis
                    </span>
                    <p className="text-foreground/90 font-medium">
                      Actionable Posture Recommendation
                    </p>
                    <p className="text-muted-foreground">
                      Rather than returning 50 unranked links, BeenHere formulates an actionable
                      engineering call: Adopt, Fork, Integrate, Extend, or Build from scratch.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "case-offline-notes" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 07
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Case Study: Offline-First Collaborative Notes App
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    A representative architectural synthesis for a local-first rich-text notes
                    application.
                  </p>
                </div>

                <div className="border border-border bg-card p-5 rounded-xs space-y-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-primary uppercase font-bold">
                      RESEARCH INQUIRY
                    </span>
                    <p className="text-foreground font-semibold text-sm">
                      &ldquo;What is the optimal CRDT, persistence, and synchronization stack for an
                      offline-first collaborative editor?&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-border">
                    <div className="space-y-1">
                      <strong className="text-foreground font-mono uppercase text-[10px] block">
                        Candidate CRDTs
                      </strong>
                      <p className="text-muted-foreground leading-relaxed">
                        • <strong>Yjs (MIT):</strong> Mature ecosystem, battle-tested ProseMirror
                        &amp; TipTap bindings.
                        <br />• <strong>Automerge / Loro (MIT/Apache):</strong> High-performance
                        Rust/Wasm CRDT with compact state encoding.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <strong className="text-foreground font-mono uppercase text-[10px] block">
                        Persistence &amp; Sync
                      </strong>
                      <p className="text-muted-foreground leading-relaxed">
                        • <strong>SQLite-WASM + OPFS:</strong> Sub-millisecond local reads and ACID
                        durability.
                        <br />• <strong>Lightweight WebSocket Relay:</strong> Avoids complex WebRTC
                        STUN/TURN overhead for team sync.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border bg-background p-3 rounded-xs space-y-1">
                    <span className="font-mono text-[10px] text-primary uppercase font-bold">
                      SYNTHESIZED DIRECTIVE
                    </span>
                    <p className="text-foreground font-medium">
                      EXTEND: Pair Yjs + TipTap with SQLite-WASM (OPFS), synchronized via a
                      stateless WebSocket relay with automatic document compaction.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "licensing-limits" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 08
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Licensing Limitations &amp; Disclaimers
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    Software licensing is complex and varies depending on distribution model, cloud
                    hosting, and proprietary modifications.
                  </p>
                </div>

                <div className="p-4 border border-destructive/40 bg-destructive/5 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-destructive font-bold">
                    <ShieldAlert className="size-4" /> IMPORTANT LEGAL NOTICE
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed">
                    BeenHere provides technical licensing analysis and surfaces potential copyleft
                    or dual-licensing flags (such as AGPL-3.0 or SSPL). However, BeenHere reports do
                    not constitute formal legal advice. Developers and organizations must review
                    full upstream license terms and consult legal counsel when incorporating
                    third-party code into proprietary products.
                  </p>
                </div>

                <div className="border border-border bg-card p-4 rounded-xs space-y-2 text-xs text-foreground/80">
                  <strong className="font-semibold text-foreground">
                    Common Checkpoints Identified by BeenHere:
                  </strong>
                  <ul className="mt-2 space-y-1.5 font-mono text-[11px] text-muted-foreground">
                    <li>
                      • Permissive (MIT, Apache 2.0, BSD): Generally safe for commercial
                      incorporation.
                    </li>
                    <li>
                      • Strong Copyleft (GPL, AGPL): May require open-sourcing host application
                      source code.
                    </li>
                    <li>
                      • Dual-License / Non-Compete (BSL, SSPL): May restrict cloud-hosted commercial
                      operation.
                    </li>
                  </ul>
                </div>
              </section>
            )}

            {activeSection === "network-troubleshooting" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 09
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Network &amp; Sandbox Troubleshooting
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    Because BeenHere executes inside your coding agent, it respects your agent's
                    host sandbox constraints and network proxy rules.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-foreground/80">
                  <div className="p-3.5 border border-border bg-card rounded-xs space-y-1">
                    <strong className="text-foreground font-semibold">
                      Offline / Air-Gapped Environments:
                    </strong>
                    <p className="text-muted-foreground">
                      In air-gapped environments, BeenHere can analyze local repository trees and
                      cached package manifests, but live GitHub web search and external package
                      registry checks will be unavailable.
                    </p>
                  </div>

                  <div className="p-3.5 border border-border bg-card rounded-xs space-y-1">
                    <strong className="text-foreground font-semibold">
                      Corporate HTTP Proxies:
                    </strong>
                    <p className="text-muted-foreground">
                      Ensure your agent environment exports standard{" "}
                      <code className="font-mono bg-muted px-1">HTTP_PROXY</code> and{" "}
                      <code className="font-mono bg-muted px-1">HTTPS_PROXY</code> environment
                      variables so repository metadata fetches succeed.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {activeSection === "contributing" && (
              <section className="space-y-6">
                <div>
                  <span className="font-mono text-xs text-primary uppercase font-bold">
                    SECTION 10
                  </span>
                  <h2 className="font-editorial text-3xl text-foreground mt-1">
                    Contributing to BeenHere
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed font-sans">
                    BeenHere is an open-source community effort licensed under the MIT License. We
                    welcome contributions of new agent integrations, research heuristics, and
                    documentation.
                  </p>
                </div>

                <div className="border border-border bg-card p-4 rounded-xs space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase text-foreground">
                    Running Tests Locally
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    The BeenHere skill core is verified with Python's unittest suite across 18
                    environment matrixes:
                  </p>
                  <div className="bg-background p-2.5 border border-border rounded-xs font-mono text-xs text-foreground">
                    <code>python -m unittest discover tests/</code>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={SITE_CONFIG.links.contributing}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                  >
                    Read CONTRIBUTING.md on GitHub{" "}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={SITE_CONFIG.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground"
                  >
                    GitHub Issues &amp; Pull Requests{" "}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
              </section>
            )}
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
