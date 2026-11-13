import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Fingerprint,
  Info,
  Scale,
  Search,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

type StageId = "idea" | "precedents" | "code" | "risks" | "decision";

interface StageInfo {
  id: StageId;
  stepNum: string;
  name: string;
  title: string;
  summary: string;
  details: {
    label: string;
    value: string;
    note: string;
    tag?: string;
  }[];
}

const STAGES: StageInfo[] = [
  {
    id: "idea",
    stepNum: "01",
    name: "Initial Query",
    title: "Research prompt submitted to BeenHere",
    summary:
      'Developer asked: "I want to build an AI-powered recruitment platform that parses incoming candidate resumes, ranks them against job specs, and automates interview screening."',
    details: [
      {
        label: "Assumed Scope",
        value: "Full end-to-end Applicant Tracking System (ATS) with AI parser and database.",
        note: "Initial developer assumption was to build the complete ATS from scratch.",
      },
      {
        label: "Investigation Goal",
        value:
          "Survey existing commercial ATS solutions, OSS resume parsers, and regulatory traps.",
        note: "Goal: determine whether building a standalone ATS is defensible.",
      },
    ],
  },
  {
    id: "precedents",
    stepNum: "02",
    name: "Precedents",
    title: "Established ATS platforms and product landscape",
    summary:
      "Surveys reveal established market leaders with deep candidate pipelines, compliance workflows, and enterprise lock-in.",
    details: [
      {
        label: "Ashby",
        value: "All-in-one modern recruiting platform with strong automation & analytics APIs.",
        note: "Enterprise ATS with existing customer lock-in and high switching cost.",
        tag: "Commercial Precedent",
      },
      {
        label: "Greenhouse & Lever",
        value: "Legacy enterprise incumbents with extensive integration ecosystems and webhooks.",
        note: "Recruiting teams resist switching ATS due to compliance and historic hiring records.",
        tag: "Market Barrier",
      },
      {
        label: "Market Reality",
        value:
          "Companies don't want another ATS; they want smarter review over their current ATS data.",
        note: "Identifies integration layer opportunity vs whole-platform rewrite.",
        tag: "Opportunity Gap",
      },
    ],
  },
  {
    id: "code",
    stepNum: "03",
    name: "Reusable Code",
    title: "Open-source candidate libraries and models",
    summary:
      "Identifies production-tested document extractors and embedding models instead of writing custom layout parsing.",
    details: [
      {
        label: "Docling (IBM)",
        value: "High-accuracy layout-aware document extraction for complex multi-column resumes.",
        note: "MIT License. Handles complex PDFs, tables, and formatting without raw regex.",
        tag: "Candidate OSS Parser",
      },
      {
        label: "Sentence Transformers",
        value: "Pretrained dense embedding and cross-encoder reranking models (e.g. bge-reranker).",
        note: "Apache 2.0. Eliminates requirement to train proprietary NLP embeddings from zero.",
        tag: "Embedding & Rerank",
      },
      {
        label: "FastAPI / Pydantic",
        value: "Standard async microservice scaffold for asynchronous resume ingestion queues.",
        note: "Well-understood Python service foundation matching data science tooling.",
        tag: "Service Architecture",
      },
    ],
  },
  {
    id: "risks",
    stepNum: "04",
    name: "Risks & Checkpoints",
    title: "Licensing hazards and legal compliance checkpoints",
    summary:
      "Highlights dual-license copyleft hazards in common PDF libraries and emerging AI hiring regulations.",
    details: [
      {
        label: "PyMuPDF License Hazard",
        value: "PyMuPDF is AGPL-3.0 / Commercial Dual-Licensed.",
        note: "Strict checkpoint: Commercial distribution without purchasing a commercial license can trigger AGPL copyleft obligations. Recommend pdfplumber, pypdf, or Docling native parsers.",
        tag: "License Checkpoint (AGPL)",
      },
      {
        label: "EEOC & NYC Local Law 144",
        value: "Automated Employment Decision Tools (AEDT) require annual independent bias audits.",
        note: "Black-box LLM resume rejection introduces severe regulatory liability for employers.",
        tag: "Regulatory Risk",
      },
      {
        label: "Hallucination in Extraction",
        value:
          "LLMs frequently invent credentials or misinterpret gap years during unstructured parsing.",
        note: "Requires deterministic extraction before semantic embeddings.",
        tag: "Technical Pitfall",
      },
    ],
  },
  {
    id: "decision",
    stepNum: "05",
    name: "Build Decision",
    title: "Synthesized engineering direction & architecture",
    summary:
      'Grounded engineering recommendation: "Build a focused AI review layer that connects via webhooks to Ashby / Greenhouse, NOT another ATS from scratch."',
    details: [
      {
        label: "Strategic Posture",
        value: "Integrate & Extend, do not Build from scratch.",
        note: "Leverage existing ATS data via webhooks; deliver value inside recruiters' existing tools.",
      },
      {
        label: "Recommended Stack",
        value: "Docling (MIT parser) + Sentence Transformers (reranking) + FastAPI webhooks.",
        note: "Pairs document parsing and ranking components with integrations to existing ATS platforms.",
      },
    ],
  },
];

