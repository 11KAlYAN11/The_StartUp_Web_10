# Startup Web — multi-org marketing site template

A single Next.js codebase that can be re-skinned for any organization purely
through a YAML config file (`config/default.yaml`) — no code changes
required for content/branding.

## Getting started (developers)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Guides

This repo has three dedicated guides depending on what you're doing:

| I want to... | Read this |
|---|---|
| Edit company name, colors, services, testimonials, contact info (no coding) | [CUSTOMIZING_CONTENT.md](CUSTOMIZING_CONTENT.md) |
| Change layout, fonts, section order, add images/icons (developer task) | [CUSTOMIZING_DESIGN.md](CUSTOMIZING_DESIGN.md) |
| Reuse this codebase to launch a site for a different client | [MULTI_ORG_SETUP.md](MULTI_ORG_SETUP.md) |

## Quick facts

- **Config file:** `config/default.yaml` — all site content and branding.
- **Contact form:** posts to `org.contact.formEndpoint` in the YAML config
  (e.g. a [Formspree](https://formspree.io) endpoint). Leave blank to show a
  fallback "email us directly" message. No backend needed.
- **Deploying:** standard Next.js static/serverless app — `vercel` deploys
  it directly, no separate backend service required. Set `ORG_CONFIG` as an
  environment variable in Vercel project settings to deploy a non-default
  client config (see [MULTI_ORG_SETUP.md](MULTI_ORG_SETUP.md)).
- **Light/dark mode:** there's a toggle in the header. It does **not**
  follow the visitor's OS/browser preference — every visitor sees **light
  mode by default**, and dark mode only applies once they click the toggle
  (their choice is then remembered for future visits via `localStorage`).
