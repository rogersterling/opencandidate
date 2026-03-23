import Hero from "@/components/Hero";
import CandidateCard from "@/components/CandidateCard";
import SiteHeader from "@/components/SiteHeader";
import { candidates } from "@/lib/candidates";
import Link from "next/link";

const systemFlow = [
  {
    label: "Step 01",
    title: "Publish the platform",
    desc: "Priorities, tradeoffs, and constraints are stated plainly.",
  },
  {
    label: "Step 02",
    title: "Run a real decision",
    desc: "A vote or budget choice gets tested against that platform.",
  },
  {
    label: "Step 03",
    title: "Show the action",
    desc: "The public sees the recommendation next to what happened.",
  },
  {
    label: "Step 04",
    title: "Track the record",
    desc: "Patterns matter more than one good speech after the fact.",
  },
];

const comparisonRows = [
  {
    label: "Campaign promises",
    normal: "Mostly slogans and broad themes.",
    open: "Published as clear decision rules and tradeoffs.",
  },
  {
    label: "Decision process",
    normal: "Internal and hard to inspect.",
    open: "Major actions are checked against a public framework.",
  },
  {
    label: "Overrides",
    normal: "Often invisible or thinly explained.",
    open: "Allowed, but recorded with a public reason.",
  },
  {
    label: "Public record",
    normal: "Votes exist. Logic usually does not.",
    open: "Recommendation, action, and rationale live together.",
  },
];

const decisionItems = [
  "Bills and ordinances",
  "Budgets and bond questions",
  "Land use and zoning votes",
  "Contracts and procurement",
  "Public statements tied to governing choices",
  "Constituent issues with real tradeoffs",
];

