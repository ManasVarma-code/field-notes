export const SITE_CONFIG = {
  name: "BeenHere",
  tagline: "Explore every angle before you build.",
  description:
    "A free, open-source agent skill for Codex and Claude Code. Investigates existing products, open-source repositories, academic papers, adjacent patterns, and licensing risks before you write code.",
  version: "v1.0.0-beta.1",
  gitHubCommitMatrixVerified: "9c33e91",
  matrixJobsCount: 18,
  links: {
    github: "https://github.com/manasvignesh/BeenHere",
    githubWebsite: "https://github.com/ManasVarma-code/field-notes",
    docs: "https://github.com/manasvignesh/BeenHere/tree/main/docs",
    codexTestEvidence:
      "https://github.com/manasvignesh/BeenHere/blob/main/docs/CODEX_END_TO_END_TEST.md",
    license: "https://github.com/manasvignesh/BeenHere/blob/main/LICENSE",
    security: "https://github.com/manasvignesh/BeenHere/blob/main/SECURITY.md",
    changelog: "https://github.com/manasvignesh/BeenHere/blob/main/CHANGELOG.md",
    contributing: "https://github.com/manasvignesh/BeenHere/blob/main/CONTRIBUTING.md",
  },
  installCommands: {
    universal: "npx skills add manasvignesh/BeenHere",
    codex: "npx skills add manasvignesh/BeenHere --agent codex",
    claudeCode: "npx skills add manasvignesh/BeenHere --agent claude-code",
  },
  invocations: {
    codex: "$beenhere Research an offline-first collaborative notes app.",
    claudeCode: "/beenhere Research an offline-first collaborative notes app.",
    recruitmentExample: "$beenhere Research an AI-powered recruitment platform.",
  },
  status: {
    codex: {
      label: "Verified",
      state: "verified" as const,
      details: "Public GitHub installation & runtime execution verified.",
    },
    claudeCode: {
      label: "Prepared",
      state: "prepared" as const,
      details: "Structural integration verified; live runtime test pending.",
    },
    ciMatrix: {
      label: "18/18 Jobs Passing",
      state: "passing" as const,
      details: "Python 3.8–3.12 on Linux, macOS, & Windows (commit 9c33e91).",
    },
    license: {
      label: "MIT",
      state: "open" as const,
      details: "Free and open-source software.",
    },
    dependencies: {
      label: "Zero Dependencies",
      state: "clean" as const,
      details: "No third-party pip dependencies required for core skill.",
    },
    backend: {
      label: "No Hosted Backend",
      state: "local" as const,
      details: "Runs locally inside your coding agent using your agent's own model.",
    },
  },
  nav: [
    { label: "The Method", href: "/#method" },
    { label: "Case Files", href: "/#case-file" },
    { label: "Comparison", href: "/#comparison" },
    { label: "Field Notes", href: "/#notes" },
    { label: "Install", href: "/#install" },
    { label: "Documentation", href: "/docs" },
  ],
} as const;
