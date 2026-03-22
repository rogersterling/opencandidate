# OpenCandidate

Hold politicians to the platform they ran on.

OpenCandidate is a Next.js demo and concept site for a simple political commitment mechanism: turn a campaign platform into a public governing system, apply it to real decisions with AI, and let the public compare the recommendation to what the politician actually does.

## Core idea

A campaign platform usually stops mattering once governing starts.

OpenCandidate is built to make that harder.

A candidate publishes the platform they ran on as explicit decision rules:

- governing priorities
- fiscal approach
- accepted tradeoffs
- rejected tradeoffs
- public voice and reasoning frame

That platform becomes a public governing system. Bills, budgets, zoning votes, procurement choices, and other major decisions can be run through it. The officeholder stays in charge. Overrides stay possible. The difference is that overrides become part of the public record.

The point is not that AI is morally superior to people. The point is that politicians drift under pressure, and a public system is easier to audit than private influence.

## Narrative structure in this repo

The site is organized around one message:

- **Homepage**: what this is, why it exists, what runs through it, and how alignment works
- **Candidate pages**: fictional candidates whose campaign platforms have been turned into public governing systems
- **Brief**: concept memo explaining the mechanism
- **Create**: demo interface for drafting a campaign platform and decision rules
- **Updates**: project notes and framing
- **Involve**: ways to advise, fund, or run

## Project structure

- `app/page.tsx` — homepage
- `components/Hero.tsx` — homepage hero
- `app/candidate/[slug]/page.tsx` — candidate detail pages
- `app/brief/page.tsx` — web brief
- `scripts/brief.html` — source for the downloadable PDF brief
- `scripts/generate-pdf.mjs` — Puppeteer script to regenerate `public/opencandidate-brief.pdf`
- `app/create/page.tsx` — candidate / governing system builder
- `app/involve/page.tsx` — involvement page
- `app/updates/page.tsx` — updates page
- `lib/candidates.ts` — demo candidate data and AI system prompt assembly

## Development

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Build the site:

```bash
npm run build
```

Regenerate the brief PDF:

```bash
node scripts/generate-pdf.mjs
```

## Notes

This repo still uses the internal variable name `civicPrompt` in a few places. That is implementation detail. User-facing copy should refer to:

- campaign platform
- public governing system
- decision rules
- alignment
- override
- public record
