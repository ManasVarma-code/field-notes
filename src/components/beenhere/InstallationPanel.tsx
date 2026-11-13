import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { copyTextToClipboard } from "@/lib/clipboard";

type AgentTab = "universal" | "codex" | "claudeCode";

export function InstallationPanel() {
  const [activeTab, setActiveTab] = useState<AgentTab>("universal");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const commands = {
    universal: SITE_CONFIG.installCommands.universal,
    codex: SITE_CONFIG.installCommands.codex,
    claudeCode: SITE_CONFIG.installCommands.claudeCode,
  };

  const activeCommand = commands[activeTab];

  async function handleCopy(cmd: string) {
    const success = await copyTextToClipboard(cmd);
    if (success) {
      setCopiedCmd(cmd);
      setTimeout(() => setCopiedCmd(null), 2000);
    }
  }

  return (
    <section className="bh-install-section" id="install" aria-labelledby="install-title">
      <div className="bh-section-label">
        <span>05</span>
        <span>GET STARTED</span>
        <span className="bh-label-line" />
        <span>INSTALLATION &amp; AGENT INVOCATION</span>
      </div>

      <div className="bh-install-layout">
        <div className="bh-install-copy">
          <span className="bh-overline font-mono text-[10px] uppercase text-primary">
            A SMALL STEP BEFORE THE FIRST COMMIT
          </span>
          <h2 id="install-title">
            Bring research to <em>your agent workflow.</em>
          </h2>
          <p>
            BeenHere runs directly inside your local coding agent—not on a separate hosted website.
            Zero mandatory paid API keys for the skill itself, and 100% MIT-licensed.
          </p>

          {/* Honest Compatibility Badges */}
          <div className="mt-6 space-y-2.5">
            <div className="flex items-start gap-2.5 p-2.5 border border-border bg-card/60 rounded-xs">
              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs">
                <div className="font-semibold text-foreground">
                  OpenAI Codex — <span className="text-primary font-mono">VERIFIED</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Public GitHub installation and end-to-end runtime execution verified.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 border border-border bg-card/60 rounded-xs">
              <Clock className="size-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs">
                <div className="font-semibold text-foreground">
                  Claude Code — <span className="text-muted-foreground font-mono">PREPARED</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Structural directory and manifest integration verified; live runtime verification
                  in progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Box */}
        <div className="bh-install-details">
          {/* Agent Selector Tabs */}
          <div className="flex border-b border-border" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "universal"}
              onClick={() => setActiveTab("universal")}
              className={`px-4 py-2.5 font-mono text-xs transition-colors border-b-2 cursor-pointer ${
                activeTab === "universal"
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Universal (Auto)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "codex"}
              onClick={() => setActiveTab("codex")}
              className={`px-4 py-2.5 font-mono text-xs transition-colors border-b-2 cursor-pointer ${
                activeTab === "codex"
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              OpenAI Codex
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "claudeCode"}
              onClick={() => setActiveTab("claudeCode")}
              className={`px-4 py-2.5 font-mono text-xs transition-colors border-b-2 cursor-pointer ${
                activeTab === "claudeCode"
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Claude Code
            </button>
          </div>

          <div className="bh-code-label">
            <span className="flex items-center gap-1.5">
              <Terminal className="size-3 text-primary" aria-hidden="true" />
              TERMINAL INSTALL COMMAND
            </span>
            <span className="font-mono text-[10px]">VERIFIED PACKAGE · NPX SKILLS</span>
          </div>

          <div className="bh-code-block">
            <code className="select-all">{activeCommand}</code>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => handleCopy(activeCommand)}
              aria-label={
                copiedCmd === activeCommand ? "Install command copied" : "Copy install command"
              }
              title={copiedCmd === activeCommand ? "Copied" : "Copy install command"}
            >
              {copiedCmd === activeCommand ? (
                <Check className="size-4 text-green-600" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
            </Button>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span>Official repository: manasvignesh/BeenHere</span>
            <span className="text-primary font-bold">RELEASE {SITE_CONFIG.version}</span>
          </div>

          {/* 4 Steps */}
          <div className="mt-8 border-t border-border pt-6">
            <span className="font-mono text-[10px] uppercase text-muted-foreground block mb-3">
              FOUR-STEP ACTIVATION FLOW
            </span>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">01</span>
                <div>
                  <strong className="text-foreground">Install the skill:</strong> Run{" "}
                  <code className="text-primary bg-muted px-1 py-0.5 rounded-xs">
                    {activeCommand}
                  </code>{" "}
                  in your project root.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">02</span>
                <div>
                  <strong className="text-foreground">Launch your coding agent:</strong> Start
                  OpenAI Codex or Claude Code in your terminal.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">03</span>
                <div>
                  <strong className="text-foreground">Invoke BeenHere:</strong> Prompt with:
                  <div className="mt-1 bg-card p-2 border border-border text-[11px] text-foreground flex items-center justify-between gap-2">
                    <code>
                      {activeTab === "claudeCode"
                        ? SITE_CONFIG.invocations.claudeCode
                        : SITE_CONFIG.invocations.codex}
                    </code>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          activeTab === "claudeCode"
                            ? SITE_CONFIG.invocations.claudeCode
                            : SITE_CONFIG.invocations.codex,
                        )
                      }
                      className="p-1 hover:text-primary transition-colors shrink-0"
                      aria-label="Copy prompt"
                    >
                      <Copy className="size-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">04</span>
                <div>
                  <strong className="text-foreground">Review &amp; Decide:</strong> Inspect the
                  structured findings: precedents, candidate code, licensing flags, and build
                  posture.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between flex-wrap gap-2">
            <a
              className="bh-install-link mt-0!"
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noreferrer"
            >
              View BeenHere on GitHub <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              href="/docs"
            >
              Read Full Integration Guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
