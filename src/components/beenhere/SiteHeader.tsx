import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bh-masthead">
      <div className="bh-topbar-inner">
        <Link to="/" className="bh-brand" aria-label="BeenHere homepage">
          <span className="bh-brand-symbol" aria-hidden="true">b<span>.</span></span>
          <span>BeenHere</span>
        </Link>
        <nav className="bh-main-nav" aria-label="Main navigation">
          <a href="/#investigation">Product</a>
          <a href="/#mindset">Research method</a>
          <Link to="/docs">Docs</Link>
          <a className="bh-github-link" href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="bh-nav-cta" href="/#invitation">Install <span aria-hidden="true">↗</span></a>
        </nav>
        <button
          type="button"
          className="bh-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="bh-mobile-menu"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav id="bh-mobile-menu" className="bh-mobile-nav" aria-label="Mobile navigation">
          <a href="/#investigation" onClick={() => setMobileMenuOpen(false)}>Product</a>
          <a href="/#mindset" onClick={() => setMobileMenuOpen(false)}>Research method</a>
          <Link to="/docs" onClick={() => setMobileMenuOpen(false)}>Documentation</Link>
          <a href={SITE_CONFIG.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
          <a className="bh-mobile-install" href="/#invitation" onClick={() => setMobileMenuOpen(false)}>Install BeenHere <span aria-hidden="true">↗</span></a>
        </nav>
      )}
    </header>
  );
}
