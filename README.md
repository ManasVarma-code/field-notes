# BeenHere — Official Website & Documentation

> **Explore every angle before you build.**
> The official website and documentation for **BeenHere**, the free, open-source Agent Skill for OpenAI Codex and Claude Code.

---

## Overview

**BeenHere** is an open-source Agent Skill that helps software engineers research ideas, prior art, reusable components, academic approaches, and licensing hazards before writing code.

This repository (`field-notes`) contains the official production website, interactive case-file investigations, and technical documentation portal for the BeenHere project.

- **Official Agent Skill Repository:** [github.com/manasvignesh/BeenHere](https://github.com/manasvignesh/BeenHere)
- **Current Release:** `v1.0.0-beta.1`
- **License:** MIT License

---

## Relationship Between Repositories

| Repository                     | Purpose                                                                      | Location                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **BeenHere** (Agent Skill)     | Core Python skill, CLI manifest, agent instruction sets, and CI matrix       | [manasvignesh/BeenHere](https://github.com/manasvignesh/BeenHere)             |
| **Field Notes** (This Website) | Official publication, interactive dossier explorer, and documentation portal | [ManasVarma-code/field-notes](https://github.com/ManasVarma-code/field-notes) |

---

## Technical Stack & Architecture

- **Framework:** [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **UI & Runtime:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, OKLCH color tokens, Swiss editorial typography (DM Serif Display, IBM Plex Sans, IBM Plex Mono)
- **Server Engine:** Nitro (with SSR error handling and Cloudflare Worker / edge presets)
- **Testing:** Vitest & React Testing Library
- **Integration:** [Lovable](https://lovable.dev) connected workflow

---

## Local Development

Ensure you have Node.js (v20+ or v22+) and npm installed.

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start local development server
npm run dev

# 3. Open in your browser
# Server runs at http://localhost:3000 (or the port specified by Vite)
```

---

## Verification & Testing

Run the automated test suite, type checker, linter, and formatting checks:

```bash
# Run unit and integration tests (Vitest)
npm run test

# Verify TypeScript types (zero errors)
npx tsc --noEmit

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

---

## Building for Production

This project produces a server-side rendered (SSR) bundle powered by TanStack Start and Nitro:

```bash
# Compile client assets, SSR handlers, and Nitro deployment output
npm run build

# Preview production build locally
npm run preview
```

### Production Output

The build output is generated in `.output/`:

- `.output/public/` — Static assets, client JS, CSS, favicons, and social cards
- `.output/server/` — Nitro SSR server entrypoint, middleware, and Cloudflare Worker manifests (`wrangler.json`)

---

## Deployment Configuration

This application uses TanStack Start with Nitro and supports edge and serverless environments:

1. **Cloudflare Workers / Pages:** Built-in default target. Deploy using:
   ```bash
   npx nitro deploy --prebuilt
   # or via wrangler:
   npx wrangler deploy
   ```
2. **Node.js / Docker:** Set `NITRO_PRESET=node-server` before running `npm run build` to output a standalone Node.js server.
3. **Vercel / Netlify:** Nitro detects deployment environments automatically or via `NITRO_PRESET=vercel`.

> [!NOTE]
> Do not force static-only exports unless SSR features are explicitly replaced, as TanStack Start leverages server routes and edge headers.

---

## Lovable Synchronization Guidelines

This repository is linked to Lovable. As outlined in `AGENTS.md`:

- Do not rewrite published git history (`git push --force` or rebasing already pushed commits).
- Generated route files (`src/routeTree.gen.ts`) are automatically managed by the TanStack Router Vite plugin during build/dev; do not edit them manually.
- Database schemas, connectors, and AI gateway integrations are managed through Lovable's configuration layer.

---

## Verified Project Milestones

- **OpenAI Codex:** Public GitHub installation and end-to-end runtime execution verified.
- **Claude Code:** Structural integration verified; live runtime verification in progress.
- **CI Matrix:** 18/18 GitHub Actions matrix jobs passed across Python 3.8–3.12 on Linux, macOS, and Windows on commit `9c33e91`.
- **Zero Third-Party Pip Dependencies:** Core BeenHere skill operates with Python standard library.
- **Zero Mandatory Hosted Backends:** Operates natively inside your coding agent.
- **License:** MIT License.
