import { ArrowDown, ArrowRight, ArrowUpRight, Check, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="bh-hero" id="top" aria-labelledby="hero-title">
      <div className="bh-hero-copy">
        <div className="bh-hero-eyebrow">
          <span className="bh-spark" aria-hidden="true">✳</span>
          An open-source research skill for coding agents
        </div>
        <h1 id="hero-title">
          Don’t build it<br />
          <em>twice.</em>
        </h1>
        <p className="bh-hero-lede">
          Before your agent writes code, BeenHere finds what already exists: the products,
          repositories, research, and licensing details that can change your plan.
        </p>
        <div className="bh-hero-actions">
          <a className="bh-cta-primary" href="#invitation">
            Add BeenHere <ArrowRight aria-hidden="true" />
          </a>
          <a className="bh-cta-secondary" href="#investigation">
            See a research run <ArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="bh-hero-meta">
          <span><Check aria-hidden="true" /> Free &amp; open source</span>
          <span><Check aria-hidden="true" /> Runs in your agent</span>
          <a href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer">
            Explore on GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside className="bh-preview" aria-label="Example BeenHere research summary">
        <div className="bh-preview-top">
          <div className="bh-window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span>BEENHERE / RESEARCH</span>
          <span className="bh-preview-live"><i /> COMPLETE</span>
        </div>
        <div className="bh-preview-prompt">
          <Terminal aria-hidden="true" />
          <span>Research an AI recruitment platform</span>
        </div>
        <div className="bh-preview-rule"><span>THE SHORT VERSION</span></div>
        <p className="bh-preview-verdict">Build the review layer.<br /><em>Don’t build another ATS.</em></p>
        <div className="bh-preview-findings">
          <div><span className="bh-finding-icon bh-finding-green">↗</span><p><strong>Reuse</strong><small>Docling for resume parsing</small></p><span className="bh-finding-tag">MIT</span></div>
          <div><span className="bh-finding-icon bh-finding-amber">!</span><p><strong>Check first</strong><small>PyMuPDF has AGPL terms</small></p><span className="bh-finding-tag">LICENSE</span></div>
          <div><span className="bh-finding-icon bh-finding-blue">◎</span><p><strong>Fit the market</strong><small>Integrate with existing ATS tools</small></p><span className="bh-finding-tag">DECISION</span></div>
        </div>
        <div className="bh-preview-bottom"><span>Evidence in. Guesswork out.</span><span>01 / 04</span></div>
      </aside>
    </section>
  );
}
