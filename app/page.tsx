import Hero from "@/components/Hero";
import CandidateCard from "@/components/CandidateCard";
import SiteHeader from "@/components/SiteHeader";
import { candidates } from "@/lib/candidates";
import Link from "next/link";

const systemFlow = [
  {
    label: "Step 01",
    eyebrow: "PLATFORM",
    title: "Campaign platform",
    desc: "The candidate publishes a platform with actual priorities, tradeoffs, and constraints.",
  },
  {
    label: "Step 02",
    eyebrow: "SYSTEM",
    title: "Public governing system",
    desc: "That platform becomes a standing decision framework the public can inspect.",
  },
  {
    label: "Step 03",
    eyebrow: "RECOMMENDATION",
    title: "AI on a real decision",
    desc: "Bills, budgets, and votes get run through the framework before action is taken.",
  },
  {
    label: "Step 04",
    eyebrow: "ACTION + SCORE",
    title: "Politician acts in public",
    desc: "The public sees the recommendation, the actual vote, and the alignment score change.",
  },
];

const comparisonRows = [
  {
    label: "Campaign promises",
    normal: "Mostly slogans and broad themes.",
    open: "Published as explicit decision rules and tradeoffs.",
  },
  {
    label: "Decision process",
    normal: "Internal, improvised, and hard to inspect.",
    open: "Run through a public system before major action.",
  },
  {
    label: "Influence visibility",
    normal: "Pressure happens offstage.",
    open: "Departures show up against the published platform.",
  },
  {
    label: "Overrides",
    normal: "Often invisible or lightly explained.",
    open: "Allowed, but recorded with a public reason.",
  },
  {
    label: "Public record",
    normal: "Votes exist. Logic usually does not.",
    open: "Recommendation, action, and rationale live together.",
  },
  {
    label: "Accountability",
    normal: "Memory and vibes.",
    open: "A visible alignment score over time.",
  },
];

