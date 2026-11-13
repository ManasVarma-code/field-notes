import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bh-masthead sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs py-3.5"
          : "bg-transparent border-b border-border/60 py-5"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-foreground hover:opacity-85 transition-opacity"
            aria-label="BeenHere homepage"
          >
            <span
              className="relative inline-flex items-center justify-center w-7 h-7 border border-foreground/90 font-editorial text-lg leading-none select-none bg-card"
              aria-hidden="true"
            >
              B
              <span className="absolute -top-1.5 -right-1 text-primary text-[10px] font-mono font-bold">
                ↗
              </span>
            </span>
            <span className="font-sans font-semibold tracking-tight text-base">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <span className="hidden lg:inline-block font-mono text-[10px] uppercase tracking-wider text-muted-foreground border-l border-border pl-4">
            Research before code
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 font-mono text-xs text-muted-foreground"
          aria-label="Main navigation"
        >
          <a href="/#investigation" className="hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="/#mindset" className="hover:text-foreground transition-colors">
            What it checks
          </a>
          <a href="/#invitation" className="hover:text-foreground transition-colors">
            Install
          </a>
          <Link to="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors font-semibold"
            aria-label="GitHub repository (opens in a new tab)"
          >
            GitHub
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-foreground border border-border bg-card rounded-xs"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-4 font-mono text-sm animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <a
            href="/#investigation"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-foreground hover:text-primary transition-colors"
          >
            How it works
          </a>
          <a
            href="/#mindset"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-foreground hover:text-primary transition-colors"
          >
            What it checks
          </a>
          <a
            href="/#invitation"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-foreground hover:text-primary transition-colors"
          >
            Install BeenHere
          </a>
          <Link
            to="/docs"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-foreground hover:text-primary transition-colors"
          >
            Documentation
          </Link>
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 py-1 text-primary font-bold"
          >
            GitHub Repository <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
