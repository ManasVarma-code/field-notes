import { useState } from "react";
import { ArrowUpRight, Check, CheckCircle2, Clock, Copy, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { copyTextToClipboard } from "@/lib/clipboard";

type AgentKey = "universal" | "codex" | "claudeCode";

export function InvitationChapter() {
  const [activeAgent, setActiveAgent] = useState<AgentKey>("universal");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const activeCommand = SITE_CONFIG.installCommands[activeAgent];

  async function handleCopy(cmd: string) {
    const ok = await copyTextToClipboard(cmd);
    if (ok) {
      setCopiedCmd(cmd);
      setTimeout(() => setCopiedCmd(null), 2200);
    }
  }

  return (
    <section
      className="py-16 md:py-24 border-b border-border"
      id="invitation"
      aria-labelledby="invitation-title"
    >
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-8 border-b border-border text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-primary font-bold">04</span>
          <span className="text-foreground">The Invitation</span>
        </span>
        <span>INSTALLATION &amp; ACCESS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-end">
        {/* Left Column: Bold Headline */}
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
            GET STARTED IN SECONDS
          </span>
          <h2
            id="invitation-title"
            className="font-editorial text-4xl sm:text-6xl text-foreground font-normal leading-[1.02]"
          >
            Research first.
            <br />
            <em className="text-primary italic font-normal">Build better.</em>
          </h2>
          <p className="font-sans text-base text-foreground/80 leading-relaxed max-w-lg">
            Install BeenHere into your coding agent with a single command. Free, open-source under
            the MIT License, with zero mandatory API keys or proprietary hosted backends.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
              <span>Codex: Runtime Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-3.5 text-muted-foreground" aria-hidden="true" />
              <span>Claude Code: Prepared</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tactile Terminal Box */}
        <div className="lg:col-span-6 border border-border bg-card p-6 rounded-xs space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2 font-mono text-xs text-foreground font-semibold">
              <Terminal className="size-3.5 text-primary" aria-hidden="true" />
              <span>TERMINAL INSTALLATION</span>
            </div>

            {/* Agent Selector */}
            <div className="flex items-center gap-1 font-mono text-[11px]">
              <button
                type="button"
                onClick={() => setActiveAgent("universal")}
                className={`px-2 py-0.5 rounded-xs border transition-colors cursor-pointer ${
                  activeAgent === "universal"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeAgent === "universal"}
              >
                Auto
              </button>
              <button
                type="button"
                onClick={() => setActiveAgent("codex")}
                className={`px-2 py-0.5 rounded-xs border transition-colors cursor-pointer ${
                  activeAgent === "codex"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeAgent === "codex"}
              >
                Codex
              </button>
              <button
                type="button"
                onClick={() => setActiveAgent("claudeCode")}
                className={`px-2 py-0.5 rounded-xs border transition-colors cursor-pointer ${
                  activeAgent === "claudeCode"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeAgent === "claudeCode"}
              >
                Claude Code
              </button>
            </div>
          </div>

          {/* Command display */}
          <div className="flex items-center justify-between gap-3 bg-background p-3.5 border border-border/80 rounded-xs">
            <div className="font-mono text-xs sm:text-sm text-foreground overflow-x-auto flex items-center gap-2">
              <span className="text-primary font-bold select-none">$</span>
              <code className="whitespace-nowrap">{activeCommand}</code>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(activeCommand)}
              className="shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors border border-border bg-card rounded-xs"
              aria-label={copiedCmd === activeCommand ? "Command copied" : "Copy install command"}
              title={copiedCmd === activeCommand ? "Copied!" : "Copy command"}
            >
              {copiedCmd === activeCommand ? (
                <Check className="size-4 text-green-600" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Example prompt */}
          <div className="text-[11px] font-mono text-muted-foreground space-y-1">
            <span>Example Invocation:</span>
            <div className="bg-background/60 p-2 border border-border/60 rounded-xs text-foreground/90">
              <code>{SITE_CONFIG.invocations.codex}</code>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              View Repository on GitHub <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
            <span>MIT LICENSE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
