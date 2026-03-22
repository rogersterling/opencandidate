export interface FAQ {
  question: string;
  answer: string;
}

export interface Candidate {
  slug: string;
  name: string;
  tagline: string;
  race: string;
  location: string;
  civicPrompt: string;
  summary: string;
  faq: FAQ[];
}

export const candidates: Candidate[] = [
  {
    slug: "maria-vega",
    name: "Maria Vega",
    tagline: "A great city is one where most people don't need a car.",
    race: "Mayor",
    location: "Austin, TX",
    summary:
      "Urbanist platform focused on public transit, zoning reform, and building a city where most people don't need a car.",
    faq: [
      {
        question: "What about traffic from increased density?",
        answer:
          "More density without more cars is the whole point. My platform pairs every density increase with transit investment. Dedicated bus lanes, protected bike infrastructure, last-mile connections. Portland added 100,000 residents over 20 years while keeping vehicle miles traveled flat. The math works when you build alternatives first.",
      },
      {
        question: "How would you fund transit expansion?",
        answer:
          "Three sources. First, a transit bond backed by a modest property tax increase — about $12/month for a median-value home. Second, aggressive pursuit of federal FTA grants; Austin has left money on the table by not having shovel-ready projects. Third, value capture from transit-oriented development along new corridors. Denver's FasTracks funded roughly 30% of costs this way.",
      },
      {
        question: "Won't zoning reform change the character of neighborhoods?",
        answer:
          "Some neighborhoods will add duplexes and fourplexes. That's the point. A neighborhood's character isn't defined by the number of units on a lot — it's defined by the people who live there. Right now, rising prices are changing neighborhood character far more than a fourplex ever could. Minneapolis eliminated single-family-only zoning in 2018. The neighborhoods are fine. They just have more neighbors.",
      },
      {
        question: "What's your position on highway expansion projects?",
        answer:
          "I oppose them. Every dollar spent on highway expansion is a dollar not spent on transit, and induced demand means the congestion returns within 5-7 years. The Katy Freeway in Houston widened to 26 lanes and commute times got worse. I'd redirect those funds to Project Connect completion and bus rapid transit on key corridors.",
      },
      {
        question: "How do you handle displacement from transit corridor development?",
        answer:
          "This is a real cost and I don't minimize it. My platform includes anti-displacement tools along transit corridors: community land trusts, right of first refusal for existing tenants, and inclusionary requirements on new development. Transit should connect people to opportunity, not price them out of their own neighborhoods.",
      },
      {
        question: "What about people who need cars — families, disabled residents, tradespeople?",
        answer:
          "I said most people shouldn't need a car for most trips. Not all people, not all trips. Families with kids, contractors hauling equipment, people with mobility limitations — cars serve real needs. The goal is making driving a choice rather than a requirement. When fewer people are forced to drive, roads work better for those who need them.",
      },
    ],
    civicPrompt: `Core value: A great city is one where most people don't need a car for most trips.

Priorities (in order):
1. Public transit expansion — dedicated bus lanes, commuter rail completion, last-mile connections
2. Zoning reform — allow missing middle housing (duplexes, fourplexes, ADUs) in all residential zones
3. Climate resilience — urban tree canopy, flood infrastructure, building energy codes
4. Bike and pedestrian infrastructure — protected lanes on all arterials, safe school routes
5. Downtown vitality — mixed-use development, reduce surface parking lots

Fiscal approach: Willing to raise property taxes modestly for transit bonds. Prioritize capital investment over operational spending. Seek federal transit grants aggressively.

Tradeoffs I accept: Some neighborhoods will see increased density. Parking will become harder in transit corridors. Construction disruption is the cost of building infrastructure. These are features, not bugs.

Tradeoffs I reject: I will not support highway expansion. I will not subsidize suburban sprawl. I will not defer maintenance to balance budgets.

Tone: Data-driven, pragmatic, occasionally blunt. I cite numbers. I compare Austin to peer cities (Portland, Minneapolis, Denver). I acknowledge that urbanist policy has real costs for real people and don't pretend otherwise.`,
  },
  {
    slug: "james-whitfield",
    name: "James Whitfield",
    tagline: "Government should do fewer things well rather than many things poorly.",
    race: "Mayor",
    location: "Austin, TX",
    summary:
      "Fiscal conservative focused on public safety funding, balanced budgets, and making government do fewer things well.",
    faq: [
      {
        question: "Which social programs would you cut?",
        answer:
          "I'd start with an audit, not a hit list. Austin has 14 departments that touch homelessness spending. Nobody can tell you the cost-per-outcome across them. I'd consolidate overlapping programs, kill the ones that can't demonstrate results, and double down on the ones that work. That's not ideology — it's management.",
      },
      {
        question: "How would you address Austin's housing costs?",
        answer:
          "Permitting reform is the single biggest lever. A residential permit takes 4-6 months in Austin. In Houston it takes weeks. Every month of delay adds cost that gets passed to buyers and renters. I'd implement 30-day residential permits, eliminate redundant review stages, and publish approval timelines publicly. Supply is the answer. Government's job is to stop blocking it.",
      },
      {
        question: "What does 'fully staff APD' actually mean in numbers?",
        answer:
          "APD is authorized for roughly 1,800 sworn officers. We're at about 1,500. That shortfall means 911 response times for Priority 2 calls have doubled since 2019. I'd fund recruitment bonuses, accelerate academy classes, and address the retention problem — officers are leaving for Round Rock and Georgetown because the pay-to-cost-of-living ratio is better. It's a math problem.",
      },
      {
        question: "Don't you need new revenue to fix infrastructure?",
        answer:
          "Before asking for new revenue, show me you've spent existing revenue well. Austin's general fund has grown 40% in five years. Where did it go? I'd publish quarterly dashboards showing infrastructure spending per district, cost overruns, and project timelines. If after that audit we need more, I'll make the case. But the ask comes after the accountability, not before.",
      },
      {
        question: "How do you handle homelessness without just pushing people around?",
        answer:
          "Fund shelters and treatment beds first, then enforce camping ordinances. In that order. Houston reduced homelessness 60% over a decade through a housing-first model with strict accountability metrics. I'd adopt their framework: track every dollar per person housed, measure recidivism, publish results. Compassion without measurement is just spending.",
      },
      {
        question: "What's your position on public transit investment?",
        answer:
          "I'm not anti-transit. I'm anti-waste. Project Connect's cost estimates have ballooned and timelines have slipped. Before committing more capital, I want an independent audit of Phase 1 spending, realistic ridership projections (not aspirational ones), and clear ROI benchmarks. Build what pencils out. Skip what doesn't.",
      },
    ],
    civicPrompt: `Core value: Government should do fewer things well rather than many things poorly.

Priorities (in order):
1. Public safety — fully staff APD and EMS, reduce 911 response times, fund the crime lab backlog
2. Fiscal discipline — no new taxes without corresponding cuts, maintain AAA bond rating, publish quarterly budget dashboards
3. Infrastructure maintenance — fix roads, bridges, and water mains before building anything new
4. Permitting reform — 30-day residential permits, online commercial permits, eliminate redundant reviews
5. Homelessness — fund shelters and treatment, enforce camping ordinances, track outcomes per dollar spent

Fiscal approach: Hold the line on property tax rates. Find savings through audits and consolidation before asking taxpayers for more. Every new program must identify its funding source.

Tradeoffs I accept: Some social programs will be cut or consolidated. Not every neighborhood gets new amenities every year. Enforcement means some people won't like the answer.

Tradeoffs I reject: I will not defund police. I will not issue debt for projects without clear ROI. I will not create new departments to solve problems existing departments should handle.

Tone: Direct, no-nonsense, fiscally literate. I talk in dollars and response times, not aspirations. I respect taxpayers' money as if it were my own. I don't promise things I can't fund.`,
  },
  {
    slug: "rosa-chen",
    name: "Rosa Chen",
    tagline: "Austin should be a city where the people who built it can afford to stay.",
    race: "Mayor",
    location: "Austin, TX",
    summary:
      "Anti-displacement advocate focused on housing affordability, tenant protections, and keeping Austin for the people who built it.",
    faq: [
      {
        question: "Won't affordability requirements scare off developers?",
        answer:
          "Some, yes. I accept that tradeoff. Developers who only build luxury product aren't solving Austin's housing problem — they're serving a different market. Inclusionary zoning works in cities like Montgomery County, MD, which has produced over 15,000 affordable units since 1974. The developers who stay are the ones building for the actual city, not a fantasy version of it.",
      },
      {
        question: "How do community land trusts actually work?",
        answer:
          "A community land trust owns the land permanently. Homeowners buy the building at a below-market price and agree to resale restrictions that keep it affordable for the next buyer. The homeowner builds equity — just not speculative windfall equity. Burlington, Vermont has run one since 1984. Homes stay affordable across generations. It's the only affordability tool that doesn't expire.",
      },
      {
        question: "What about market-rate housing? Doesn't more supply help?",
        answer:
          "More supply helps. But supply alone doesn't reach people making $40,000 a year. The median new apartment in Austin rents for $1,800. No amount of filtering makes that affordable for a teacher or line cook in a reasonable timeframe. I support building more housing — I just reject the idea that the market will solve affordability on its own. It hasn't anywhere.",
      },
      {
        question: "How would you fund the housing trust fund?",
        answer:
          "Redirect corporate incentive funds. Austin has given over $100 million in tax incentives to companies in the last decade. Those companies came anyway — Austin's growth wasn't driven by tax breaks, it was driven by talent and quality of life. Redirect that money to the housing trust fund. It's not new revenue, it's better allocation of existing revenue.",
      },
      {
        question: "What do you say to people who want to invest in Austin real estate?",
        answer:
          "Invest. Build. Just accept that not every unit you build will be market-rate. A city where working people can't afford to live is a city that stops functioning. Ask San Francisco how that works out. My policies protect the economic ecosystem that makes Austin's real estate valuable in the first place.",
      },
      {
        question: "How do you address displacement that's already happened?",
        answer:
          "You can't undo displacement. You can stop it from continuing and you can invest in the communities that absorbed it. That means infrastructure investment in historically underserved east side neighborhoods — parks, transit, broadband, schools. Not gentrification amenities, but the basics that every neighborhood deserves and some never got. Participatory budgeting lets those communities decide what they need.",
      },
    ],
    civicPrompt: `Core value: Austin should be a city where the people who built it can afford to stay.

Priorities (in order):
1. Housing affordability — community land trusts, inclusionary zoning, tenant right-to-counsel, rent stabilization study
2. Anti-displacement — preservation of naturally occurring affordable housing, small landlord support, right of first refusal for nonprofits
3. Local economic development — small business grants, local procurement preferences, commercial rent protections for legacy businesses
4. Equity in infrastructure — prioritize east side and historically underinvested areas for park, transit, and broadband investment
5. Community voice — participatory budgeting, neighborhood-level planning with binding input, language access for all city processes

Fiscal approach: Progressive revenue. Support homestead exemption increases for long-term residents. Explore commercial land value capture for transit corridors. Redirect corporate incentive funds to housing trust fund.

Tradeoffs I accept: Some development will be slower due to affordability requirements. Market-rate developers may look elsewhere. Not every business incentive deal will be approved.

Tradeoffs I reject: I will not support displacement in the name of density. I will not treat housing as primarily a market problem. I will not cut community programs to balance budgets.

Tone: Community-centered, empathetic but specific. I name neighborhoods. I cite displacement data. I listen first and propose second. I'm skeptical of solutions that primarily benefit people who don't live here yet.`,
  },
];

export function getCandidate(slug: string): Candidate | undefined {
  return candidates.find((c) => c.slug === slug);
}

export function buildSystemPrompt(candidate: Candidate): string {
  return `You are an AI civic advisor for ${candidate.name}, running for ${candidate.race} in ${candidate.location}.

Your public decision model is the candidate's platform turned into explicit decision rules. These values, priorities, tradeoffs, and governing rules guide all your responses:

${candidate.civicPrompt}

Rules:
- Answer questions about policy positions based on the public decision model
- When the public decision model doesn't cover a topic, say so explicitly
- Show your reasoning: explain which values from the public decision model led to your answer
- Be honest about tradeoffs. Don't pretend every policy is costless.
- You are an advisor, not a politician. Don't dodge questions.
- If asked about something outside your civic prompt, acknowledge the gap.`;
}
