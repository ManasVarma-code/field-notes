import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Copy, FileText, Fingerprint, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const installCommand = "npx skills add <github-owner>/beenhere";
const exampleCommand = '$beenhere "Research my next big idea"';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BeenHere — Research before you build" },
      { name: "description", content: "An open-source agent skill for researching products, reusable code, papers, and adjacent ideas before you build." },
      { property: "og:title", content: "BeenHere — Research before you build" },
      { property: "og:description", content: "Explore every angle before you build. An open-source research skill for Codex and Claude Code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeenHerePage,
});

function BeenHerePage() {
  const [copied, setCopied] = useState(false);

  async function copyInstallCommand() {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="bh-page">
      <header className="bh-header">
        <a className="bh-wordmark" href="#top" aria-label="BeenHere home">
          <span className="bh-mark" aria-hidden="true">B<span>↗</span></span>
          <span>BeenHere</span>
        </a>
        <span className="bh-header-note">An open-source agent skill for idea research</span>
        <nav className="bh-nav" aria-label="Main navigation">
          <a href="#method">Method</a>
          <a href="#case-file">Case file</a>
          <a href="#install">Install</a>
          <a href="https://github.com/search?q=BeenHere&type=repositories" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <Button asChild size="sm" className="bh-header-cta"><a href="#install">Get started <ArrowRight aria-hidden="true" /></a></Button>
      </header>

      <section className="bh-hero" id="top">
        <div className="bh-hero-copy">
          <div className="bh-kicker"><span className="bh-live-dot" /> FIELD GUIDE 001 <span className="bh-kicker-rule" /> RESEARCH BEFORE BUILD</div>
          <h1>Before you build it,<br />see who’s <em>been here.</em></h1>
          <p className="bh-deck">Someone solved part of this already. BeenHere helps you find the products, reusable code, research, and adjacent ideas worth knowing about—before you write the first line.</p>
          <div className="bh-actions">
            <Button asChild className="bh-primary-button"><a href="#install">Install BeenHere <ArrowRight aria-hidden="true" /></a></Button>
            <Button asChild variant="outline" className="bh-secondary-button"><a href="https://github.com/search?q=BeenHere&type=repositories" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
          <div className="bh-hero-command" aria-label="Example BeenHere command">
            <span className="bh-command-prompt">$</span><code>{exampleCommand}</code><span className="bh-command-caption">IN YOUR AGENT</span>
          </div>
        </div>
        <aside className="bh-hero-margin" aria-label="Publication note">
          <span className="bh-margin-index">BH / 001</span>
          <span className="bh-margin-line" />
          <p>Good research<br />changes the shape<br />of the work.</p>
          <ArrowDown className="bh-margin-arrow" aria-hidden="true" />
        </aside>
      </section>

      <section className="bh-case-section" id="case-file" aria-labelledby="case-title">
        <div className="bh-section-label"><span>01</span><span>CASE FILE</span><span className="bh-label-line" /><span>ILLUSTRATIVE EXAMPLE</span></div>
        <div className="bh-case-sheet">
          <div className="bh-case-topline">
            <div><span className="bh-file-icon"><FileText aria-hidden="true" /></span><span className="bh-mono">RESEARCH NOTE / 014-A</span></div>
            <span className="bh-stamp">LANDSCAPE REVIEW</span>
          </div>
          <div className="bh-case-heading">
            <div><span className="bh-overline">SUBJECT</span><h2 id="case-title">AI recruitment platform</h2></div>
            <span className="bh-file-date">SAMPLE INVESTIGATION<br />01—04 / PRODUCT · CODE · RISK</span>
          </div>
          <div className="bh-flow" aria-label="Research path">
            {["Query", "Records", "Evidence", "Reuse", "Decision"].map((item, index) => (
              <div className="bh-flow-step" key={item}><span className="bh-flow-number">0{index + 1}</span><span>{item}</span>{index < 4 && <ArrowRight aria-hidden="true" />}</div>
            ))}
          </div>
          <div className="bh-findings">
            <div className="bh-finding">
              <span className="bh-finding-type"><Search aria-hidden="true" /> PRECEDENT</span>
              <div><strong>Existing product</strong><span>Ashby <i>— established ATS</i></span></div>
              <span className="bh-finding-mark">01</span>
            </div>
            <div className="bh-finding">
              <span className="bh-finding-type"><Fingerprint aria-hidden="true" /> REUSABLE CODE</span>
              <div><strong>Document extraction</strong><span>Docling <i>— inspect fit &amp; terms</i></span></div>
              <span className="bh-finding-mark">02</span>
            </div>
            <div className="bh-finding">
              <span className="bh-finding-type"><ShieldCheck aria-hidden="true" /> CHECKPOINT</span>
              <div><strong>License review</strong><span>PyMuPDF <i>— verify before adoption</i></span></div>
              <span className="bh-finding-mark">03</span>
            </div>
          </div>
          <div className="bh-decision">
            <span className="bh-decision-label">WORKING HYPOTHESIS <span>→</span></span>
            <p>Build the review layer, <em>not another ATS.</em></p>
            <span className="bh-decision-foot">A direction to investigate—not a substitute for checking sources.</span>
          </div>
          <p className="bh-case-footnote">Illustrative example. Names and findings here demonstrate the report format; they are not presented as a verified research run.</p>
        </div>
      </section>

      <section className="bh-method-section" id="method" aria-labelledby="method-title">
        <div className="bh-section-label"><span>02</span><span>THE METHOD</span><span className="bh-label-line" /><span>FOUR PASSES, ONE BETTER DECISION</span></div>
        <div className="bh-method-intro"><h2 id="method-title">Research the landscape.<br /><em>Then decide what deserves code.</em></h2><p>Not a search box with a new name. A structured pass through the evidence that matters before implementation.</p></div>
        <div className="bh-steps">
          <article className="bh-step"><span className="bh-step-number">01</span><div><span className="bh-step-label">PRECEDENTS</span><h3>Find what exists.</h3><p>Survey products and real-world implementations. Understand the current shape of the problem before proposing another answer.</p></div><ArrowUpRight aria-hidden="true" /></article>
          <article className="bh-step"><span className="bh-step-number">02</span><div><span className="bh-step-label">CODE</span><h3>Trace what’s reusable.</h3><p>Look for repositories, APIs, and components worth evaluating—along with the practical questions that decide whether they fit.</p></div><ArrowUpRight aria-hidden="true" /></article>
          <article className="bh-step"><span className="bh-step-number">03</span><div><span className="bh-step-label">ADJACENT FIELDS</span><h3>Look sideways.</h3><p>Borrow useful patterns from neighboring industries and research, not just tools with the same label.</p></div><ArrowUpRight aria-hidden="true" /></article>
          <article className="bh-step"><span className="bh-step-number">04</span><div><span className="bh-step-label">DECISION</span><h3>Make the next move clear.</h3><p>Synthesize evidence into a practical direction: adopt, fork, extend, integrate—or build from scratch.</p></div><ArrowUpRight aria-hidden="true" /></article>
        </div>
      </section>

      <section className="bh-notes-section" id="examples" aria-labelledby="notes-title">
        <div className="bh-section-label"><span>03</span><span>FIELD NOTES</span><span className="bh-label-line" /><span>WHAT A REPORT IS FOR</span></div>
        <div className="bh-notes-layout">
          <div className="bh-notes-copy"><span className="bh-overline">LESS SEARCH. MORE JUDGMENT.</span><h2 id="notes-title">Know what to borrow.<br /><em>Know what to leave.</em></h2><p>GitHub search finds code. BeenHere helps put code in context: what’s already shipping, where the open-source pieces fit, what reuse could cost, and which gap is still yours to solve.</p><a className="bh-text-link" href="#install">Put it in your workflow <ArrowRight aria-hidden="true" /></a></div>
          <div className="bh-report" aria-label="Illustrative report excerpt">
            <div className="bh-report-header"><span>EXCERPT / RESEARCH SUMMARY</span><span>NOTES 01—05</span></div>
            <div className="bh-report-row"><span>01</span><div><strong>Existing solutions</strong><p>Map products and the jobs they already do well.</p></div><span className="bh-report-tag">PRECEDENTS</span></div>
            <div className="bh-report-row"><span>02</span><div><strong>Reusable repositories</strong><p>Identify candidate code; verify maintenance, fit, and license.</p></div><span className="bh-report-tag">CODE</span></div>
            <div className="bh-report-row"><span>03</span><div><strong>Hazards</strong><p>Surface assumptions, dependencies, and adoption risks.</p></div><span className="bh-report-tag">RISK</span></div>
            <div className="bh-report-row"><span>04</span><div><strong>Open opportunity</strong><p>Separate the real gap from familiar feature checklists.</p></div><span className="bh-report-tag">GAP</span></div>
            <div className="bh-report-conclusion"><span>05 / RECOMMENDATION</span><p>Make a grounded call: adopt, fork, extend, integrate, or build.</p></div>
          </div>
        </div>
      </section>

      <section className="bh-install-section" id="install" aria-labelledby="install-title">
        <div className="bh-section-label"><span>04</span><span>GET STARTED</span><span className="bh-label-line" /><span>OPEN SOURCE · READ-ONLY BY DEFAULT</span></div>
        <div className="bh-install-layout">
          <div className="bh-install-copy"><span className="bh-overline">A SMALL STEP BEFORE THE FIRST COMMIT</span><h2 id="install-title">Bring the research<br />to <em>your workflow.</em></h2><p>Use BeenHere with Codex or Claude Code. No mandatory paid AI API; research stays inside the agent workflow you already use.</p></div>
          <div className="bh-install-details">
            <div className="bh-tool-list"><span className="bh-tool-label">WORKS WITH</span><span>Codex</span><span>Claude Code</span><span>GitHub</span></div>
            <div className="bh-code-label"><span>INSTALL</span><span>TERMINAL</span></div>
            <div className="bh-code-block"><code>{installCommand}</code><Button size="icon" variant="ghost" onClick={copyInstallCommand} aria-label={copied ? "Install command copied" : "Copy install command"} title={copied ? "Copied" : "Copy install command"}>{copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}</Button></div>
            <p className="bh-install-caveat">Replace <code>&lt;github-owner&gt;</code> with the BeenHere repository owner.</p>
            <a className="bh-install-link" href="https://github.com/search?q=BeenHere&type=repositories" target="_blank" rel="noreferrer">Find BeenHere on GitHub <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="bh-status-section" aria-label="Project status and trust">
        <div className="bh-status-heading"><span className="bh-overline">PROJECT NOTES</span><h2>Useful by design.<br /><em>Careful by default.</em></h2></div>
        <div className="bh-status-grid">
          <div className="bh-status-item"><span>01 / EXECUTION</span><strong>Codex</strong><p>End-to-end execution verified.</p></div>
          <div className="bh-status-item"><span>02 / COMPATIBILITY</span><strong>Claude Code</strong><p>Support prepared; full verification pending.</p></div>
          <div className="bh-status-item"><span>03 / REUSE</span><strong>MIT license</strong><p>Open source; inspect the repository for terms.</p></div>
          <div className="bh-status-item"><span>04 / SAFETY</span><strong>Read-only by default</strong><p>Does not automatically execute third-party repository code.</p></div>
        </div>
      </section>

      <footer className="bh-footer">
        <a className="bh-wordmark bh-footer-brand" href="#top"><span className="bh-mark" aria-hidden="true">B<span>↗</span></span><span>BeenHere</span></a>
        <span className="bh-footer-note">Explore every angle before you build.</span>
        <nav aria-label="Footer navigation"><a href="https://github.com/search?q=BeenHere&type=repositories" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a><a href="#install">License</a><a href="#method">Docs</a><a href="#install">Security</a><a href="#examples">Changelog</a></nav>
        <span className="bh-copyright">OPEN SOURCE, BUILT WITH INTENT.</span>
      </footer>
    </main>
  );
}