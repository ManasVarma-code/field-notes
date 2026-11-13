import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  GitBranch,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ResearchCase {
  id: string;
  tag: string;
  title: string;
  researchQuestion: string;
  verifiedStatus: string;
  precedents: string;
  reuseOpportunities: { name: string; license: string; purpose: string }[];
  risksAndCaveats: string[];
  recommendation: string;
  evidenceLink?: string;
  evidenceLabel?: string;
}

const RESEARCH_CASES: ResearchCase[] = [
  {
    id: "case-recruitment",
    tag: "CASE 001 · DEMONSTRATED RUN",
    title: "AI-Powered Recruitment & Resume Screening",
    researchQuestion:
      "Should we build an end-to-end AI ATS, or can we build candidate ranking on top of existing hiring infrastructure?",
    verifiedStatus: "Demonstrated on OpenAI Codex (v1.0.0-beta.1 test suite)",
    precedents:
      "Ashby, Greenhouse, and Lever hold deep enterprise market share with high customer switching costs. Hiring teams require regulatory audit trails rather than novel UI.",
    reuseOpportunities: [
      {
        name: "Docling (IBM)",
        license: "MIT",
        purpose: "High-accuracy layout-aware PDF/DOCX parser for complex multi-column resumes.",
      },
      {
        name: "Sentence Transformers",
        license: "Apache 2.0",
        purpose:
          "Dense vector embeddings and cross-encoder reranking for semantic candidate matching.",
      },
      {
        name: "FastAPI / Celery",
        license: "BSD / BSD",
        purpose: "Asynchronous webhook ingestion and queue processing architecture.",
      },
    ],
    risksAndCaveats: [
      "PyMuPDF license hazard: AGPL-3.0 copyleft triggers commercial distribution risks. Must use pdfplumber or native Docling parsers instead.",
      "EEOC / NYC Local Law 144 compliance: Automated candidate rejection systems require independent annual bias audits.",
      "LLM hallucination: LLMs invent candidate credentials if extraction is purely generative. Deterministic parsing required.",
    ],
    recommendation:
      "INTEGRATE: Build a high-precision AI review layer that connects via webhooks to Ashby and Greenhouse. Avoid the multi-year effort of building a core ATS database.",
    evidenceLink: SITE_CONFIG.links.codexTestEvidence,
    evidenceLabel: "Review Codex Test Log in docs/CODEX_END_TO_END_TEST.md",
  },
  {
    id: "case-offline-notes",
    tag: "CASE 002 · ARCHITECTURAL DOSSIER",
    title: "Offline-First Collaborative Notes Application",
    researchQuestion:
      "What is the optimal CRDT, persistence, and synchronization stack for a local-first rich-text editor?",
    verifiedStatus: "Quick Research Demonstration (Architectural Synthesis)",
    precedents:
      "Notion (centralized operational transformation / API-first), Linear (local-first sync with SQLite/IndexedDB), Obsidian (local markdown files without real-time CRDT sync).",
    reuseOpportunities: [
      {
        name: "Yjs / pycrdt",
        license: "MIT",
        purpose:
          "Production-proven CRDT with rich ecosystem and proven ProseMirror/Quill bindings.",
      },
      {
        name: "Automerge / Loro",
        license: "MIT / Apache 2.0",
        purpose:
          "High-performance Rust/Wasm CRDT alternative with rich document schemas and compact encoding.",
      },
      {
        name: "SQLite-WASM + OPFS",
        license: "Public Domain",
        purpose:
          "Native Origin Private File System persistence with sub-millisecond local reads and ACID durability.",
      },
    ],
    risksAndCaveats: [
      "CRDT state explosion: Storing full edit history without compaction leads to memory bloat over months of continuous edits.",
      "Peer-to-peer NAT traversal: Pure WebRTC sync requires STUN/TURN infrastructure. A lightweight relay websocket server is far more reliable.",
      "End-to-end encryption key rotation: Encrypted CRDT sync requires careful schema design to prevent leaking metadata in operation logs.",
    ],
    recommendation:
      "EXTEND: Pair Yjs + TipTap (ProseMirror) with SQLite-WASM (OPFS) for local storage, backed by a lightweight state-compacting WebSocket relay for team sync.",
    evidenceLink: SITE_CONFIG.links.docs,
    evidenceLabel: "Read More in BeenHere Documentation",
  },
];

