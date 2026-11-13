import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  FileCode2,
  Layers,
  Scale,
  Search,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface DossierNode {
  step: string;
  category: string;
  title: string;
  verdict: string;
  narrative: string;
  evidence: {
    name: string;
    badge: string;
    annotation: string;
  }[];
}

const INVESTIGATION_NODES: DossierNode[] = [
  {
    step: "01",
    category: "THE INQUIRY",
    title: "Initial Developer Hypothesis",
    verdict: "Scope assumed: Full bespoke ATS from scratch",
    narrative:
      "A developer intends to build an AI-powered resume screening, extraction, and candidate matching application. The default impulse is to construct an entire end-to-end Applicant Tracking System (ATS)—database, candidate pipeline, job posting portal, and recruiter UI.",
    evidence: [
      {
        name: "User Prompt",
        badge: "Inquiry Input",
        annotation:
          "Research technical viability and reusable prior art for an AI recruitment platform.",
      },
      {
        name: "Initial scope",
        badge: "Initial scope",
        annotation:
          "The initial idea includes a database, permissions, candidate pipeline, and recruiter interface.",
      },
    ],
  },
  {
    step: "02",
    category: "EXISTING PRECEDENTS",
    title: "Surveying Incumbent ATS Platforms",
    verdict: "Market Reality: Deep customer switching barriers",
    narrative:
      "Investigation reveals an entrenched commercial landscape. Ashby, Greenhouse, and Lever dominate modern hiring. Recruiting teams have strict compliance workflows, historic audit records, and zero appetite to migrate to a new core ATS. The real friction point isn't ATS workflows—it is candidate review efficiency.",
    evidence: [
      {
        name: "Ashby",
        badge: "Existing platform",
        annotation: "Review its published integration options and documented workflows.",
      },
      {
        name: "Greenhouse / Lever",
        badge: "Enterprise Incumbents",
        annotation:
          "Deep enterprise integrations and regulatory audit trails make replacement unviable.",
      },
    ],
  },
  {
    step: "03",
    category: "REUSABLE CODE",
    title: "Candidate Open-Source Components",
    verdict: "Foundations Identified: Zero need for custom PDF regex",
    narrative:
      "Instead of writing fragile PDF parsing scripts or training proprietary embedding models, BeenHere identifies production-tested, permissively licensed open-source foundations ready for immediate integration.",
    evidence: [
      {
        name: "Docling (IBM)",
        badge: "MIT License · Code",
        annotation:
          "Layout-aware document parser specializing in complex multi-column resumes and tables.",
      },
      {
        name: "Sentence Transformers",
        badge: "Apache 2.0 · Embeddings",
        annotation:
          "Pretrained dense vectors and cross-encoders (e.g. bge-reranker) for semantic candidate ranking.",
      },
    ],
  },
  {
    step: "04",
    category: "LICENSING CHECKPOINTS",
    title: "Hazard Detection: Legal & Regulatory Traps",
    verdict: "Checkpoint Triggered: AGPL Copyleft Risk Identified",
    narrative:
      "Standard LLM code generation often imports PyMuPDF for PDF extraction. BeenHere flags a critical hazard: PyMuPDF is dual-licensed under AGPL-3.0 and commercial terms. Deploying it in a proprietary SaaS triggers viral copyleft obligations. Additionally, NYC Local Law 144 and EEOC guidelines require strict bias auditability for automated hiring tools.",
    evidence: [
      {
        name: "PyMuPDF (AGPL-3.0)",
        badge: "Critical License Flag",
        annotation:
          "Avoid AGPL viral license in commercial apps. Substitute with pdfplumber or native Docling parsers.",
      },
      {
        name: "NYC Local Law 144 / EEOC",
        badge: "Regulatory Checkpoint",
        annotation:
          "LLM scoring requires deterministic audit logging to pass mandatory bias assessments.",
      },
    ],
  },
];

