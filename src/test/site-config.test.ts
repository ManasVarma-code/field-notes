import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "@/config/site";

describe("SITE_CONFIG validation", () => {
  it("uses the official BeenHere GitHub repository without search parameters", () => {
    expect(SITE_CONFIG.links.github).toBe("https://github.com/manasvignesh/BeenHere");
    expect(SITE_CONFIG.links.githubWebsite).toBe("https://github.com/ManasVarma-code/field-notes");
    expect(SITE_CONFIG.links.github).not.toContain("search");
    expect(SITE_CONFIG.links.github).not.toContain("<github-owner>");
  });

  it("configures the verified install commands with correct owner/repo", () => {
    expect(SITE_CONFIG.installCommands.universal).toBe("npx skills add manasvignesh/BeenHere");
    expect(SITE_CONFIG.installCommands.codex).toBe(
      "npx skills add manasvignesh/BeenHere --agent codex",
    );
    expect(SITE_CONFIG.installCommands.claudeCode).toBe(
      "npx skills add manasvignesh/BeenHere --agent claude-code",
    );
  });

  it("points to real documentation, test evidence, license, and security files", () => {
    expect(SITE_CONFIG.links.docs).toBe("https://github.com/manasvignesh/BeenHere/tree/main/docs");
    expect(SITE_CONFIG.links.codexTestEvidence).toBe(
      "https://github.com/manasvignesh/BeenHere/blob/main/docs/CODEX_END_TO_END_TEST.md",
    );
    expect(SITE_CONFIG.links.license).toBe(
      "https://github.com/manasvignesh/BeenHere/blob/main/LICENSE",
    );
    expect(SITE_CONFIG.links.security).toBe(
      "https://github.com/manasvignesh/BeenHere/blob/main/SECURITY.md",
    );
    expect(SITE_CONFIG.links.changelog).toBe(
      "https://github.com/manasvignesh/BeenHere/blob/main/CHANGELOG.md",
    );
    expect(SITE_CONFIG.links.contributing).toBe(
      "https://github.com/manasvignesh/BeenHere/blob/main/CONTRIBUTING.md",
    );
  });

  it("preserves accurate verification claims", () => {
    expect(SITE_CONFIG.gitHubCommitMatrixVerified).toBe("9c33e91");
    expect(SITE_CONFIG.matrixJobsCount).toBe(18);
    expect(SITE_CONFIG.status.codex.state).toBe("verified");
    expect(SITE_CONFIG.status.claudeCode.state).toBe("prepared");
  });
});
