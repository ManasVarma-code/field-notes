import { Check, Cpu, FileCode2, GitBranch, Lock, Shield, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TrustSection() {
  const trustSignals = [
    {
      num: "01",
      topic: "RUNTIME EXECUTION",
      title: "Codex Runtime Verified",
      desc: "Verified end-to-end inside OpenAI Codex. Real public research log available in repository test documentation.",
      tag: "VERIFIED",
    },
    {
      num: "02",
      topic: "INTEGRATION READINESS",
      title: "Claude Code Prepared",
      desc: "Directory layout and skill manifests configured for Claude Code CLI. Live authenticated runtime verification in progress.",
      tag: "PREPARED",
    },
    {
      num: "03",
      topic: "TEST MATRIX",
      title: "18/18 Matrix Jobs Passed",
      desc: "Automated GitHub Actions CI passed across Python 3.8 through 3.12 on Linux, macOS, and Windows on commit 9c33e91.",
      tag: "CI GREEN",
    },
    {
      num: "04",
      topic: "ZERO DEPENDENCIES",
      title: "No 3rd-Party Pip Installs",
      desc: "The core BeenHere skill uses Python standard libraries. No bloated dependency tree or supply-chain vectors required.",
      tag: "LIGHTWEIGHT",
    },
    {
      num: "05",
      topic: "NO HOSTED BACKEND",
      title: "Direct Agent Native",
      desc: "No proprietary BeenHere cloud servers or proxy APIs. The skill executes locally through your existing agent's environment.",
      tag: "PRIVATE",
    },
    {
      num: "06",
      topic: "RESEARCH-ONLY POLICY",
      title: "Read-Only by Default",
      desc: "BeenHere investigates and reads source metadata. It never automatically executes downloaded third-party repository code.",
      tag: "SAFEGUARD",
    },
  ];

  return (
    <section className="bh-status-section" aria-labelledby="trust-heading">
      <div className="bh-status-heading">
        <span className="bh-overline font-mono text-[10px] uppercase text-primary">
          TRUST &amp; ARCHITECTURE
        </span>
        <h2 id="trust-heading">
          Useful by design.
          <br />
          <em>Careful by default.</em>
        </h2>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed font-sans">
          BeenHere is built to assist engineering judgment, not replace it. We hold our claims to
          the same rigorous standards we apply to codebase investigations.
        </p>

        {/* Clear Limitations Disclosure */}
        <div className="mt-6 p-4 border border-border bg-card/80 rounded-xs text-[11px] space-y-2">
          <div className="font-mono text-[10px] text-primary font-bold uppercase">
            Explicit Operational Limitations
          </div>
          <p className="text-muted-foreground leading-relaxed">
            BeenHere reports are informational research dossiers and do not constitute formal legal
            advice regarding software licensing. The skill inherits the security sandbox, network
            permissions, and privacy policies of your host coding agent (Codex or Claude Code).
          </p>
        </div>
      </div>

      <div className="bh-status-grid">
        {trustSignals.map((item) => (
          <div key={item.num} className="bh-status-item">
            <div className="flex items-center justify-between">
              <span>
                {item.num} / {item.topic}
              </span>
              <span className="font-mono text-[8px] px-1 py-0.2 border border-border bg-muted/40 text-primary rounded-xs">
                {item.tag}
              </span>
            </div>
            <strong>{item.title}</strong>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
