# OpenCandidate

Read SPEC.md for the full project spec. Read CANDIDATES.md for the three sample candidates.

## Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- OpenAI API for chat (use OPENAI_API_KEY env var, or fallback to a mock response for dev)

## Design
Follow the GPT-5.4 frontend skill approach:
- Full-bleed hero, poster-like first viewport
- Two typefaces max: serif for headlines (use Google Fonts, something like Playfair Display or Newsreader), clean sans for body (Inter or similar)
- Color: dark navy/slate (#0f172a range) + warm amber accent (#d97706 range) + warm off-white (#faf7f2)
- Cardless layouts by default
- Strong visual hierarchy, sparse copy
- 2-3 intentional motions (fade-in on scroll, smooth chat transitions)
- Restrained, premium, institutional-but-modern feel
- Mobile responsive

## Chat Implementation
- Use the OpenAI chat completions API with streaming
- Each candidate's system prompt is defined in lib/candidates.ts
- The civic prompt is both displayed on the page AND used as the actual system prompt
- Stream responses for good UX
- Use Vercel AI SDK (@ai-sdk/openai + ai package) for streaming chat

## Important
- No placeholder images or decorative gradients. Use typography, whitespace, and color for visual impact.
- The landing page should feel like a manifesto, not a SaaS product page.
- Keep the code clean and simple. V1 doesn't need a database.