const decisionItems = [
  "Bills and ordinances",
  "Budgets and bond questions",
  "Land use and zoning votes",
  "Contract and procurement decisions",
  "Public statements tied to governing choices",
  "Constituent issues that force tradeoffs",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <Hero />

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl md:mb-12">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
              How it works
            </p>
            <h2 className="mb-4 font-serif text-3xl text-[#faf7f2] md:text-5xl">
              One public loop from promise to action.
            </h2>
            <p className="text-base leading-relaxed text-[#94a3b8] md:text-lg">
              This is not a chatbot for campaigning. It is a visible system for governing.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8">
            {systemFlow.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-[24px] border border-[#223046] bg-[#111827]/24 p-5 sm:p-6 lg:min-h-[190px] lg:rounded-none lg:border-0 lg:border-t lg:border-[#253247] lg:bg-transparent lg:px-0 lg:pb-0 lg:pr-4 lg:pt-6"
              >
                <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#64748b]">
                    {item.label}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#d97706]">
                    {item.eyebrow}
                  </p>
                </div>
                <h3 className="mb-3 max-w-[14rem] font-serif text-[1.75rem] leading-tight text-[#faf7f2] md:text-[1.85rem]">
                  {item.title}
                </h3>
                <p className="max-w-[16rem] text-sm leading-relaxed text-[#94a3b8]">
                  {item.desc}
                </p>
                {index < systemFlow.length - 1 && (
                  <div className="mt-4 flex h-6 w-6 items-center justify-center text-[#d97706] lg:hidden">
                    ↓
                  </div>
                )}
                {index < systemFlow.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-7 h-6 w-6 items-center justify-center text-[#d97706]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
              Worked example
            </p>
            <h2 className="mb-4 font-serif text-3xl text-[#faf7f2] md:text-4xl">
              What this looks like on a real vote.
            </h2>
            <p className="leading-relaxed text-[#94a3b8]">
              The point is not that AI decides. The point is that the public can compare what the platform implied to what the politician actually did.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.56)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.15),transparent_34%)] p-4 shadow-[0_20px_70px_rgba(2,6,23,0.26)] sm:p-6 md:p-8">
            <div className="flex flex-col gap-5 border-b border-[#243041] pb-5 sm:gap-6 sm:pb-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Example case</p>
                <h3 className="font-serif text-[1.75rem] text-[#faf7f2] sm:text-3xl">Stadium bond vote</h3>
              </div>
              <div className="rounded-2xl border border-[#223046] bg-[#0f172a]/50 px-4 py-4 md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-right">
                <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Score impact</p>
                <p className="font-serif text-3xl text-[#faf7f2] sm:text-4xl">91 → 78</p>
              </div>
            </div>

            <div className="mb-5 grid gap-4 py-5 sm:mb-6 sm:py-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-5 sm:p-6">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">PLATFORM</p>
                <p className="text-sm leading-relaxed text-[#cbd5e1]">No major debt without clear public ROI.</p>
              </div>
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-5 sm:p-6">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">RECOMMENDATION</p>
                <p className="text-sm leading-relaxed text-[#faf7f2]">Vote NO. Projected upside is speculative and fiscal exposure is real.</p>
              </div>
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-5 sm:p-6">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">ACTION</p>
                <p className="text-sm leading-relaxed text-amber-300">Politician voted YES.</p>
              </div>
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-5 sm:p-6">
                <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">OVERRIDE NOTE</p>
                <p className="text-sm leading-relaxed text-[#94a3b8]">I believed the economic upside justified the exception.</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#3b2a10] bg-[#1a140a]/48 p-5 sm:p-6">
              <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#fbbf24]">Why it matters</p>
              <p className="text-sm leading-relaxed text-[#f8e7c1]">
                The override might be reasonable. Fine. The important thing is that it is visible, explained, and scored against the published platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
              Why it exists
            </p>
            <h2 className="mb-4 max-w-xl font-serif text-3xl text-[#faf7f2] md:text-4xl">
              Politicians change under pressure. Usually where the public cannot see it.
            </h2>
            <p className="mb-4 max-w-xl leading-relaxed text-[#94a3b8]">
              Governing happens after the campaign, under time pressure, inside negotiations, and around incentives voters never get to inspect in real time.
            </p>
            <p className="max-w-xl leading-relaxed text-[#94a3b8]">
              OpenCandidate makes the drift legible. It does not assume software is wise. It assumes a public system is easier to audit than a private excuse.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {decisionItems.map((item) => (
              <div key={item} className="rounded-[24px] border border-[#1e293b] bg-[#111827]/26 p-5 sm:p-6">
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#64748b]">Runs through system</p>
                <p className="text-base leading-snug text-[#cbd5e1]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
              Comparison
            </p>
            <h2 className="mb-4 font-serif text-3xl text-[#faf7f2] md:text-4xl">
              Normal politician versus OpenCandidate.
            </h2>
            <p className="leading-relaxed text-[#94a3b8]">
              Same office. Different visibility.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#223046] bg-[#111827]/28">
            <div className="hidden border-b border-[#223046] bg-[#0f172a]/80 md:grid md:grid-cols-[220px_1fr_1fr]">
              <div className="p-5 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Measure</div>
              <div className="p-5 text-sm uppercase tracking-[0.2em] text-[#cbd5e1]">Normal politician</div>
              <div className="p-5 text-sm uppercase tracking-[0.2em] text-[#f8e7c1]">OpenCandidate</div>
            </div>

            <div className="grid gap-4 p-4 md:hidden">
              {comparisonRows.map((row) => (
                <div key={row.label} className="rounded-[24px] border border-[#223046] bg-[#0f172a]/70 p-4 sm:p-5">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#64748b]">{row.label}</p>
                  <div className="grid gap-3 text-sm">
                    <div className="rounded-xl border border-[#223046] bg-[#111827]/36 p-4">
                      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#94a3b8]">Normal politician</p>
                      <p className="leading-relaxed text-[#cbd5e1]">{row.normal}</p>
                    </div>
                    <div className="rounded-xl border border-[#3b2a10] bg-[#1a140a]/25 p-4">
                      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#d97706]">OpenCandidate</p>
                      <p className="leading-relaxed text-[#faf7f2]">{row.open}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              {comparisonRows.map((row, index) => (
                <div key={row.label} className={`grid grid-cols-[220px_1fr_1fr] ${index !== comparisonRows.length - 1 ? "border-b border-[#223046]" : ""}`}>
                  <div className="p-5 text-sm text-[#94a3b8]">{row.label}</div>
                  <div className="border-l border-[#223046] p-5 text-sm leading-relaxed text-[#cbd5e1]">{row.normal}</div>
                  <div className="border-l border-[#223046] bg-[#1a140a]/25 p-5 text-sm leading-relaxed text-[#faf7f2]">{row.open}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 font-serif text-3xl text-[#faf7f2] md:text-4xl">
            Demo candidates
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-[#64748b] md:mb-12">
            Three fictional Austin candidates. Three different published platforms. Three different public accountability loops.
          </p>
          <div>
            {candidates.map((c) => (
              <CandidateCard key={c.slug} candidate={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-20 text-center sm:px-6 md:px-12 md:py-24 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto mb-6 max-w-3xl font-serif text-3xl text-[#faf7f2] md:text-5xl">
            Turn a campaign platform into a public governing system.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[#94a3b8] md:mb-10">
            Define the platform. Publish the rules. Show the recommendation. Record the action. Keep score.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/create"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d97706] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b45309] md:px-8 md:py-4"
            >
              Build a governing system
            </Link>
            <Link
              href="/involve"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#d97706] px-6 py-3 text-sm font-medium text-[#d97706] transition-colors hover:bg-[#d97706] hover:text-white md:px-8 md:py-4"
            >
              Get involved
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#1e293b] px-4 py-12 text-xs text-[#475569] sm:px-6 md:px-12 sm:flex-row sm:items-center lg:px-24">
        <span>OpenCandidate is an open project for candidates who want to govern through a public record instead of private drift.</span>
        <div className="flex gap-4">
          <Link href="/updates" className="transition-colors hover:text-[#94a3b8]">Updates</Link>
          <Link href="/involve" className="transition-colors hover:text-[#94a3b8]">Get Involved</Link>
        </div>
      </footer>
    </main>
  );
}
