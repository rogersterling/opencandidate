# OpenCandidate — Project Spec

## What is this?

OpenCandidate is a platform that makes political decision-making transparent by putting AI at the center of civic governance. Instead of trusting politicians with hidden motivations, voters evaluate a public "civic prompt" — the explicit set of values and priorities that drive an AI advisor's recommendations.

A human proxy candidate runs for office. Their AI advisor's entire reasoning is public. Citizens can talk to the AI directly, challenge its positions, and evaluate whether the civic prompt reflects their values.

**The core insight: every politician already has a hidden prompt (donors, ideology, ambition, grudges). OpenCandidate just makes the prompt readable.**

## V1 Scope

### Pages

1. **Landing page** (`/`)
   - Hero explaining the concept
   - "Transparency, not objectivity" framing
   - How it works (3 steps: civic prompt → AI advisor → public dialogue)
   - Sample candidates preview
   - "Create your own" CTA

2. **Candidate page** (`/candidate/[slug]`)
   - Candidate name, race, location
   - Full civic prompt displayed (the actual system prompt powering the AI)
   - Chat interface to talk to the candidate's AI
   - The AI answers questions based on the civic prompt + its training data
   - Conversation is per-user (no auth needed, just local state)

3. **Create page** (`/create`)
   - Pick a race (mayor, city council, school board, governor, etc.)
   - Pick a location
   - Write or customize a civic prompt (provide starter templates)
   - Preview the AI's responses
   - Deploy (V1: generates a shareable URL, no persistence needed beyond session)

### Sample Candidates (Austin Mayor)

Three fictional candidates with different civic prompts:

**1. Maria Vega** — "Transit & Density"
- Urbanist platform: public transit investment, upzoning, bike infrastructure
- Civic prompt emphasizes: mobility, density, climate, walkable neighborhoods
- Pragmatic tone, data-driven

**2. James Whitfield** — "Safe & Solvent"  
- Fiscal conservative: public safety funding, balanced budgets, infrastructure maintenance
- Civic prompt emphasizes: police staffing, fiscal responsibility, road repair, permitting reform
- Straight-talking, no-nonsense tone

**3. Rosa Chen** — "Affordable Austin"
- Anti-displacement: housing affordability, tenant protections, community land trusts
- Civic prompt emphasizes: affordability, equity, displacement prevention, local business support
- Community-centered, empathetic tone

### Technical Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Chat:** OpenAI API (GPT-5.4 or latest available)
- **Deployment:** Vercel
- **Domain:** opencandidate.org
- **Repo:** github.com/rogersterling/opencandidate

### Design Direction (GPT-5.4 Frontend Skill)

Follow the OpenAI frontend skill guidelines:
- Full-bleed hero, strong composition, treat first viewport as a poster
- Two typefaces max, one accent color
- Cardless layouts by default
- Strong visual hierarchy, sparse copy
- Real visual anchor (not decorative gradients)
- Motion: 2-3 intentional animations
- Restrained, premium feel
- Mobile responsive

**Color direction:** Civic/institutional but modern. Think dark navy/slate + warm accent (amber or warm white). Not government-boring, not startup-flashy.

**Typography:** Something with authority. Serif for headlines (like a newspaper editorial), clean sans for body.

### Chat Implementation

Each candidate has a system prompt structured as:

```
You are an AI civic advisor for [Candidate Name], running for [Race] in [Location].

Your civic prompt (the values and priorities that guide all your responses):

[THE CIVIC PROMPT - fully visible to voters on the candidate page]

Rules:
- Answer questions about policy positions based on your civic prompt
- When the civic prompt doesn't cover a topic, say so explicitly
- Show your reasoning: explain which values from the civic prompt led to your answer
- Be honest about tradeoffs. Don't pretend every policy is costless.
- You are an advisor, not a politician. Don't dodge questions.
- If asked about something outside your civic prompt, acknowledge the gap.
```

### What V1 does NOT include
- User accounts / auth
- Real city data integration
- Persistent conversation storage (beyond session)
- Actual campaign infrastructure
- Voter verification
- Database (everything is static + API calls)

## File Structure

```
opencandidate/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Landing page
│   ├── candidate/
│   │   └── [slug]/
│   │       └── page.tsx            # Candidate page with chat
│   ├── create/
│   │   └── page.tsx                # Create your own
│   └── api/
│       └── chat/
│           └── route.ts            # Chat API (streams responses)
├── components/
│   ├── Chat.tsx
│   ├── CivicPrompt.tsx
│   ├── CandidateCard.tsx
│   └── Hero.tsx
├── lib/
│   ├── candidates.ts               # Sample candidate data
│   └── openai.ts                    # OpenAI client setup
├── public/
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── CLAUDE.md
```