const sectionClass = "border-t border-[#1e293b] px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-24";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <Hero />

      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#d97706]">
              How it works
            </p>
            <h2 className="mb-3 font-serif text-3xl text-[#faf7f2] md:text-5xl">
              One public loop from promise to action.
            </h2>
            <p className="text-base leading-7 text-[#94a3b8] md:text-lg">
              The homepage explains the mechanism. Candidate pages show it under pressure.
            </p>
          </div>

          <div className="grid gap-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
            {systemFlow.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-[#223046] bg-[#111827]/24 p-4 sm:p-5 lg:min-h-[176px]"
              >
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#d97706]">
                  {item.label}
                </p>
                <h3 className="mb-2 font-serif text-[1.5rem] leading-tight text-[#faf7f2] md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[#94a3b8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#d97706]">
              Worked example
            </p>
            <h2 className="mb-3 font-serif text-3xl text-[#faf7f2] md:text-4xl">
              One clear vote is enough to make the idea concrete.
            </h2>
            <p className="leading-7 text-[#94a3b8]">
              The point is not that AI decides. The point is that the public can compare what the platform implied to what the politician actually did.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.56)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.12),transparent_34%)] p-4 shadow-[0_20px_70px_rgba(2,6,23,0.24)] sm:p-6 md:p-7">
            <div className="border-b border-[#243041] pb-4 sm:pb-5">
              <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Example case</p>
              <h3 className="font-serif text-[1.75rem] text-[#faf7f2] sm:text-3xl">Stadium bond vote</h3>
            </div>

            <div className="grid gap-3 py-4 sm:gap-4 sm:py-5">
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-4 sm:p-5">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Published rule</p>
                <p className="text-sm leading-6 text-[#cbd5e1]">No major debt without clear public ROI.</p>
              </div>
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-4 sm:p-5">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Recommendation</p>
                <p className="text-sm leading-6 text-[#faf7f2]">Vote no. Projected upside is speculative and fiscal exposure is real.</p>
              </div>
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-4 sm:p-5">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Action</p>
                <p className="text-sm leading-6 text-amber-300">Voted yes.</p>
              </div>
              <div className="rounded-[24px] border border-[#223046] bg-[#0f172a]/62 p-4 sm:p-5">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Public note</p>
                <p className="text-sm leading-6 text-[#94a3b8]">Economic upside justified the exception.</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#223046] bg-[#111827]/28 p-4 sm:p-5">
              <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">What changes over time</p>
              <p className="text-sm leading-6 text-[#94a3b8]">
                One vote is a record. A sequence of votes becomes a pattern people can actually judge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#d97706]">
              What belongs in scope
            </p>
            <h2 className="mb-3 max-w-xl font-serif text-3xl text-[#faf7f2] md:text-4xl">
              Use it where governing choices are concrete enough to inspect.
            </h2>
            <p className="mb-4 max-w-xl leading-7 text-[#94a3b8]">
              The system is most useful when there is a real decision, a visible tradeoff, and a public consequence.
            </p>
            <p className="max-w-xl leading-7 text-[#94a3b8]">
              It is not there to narrate every press release. It is there to create a clean record where drift usually hides.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#223046] bg-[#111827]/24 p-5 sm:p-6">
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {decisionItems.map((item) => (
                <li key={item} className="rounded-[20px] border border-[#1e293b] bg-[#0f172a]/40 px-4 py-3 text-sm leading-6 text-[#cbd5e1]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#d97706]">
              Comparison
            </p>
            <h2 className="mb-3 font-serif text-3xl text-[#faf7f2] md:text-4xl">
              Normal politician versus OpenCandidate.
            </h2>
            <p className="leading-7 text-[#94a3b8]">
              Same office. Different visibility.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#223046] bg-[#111827]/28">
            <div className="grid gap-3 p-4 md:hidden">
              {comparisonRows.map((row) => (
                <div key={row.label} className="rounded-[24px] border border-[#223046] bg-[#0f172a]/70 p-4">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#64748b]">{row.label}</p>
                  <div className="grid gap-2 text-sm">
                    <div className="rounded-xl border border-[#223046] bg-[#111827]/36 p-3">
                      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#94a3b8]">Normal</p>
                      <p className="leading-6 text-[#cbd5e1]">{row.normal}</p>
                    </div>
                    <div className="rounded-xl border border-[#3b2a10] bg-[#1a140a]/25 p-3">
                      <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#d97706]">OpenCandidate</p>
                      <p className="leading-6 text-[#faf7f2]">{row.open}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden border-b border-[#223046] bg-[#0f172a]/80 md:grid md:grid-cols-[220px_1fr_1fr]">
              <div className="p-5 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Measure</div>
              <div className="p-5 text-sm uppercase tracking-[0.2em] text-[#cbd5e1]">Normal politician</div>
              <div className="p-5 text-sm uppercase tracking-[0.2em] text-[#f8e7c1]">OpenCandidate</div>
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

      <section className={sectionClass}>
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 font-serif text-3xl text-[#faf7f2] md:text-4xl">
            Demo candidates
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-6 text-[#64748b] md:mb-8">
            Three fictional Austin candidates. Three different governing logics. Three different public records.
          </p>
          <div>
            {candidates.map((c) => (
              <CandidateCard key={c.slug} candidate={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 text-center sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto mb-4 max-w-3xl font-serif text-3xl text-[#faf7f2] md:text-5xl">
            Turn a campaign platform into a public governing system.
          </h2>
          <p className="mx-auto mb-6 max-w-2xl leading-7 text-[#94a3b8] md:mb-8">
            Define the platform. Publish the rules. Show the recommendation. Record the action. Let the public judge the pattern.
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

      <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#1e293b] px-4 py-12 text-xs text-[#475569] sm:flex-row sm:items-center sm:px-6 md:px-12 lg:px-24">
        <span>OpenCandidate is an open project for candidates who want to govern through a public record instead of private drift.</span>
        <div className="flex gap-4">
          <Link href="/updates" className="transition-colors hover:text-[#94a3b8]">Updates</Link>
          <Link href="/involve" className="transition-colors hover:text-[#94a3b8]">Get Involved</Link>
        </div>
      </footer>
    </main>
  );
}