export function ResearchCaseFile() {
  const [activeStage, setActiveStage] = useState<StageId>("decision");
  const currentStage: StageInfo = STAGES.find((s) => s.id === activeStage) ?? STAGES[0]!;

  return (
    <section className="bh-case-section" id="case-file" aria-labelledby="case-title">
      <div className="bh-section-label">
        <span>01</span>
        <span>RESEARCH DOSSIER</span>
        <span className="bh-label-line" />
        <span>VERIFIED CODEX CASE FILE</span>
      </div>

      <div className="bh-case-sheet">
        {/* Topline metadata */}
        <div className="bh-case-topline">
          <div>
            <span className="bh-file-icon">
              <FileText aria-hidden="true" />
            </span>
            <span className="bh-mono text-[11px] text-foreground font-semibold">
              CASE RECORD #014-CODEX · RECRUITMENT PLATFORM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bh-stamp font-mono text-[9px] uppercase tracking-wide">
              EVIDENCE VERIFIED
            </span>
          </div>
        </div>

        {/* Case Heading */}
        <div className="bh-case-heading">
          <div>
            <span className="bh-overline font-mono text-[10px] uppercase">INVESTIGATION TOPIC</span>
            <h2 id="case-title">AI-Powered Recruitment Platform</h2>
          </div>
          <div className="bh-file-date">
            <span>EXECUTED IN OPENAI CODEX</span>
            <br />
            <a
              href={SITE_CONFIG.links.codexTestEvidence}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline font-mono text-[10px]"
            >
              Read Raw Test Log <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Traceable Flow Bar: IDEA -> PRECEDENTS -> REUSABLE CODE -> RISKS -> BUILD DECISION */}
        <div
          className="bh-flow"
          role="tablist"
          aria-label="Investigation stages from query to decision"
        >
          {STAGES.map((stage, idx) => {
            const isSelected = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                role="tab"
                id={`tab-${stage.id}`}
                aria-controls={`panel-${stage.id}`}
                aria-selected={isSelected}
                onClick={() => setActiveStage(stage.id)}
                className={`bh-flow-step text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-primary/10 border-b-2 border-b-primary font-semibold text-foreground"
                    : "hover:bg-muted/50 text-muted-foreground"
                }`}
              >
                <span className="bh-flow-number">{stage.stepNum}</span>
                <span className="truncate">{stage.name}</span>
                {idx < STAGES.length - 1 && (
                  <ArrowRight
                    className="hidden sm:inline-block size-3 opacity-40 ml-auto"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Content Panel */}
        <div
          id={`panel-${currentStage.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentStage.id}`}
          className="pt-6 animate-in fade-in duration-150"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-primary">
                STAGE {currentStage.stepNum} //
              </span>
              <h3 className="font-editorial text-xl font-normal text-foreground">
                {currentStage.title}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              CLICK TABS ABOVE TO TRACE INVESTIGATION
            </span>
          </div>

          <p className="mt-3 text-sm text-foreground/80 leading-relaxed font-sans">
            {currentStage.summary}
          </p>

          {/* Detailed Investigation Items */}
          <div className="mt-5 space-y-3">
            {currentStage.details.map((item, i) => (
              <div
                key={i}
                className="p-3.5 border border-border/80 bg-background/60 rounded-xs flex flex-col md:flex-row md:items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-semibold text-foreground">{item.label}</strong>
                    {item.tag && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 border border-border rounded-xs bg-muted/60 text-muted-foreground">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-foreground/90">{item.value}</div>
                  <p className="text-[11px] text-muted-foreground font-mono">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grounded Decision Highlight */}
          <div className="bh-decision mt-6">
            <span className="bh-decision-label">
              SYNTHESIZED BUILD DIRECTIVE <span>→</span>
            </span>
            <p>
              Build the AI review layer, <em>not another ATS.</em>
            </p>
            <span className="bh-decision-foot">
              Direction informed by the reviewed product precedents, available document tools,
              and PyMuPDF license checkpoint.
            </span>
          </div>

          {/* Traceability Notice */}
          <div className="mt-4 pt-3 border-t border-border flex items-start gap-2 text-[10px] font-mono text-muted-foreground">
            <Info className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Editorial disclosure:</strong> This case study reflects actual findings
              executed and verified during the BeenHere test suite inside OpenAI Codex. Raw log
              records, dependencies, and license audits are preserved in{" "}
              <a
                href={SITE_CONFIG.links.codexTestEvidence}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline hover:text-foreground"
              >
                docs/CODEX_END_TO_END_TEST.md
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