export function FieldNotes() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("case-recruitment");
  const activeCase: ResearchCase =
    RESEARCH_CASES.find((c) => c.id === selectedCaseId) ?? RESEARCH_CASES[0]!;

  return (
    <section className="bh-notes-section" id="notes" aria-labelledby="notes-title">
      <div className="bh-section-label">
        <span>04</span>
        <span>FIELD NOTES</span>
        <span className="bh-label-line" />
        <span>REPRESENTATIVE RESEARCH DOSSIERS</span>
      </div>

      <div className="py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="bh-overline font-mono text-[10px] uppercase text-primary">
            INVESTIGATIVE ARCHIVE
          </span>
          <h2 id="notes-title" className="font-editorial text-3xl sm:text-4xl text-foreground mt-2">
            Know what to borrow.
            <br />
            <em>Know what to leave.</em>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md font-sans">
          BeenHere replaces speculative developer debates with structured architectural dossiers.
          Examine two representative inquiries below.
        </p>
      </div>

      {/* Case Switcher Tabs */}
      <div className="flex border-b border-border gap-2 mt-4 overflow-x-auto" role="tablist">
        {RESEARCH_CASES.map((c) => {
          const isSelected = selectedCaseId === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCaseId(c.id)}
              className={`pb-3 px-3 font-mono text-xs transition-colors flex items-center gap-2 border-b-2 cursor-pointer ${
                isSelected
                  ? "border-primary text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="size-3.5 text-primary" aria-hidden="true" />
              <span>{c.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Case Details */}
      <div className="border border-border bg-card mt-6 p-6 rounded-xs animate-in fade-in duration-150">
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-border gap-3">
          <div>
            <span className="font-mono text-[10px] text-primary uppercase font-bold">
              {activeCase.tag}
            </span>
            <h3 className="font-editorial text-2xl font-normal text-foreground mt-1">
              {activeCase.title}
            </h3>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-1 border border-border bg-muted/50 text-muted-foreground rounded-xs">
            STATUS: {activeCase.verifiedStatus}
          </span>
        </div>

        {/* Research Inquiry */}
        <div className="mt-5 p-3.5 bg-background border border-border/80 rounded-xs">
          <span className="font-mono text-[9px] uppercase text-primary block">
            RESEARCH INQUIRY / SCOPE
          </span>
          <p className="mt-1 text-sm font-medium text-foreground">
            &ldquo;{activeCase.researchQuestion}&rdquo;
          </p>
        </div>

        {/* 3-Column Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {/* Precedents */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase text-muted-foreground block border-b border-border/60 pb-1.5">
              01 · PRECEDENTS &amp; LANDSCAPE
            </span>
            <p className="text-xs text-foreground/80 leading-relaxed font-sans">
              {activeCase.precedents}
            </p>
          </div>

          {/* Reusable Code */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase text-muted-foreground block border-b border-border/60 pb-1.5">
              02 · REUSABLE REPOSITORIES
            </span>
            <div className="space-y-2">
              {activeCase.reuseOpportunities.map((repo, i) => (
                <div key={i} className="text-xs">
                  <div className="flex items-center justify-between">
                    <strong className="font-semibold text-foreground">{repo.name}</strong>
                    <span className="font-mono text-[9px] px-1 py-0.2 bg-muted text-muted-foreground rounded-xs">
                      {repo.license}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                    {repo.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase text-destructive block border-b border-border/60 pb-1.5">
              03 · RISKS &amp; CAVEATS
            </span>
            <ul className="space-y-1.5 text-xs text-foreground/80">
              {activeCase.risksAndCaveats.map((risk, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] leading-relaxed">
                  <span className="text-primary font-bold">›</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Directive / Decision */}
        <div className="mt-6 pt-4 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase text-primary font-bold">
              GROUNDED DIRECTIVE
            </span>
            <p className="text-sm font-semibold text-foreground">{activeCase.recommendation}</p>
          </div>
          {activeCase.evidenceLink && (
            <a
              href={activeCase.evidenceLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline shrink-0"
            >
              {activeCase.evidenceLabel} <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
