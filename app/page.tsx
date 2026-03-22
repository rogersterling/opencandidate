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

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
              How it works
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#faf7f2] mb-4">
              One public loop from promise to action.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
              This is not a chatbot for campaigning. It is a visible system for governing.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-x-8 gap-y-8">
            {systemFlow.map((item, index) => (
              <div key={item.title} className="relative border-t border-[#253247] pt-6 md:pt-7 pr-4 min-h-[190px]">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em]">{item.label}</p>
                  <p className="text-[#d97706] text-[11px] uppercase tracking-[0.22em]">{item.eyebrow}</p>
                </div>
                <h3 className="font-serif text-[1.85rem] text-[#faf7f2] mb-3 max-w-[14rem] leading-tight">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed max-w-[16rem]">{item.desc}</p>
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

      <section className="px-6 py-20 md:px-12 lg:px-24 border-t border-[#1e293b]">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          <div className="max-w-xl">
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
              Worked example
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
              What this looks like on a real vote.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              The point is not that AI decides. The point is that the public can compare what the platform implied to what the politician actually did.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.56)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.15),transparent_34%)] p-6 shadow-[0_20px_70px_rgba(2,6,23,0.26)] md:p-8">
            <div className="flex flex-col gap-6 border-b border-[#243041] pb-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-2">Example case</p>
                <h3 className="font-serif text-3xl text-[#faf7f2]">Stadium bond vote</h3>
              </div>
              <div className="md:text-right">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-2">Score impact</p>
                <p className="font-serif text-4xl text-[#faf7f2]">91 → 78</p>
              </div>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#223046] bg-[#0f172a]/62 p-6">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.18em] mb-3">PLATFORM</p>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">No major debt without clear public ROI.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#223046] bg-[#0f172a]/62 p-6">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.18em] mb-3">RECOMMENDATION</p>
                <p className="text-[#faf7f2] text-sm leading-relaxed">Vote NO. Projected upside is speculative and fiscal exposure is real.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#223046] bg-[#0f172a]/62 p-6">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.18em] mb-3">ACTION</p>
                <p className="text-amber-300 text-sm leading-relaxed">Politician voted YES.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#223046] bg-[#0f172a]/62 p-6">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.18em] mb-3">OVERRIDE NOTE</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">I believed the economic upside justified the exception.</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#3b2a10] bg-[#1a140a]/48 p-6">
              <p className="text-[#fbbf24] text-[11px] uppercase tracking-[0.18em] mb-2">Why it matters</p>
              <p className="text-[#f8e7c1] text-sm leading-relaxed">
                The override might be reasonable. Fine. The important thing is that it is visible, explained, and scored against the published platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24 border-t border-[#1e293b]">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          <div>
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
              Why it exists
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4 max-w-xl">
              Politicians change under pressure. Usually where the public cannot see it.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4 max-w-xl">
              Governing happens after the campaign, under time pressure, inside negotiations, and around incentives voters never get to inspect in real time.
            </p>
            <p className="text-[#94a3b8] leading-relaxed max-w-xl">
              OpenCandidate makes the drift legible. It does not assume software is wise. It assumes a public system is easier to audit than a private excuse.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {decisionItems.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#1e293b] bg-[#111827]/26 p-6">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-3">Runs through system</p>
                <p className="text-[#cbd5e1] text-base leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-10">
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
              Comparison
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
              Normal politician versus OpenCandidate.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              Same office. Different visibility.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-[#223046] bg-[#111827]/28">
            <div className="hidden md:grid grid-cols-[220px_1fr_1fr] border-b border-[#223046] bg-[#0f172a]/80">
              <div className="p-5 text-[#64748b] text-[11px] uppercase tracking-[0.22em]">Measure</div>
              <div className="p-5 text-[#cbd5e1] text-sm uppercase tracking-[0.2em]">Normal politician</div>
              <div className="p-5 text-[#f8e7c1] text-sm uppercase tracking-[0.2em]">OpenCandidate</div>
            </div>

            <div className="md:hidden grid gap-4 p-4">
              {comparisonRows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-[#223046] bg-[#0f172a]/70 p-5">
                  <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-3">{row.label}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-[#94a3b8] uppercase tracking-[0.18em] text-[11px] mb-1">Normal politician</p>
                      <p className="text-[#cbd5e1] leading-relaxed">{row.normal}</p>
                    </div>
                    <div>
                      <p className="text-[#d97706] uppercase tracking-[0.18em] text-[11px] mb-1">OpenCandidate</p>
                      <p className="text-[#faf7f2] leading-relaxed">{row.open}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              {comparisonRows.map((row, index) => (
                <div key={row.label} className={`grid grid-cols-[220px_1fr_1fr] ${index !== comparisonRows.length - 1 ? "border-b border-[#223046]" : ""}`}>
                  <div className="p-5 text-[#94a3b8] text-sm">{row.label}</div>
                  <div className="p-5 text-[#cbd5e1] text-sm leading-relaxed border-l border-[#223046]">{row.normal}</div>
                  <div className="p-5 text-[#faf7f2] text-sm leading-relaxed border-l border-[#223046] bg-[#1a140a]/25">{row.open}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
            Demo candidates
          </h2>
          <p className="text-[#64748b] text-sm mb-12 max-w-2xl">
            Three fictional Austin candidates. Three different published platforms. Three different public accountability loops.
          </p>
          <div>
            {candidates.map((c) => (
              <CandidateCard key={c.slug} candidate={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b] text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl md:text-5xl text-[#faf7f2] mb-6 max-w-3xl mx-auto">
            Turn a campaign platform into a public governing system.
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
            Define the platform. Publish the rules. Show the recommendation. Record the action. Keep score.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/create"
              className="inline-block px-8 py-4 bg-[#d97706] text-white text-sm font-medium rounded-lg hover:bg-[#b45309] transition-colors"
            >
              Build a governing system
            </Link>
            <Link
              href="/involve"
              className="inline-block px-8 py-4 border border-[#d97706] text-[#d97706] text-sm font-medium rounded-lg hover:bg-[#d97706] hover:text-white transition-colors"
            >
              Get involved
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span>OpenCandidate is an open project for candidates who want to govern through a public record instead of private drift.</span>
        <div className="flex gap-4">
          <Link href="/updates" className="hover:text-[#94a3b8] transition-colors">Updates</Link>
          <Link href="/involve" className="hover:text-[#94a3b8] transition-colors">Get Involved</Link>
        </div>
      </footer>
    </main>
  );
}
