import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs">
      <div className="flex items-center gap-3">
        <a
          href="/"
          className="flex items-center gap-2 text-foreground font-semibold"
          aria-label="BeenHere home"
        >
          <span className="w-5 h-5 border border-foreground/90 font-editorial text-xs flex items-center justify-center">
            B
          </span>
          <span className="font-sans text-sm">{SITE_CONFIG.name}</span>
        </a>
        <span className="text-muted-foreground hidden sm:inline">· {SITE_CONFIG.tagline}</span>
      </div>

      <nav
        aria-label="Footer navigation"
        className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground"
      >
        <a
          href={SITE_CONFIG.links.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          GitHub <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
        <a href="/docs" className="hover:text-foreground transition-colors">
          Documentation
        </a>
        <a
          href={SITE_CONFIG.links.codexTestEvidence}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          Codex Test <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
        <a
          href={SITE_CONFIG.links.license}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          License <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
        <a
          href={SITE_CONFIG.links.security}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          Security <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
        <a
          href={SITE_CONFIG.links.changelog}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          Changelog <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
        <a
          href={SITE_CONFIG.links.contributing}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          Contributing <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
      </nav>

      <div className="text-muted-foreground text-[10px]">
        <span>RELEASE {SITE_CONFIG.version} · MIT</span>
      </div>
    </footer>
  );
}
