import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  Command,
  FileSearch,
  GitBranch,
  ShieldAlert,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="bh-hero" id="top" aria-labelledby="hero-title">
      <div className="bh-hero-copy">
        <a className="bh-release-pill" href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer">
          <span className="bh-release-dot" />
          Open source research for Codex &amp; Claude Code
          <ArrowUpRight aria-hidden="true" />
        </a>
        <h1 id="hero-title">
          A better first commit<br />
          <em>starts with research.</em>
        </h1>
        <p className="bh-hero-lede">
          BeenHere gives your coding agent the context to build the right thing: what exists,
          what’s worth reusing, and what could trip you up.
        </p>
        <div className="bh-hero-actions">
          <a className="bh-cta-primary" href="#invitation">
            Install BeenHere <ArrowRight aria-hidden="true" />
          </a>
          <a className="bh-cta-secondary" href="#investigation">
            Explore a research run <ChevronRight aria-hidden="true" />
          </a>
        </div>
        <div className="bh-hero-meta" aria-label="Product details">
          <span><Check aria-hidden="true" /> Free &amp; open source</span>
          <span><Check aria-hidden="true" /> Runs locally in your agent</span>
          <span><Check aria-hidden="true" /> MIT licensed</span>
        </div>
      </div>

      <aside className="bh-workbench" aria-label="Example BeenHere research report">
        <div className="bh-workbench-bar">
          <div className="bh-workbench-brand"><span className="bh-mini-mark">B</span><span>beenhere</span></div>
          <span className="bh-workbench-path">/ research / report.md</span>
          <span className="bh-workbench-status"><CircleCheck aria-hidden="true" /> Complete</span>
        </div>
        <div className="bh-run-query">
          <div className="bh-query-icon"><Command aria-hidden="true" /></div>
          <div><span>RESEARCH REQUEST</span><p>Build an AI recruitment platform</p></div>
          <span className="bh-query-time">04:18</span>
        </div>
        <div className="bh-run-stream" aria-label="Completed research steps">
          <div><span className="bh-stream-check"><Check aria-hidden="true" /></span><span>Product landscape</span><span className="bh-stream-detail">3 precedents</span></div>
          <div><span className="bh-stream-check"><Check aria-hidden="true" /></span><span>Reusable foundations</span><span className="bh-stream-detail">Docling · MIT</span></div>
          <div><span className="bh-stream-alert"><ShieldAlert aria-hidden="true" /></span><span>License review</span><span className="bh-stream-warning">AGPL flagged</span></div>
        </div>
        <div className="bh-run-conclusion">
          <div className="bh-conclusion-label"><span>RECOMMENDATION</span><span className="bh-posture">INTEGRATE</span></div>
          <h2>Build the review layer.<br /><em>Keep the ATS.</em></h2>
          <p>Connect to existing hiring tools; use Docling for document parsing. Review AGPL exposure before shipping.</p>
        </div>
        <div className="bh-workbench-foot">
          <span><FileSearch aria-hidden="true" /> Research summary</span>
          <span><GitBranch aria-hidden="true" /> Evidence-backed decision</span>
          <a href="#investigation" aria-label="Read the research example">View case <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </aside>
    </section>
  );
}