export function InvestigationChapter() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      className="bh-case-study"
      id="investigation"
      aria-labelledby="investigation-title"
    >
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-8 border-b border-border text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-primary font-bold">02</span>
          <span className="text-foreground">A real research run</span>
        </span>
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <span>CODEX</span>
          <span className="text-primary">·</span>
          <span>RECRUITMENT PLATFORM</span>
        </div>
      </div>

      {/* Chapter Intro */}
      <div className="py-12 max-w-3xl space-y-4">
        <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
          RECRUITMENT PLATFORM · CASE STUDY
        </span>
        <h2
          id="investigation-title"
          className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-tight"
        >
          From broad idea<br />to buildable plan.
        </h2>
        <p className="font-sans text-base text-foreground/80 leading-relaxed">
          See how BeenHere moves from an AI recruitment idea through market context, reusable code,
          and a licensing check to a focused technical decision.
        </p>
      </div>

      {/* Interactive Vertical Timeline Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
        {/* Navigation Selector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest pb-2 border-b border-border">
            RESEARCH STEPS
          </div>
          <div
            className="space-y-1.5"
            role="tablist"
            aria-label="Investigation chronological steps"
          >
            {INVESTIGATION_NODES.map((node, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={node.step}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-3.5 rounded-xs border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${
                    isSelected
                      ? "border-primary bg-card shadow-xs text-foreground font-bold"
                      : "border-transparent hover:border-border/60 hover:bg-muted/40 text-muted-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? "text-primary" : "text-muted-foreground"}>
                      {node.step}
                    </span>
                    <span>{node.category}</span>
                  </div>
                  {isSelected && (
                    <ChevronRight className="size-3.5 text-primary" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border font-mono text-[10px] text-muted-foreground space-y-2">
            <div className="text-foreground font-semibold">RUN THE FULL EXAMPLE</div>
            <p className="text-muted-foreground leading-normal font-sans text-xs">
              This walkthrough follows an executed Codex run, with the full log available in the repository.
            </p>
            <a
              href={SITE_CONFIG.links.codexTestEvidence}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline font-mono text-[10px] pt-1"
            >
              Read the full test log <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Active Node Detail Card */}
        <div className="lg:col-span-8 border border-border bg-card p-6 md:p-8 rounded-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                STAGE {INVESTIGATION_NODES[activeStep]!.step} //{" "}
                {INVESTIGATION_NODES[activeStep]!.category}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-foreground">
                {INVESTIGATION_NODES[activeStep]!.title}
              </h3>
            </div>
            <span className="font-mono text-[10px] px-2.5 py-1 bg-background border border-border text-foreground font-semibold rounded-xs">
              {INVESTIGATION_NODES[activeStep]!.verdict}
            </span>
          </div>

          <p className="font-sans text-sm sm:text-base text-foreground/90 leading-relaxed">
            {INVESTIGATION_NODES[activeStep]!.narrative}
          </p>

          <div className="space-y-3 pt-2">
            <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider block">
              EVIDENCE ARTIFACTS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {INVESTIGATION_NODES[activeStep]!.evidence.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-background border border-border/80 rounded-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <strong className="font-mono text-xs text-foreground font-semibold">
                      {item.name}
                    </strong>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 bg-muted text-muted-foreground rounded-xs">
                      {item.badge}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground leading-normal">
                    {item.annotation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* THE MONUMENTAL BUILD DECISION REVEAL */}
      <div className="mt-16 pt-12 border-t border-border">
        <div className="border-l-4 border-primary pl-6 sm:pl-10 py-4 space-y-4 max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
            05 / THE BUILD DECISION
          </span>
          <h3 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-[1.05]">
            Build the review layer.
            <br />
            <em className="text-primary italic font-normal">Not another ATS.</em>
          </h3>
          <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
            The examples above point toward a narrower first release: <strong>integrate</strong>
            with existing hiring systems and evaluate document tools against the product’s needs
            and license requirements. Confirm each integration and legal requirement before adoption.
          </p>
          <div className="pt-2 flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
            <span>POSTURE: INTEGRATE</span>
            <span>·</span>
            <span>DECISION: REVIEW LAYER WITH EXISTING TOOLS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
