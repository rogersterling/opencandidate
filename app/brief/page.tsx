import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brief — OpenCandidate",
  description:
    "A concept memo on turning a campaign platform into a public governing system.",
};

const practiceItems = [
  {
    title: "Bill or ordinance",
    body: "A proposal lands on the agenda. The system checks it against the platform, surfaces the tradeoffs, and leaves a visible record of the recommendation.",
  },
  {
    title: "Budget vote",
    body: "A budget forces priorities into conflict. The public can see which promises were protected, which were deferred, and why.",
  },
  {
    title: "Override",
    body: "The officeholder can still break from the recommendation. The difference is that the break is named, explained, and preserved in public.",
  },
];

const needs = [
  "Candidates willing to bind themselves to the platform they ran on",
  "Advisors who know local government, campaigns, and implementation details",
  "Funders who want a governance mechanism, not another messaging project",
];

export default function BriefPage() {
  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between border-b border-[#1e293b] px-6 py-8 md:px-12 lg:px-24">
        <Link href="/" className="font-serif text-xl tracking-tight text-[#faf7f2]">
          Open<span className="text-[#d97706]">Candidate</span>
        </Link>
        <a
          href="/opencandidate-brief.pdf"
          download
          className="border border-[#d97706] px-4 py-2 text-sm text-[#d97706] transition-colors hover:bg-[#d97706] hover:text-[#0f172a]"
        >
          Download PDF
        </a>
      </header>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
          Concept memo
        </p>
        <h1 className="mb-8 max-w-4xl font-serif text-4xl leading-tight text-[#faf7f2] md:text-5xl lg:text-6xl">
          Hold politicians to the platform they ran on.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#94a3b8]">
          This page is the argument for the project. The homepage shows the mechanism. Candidate pages show the record. Here is the case for why any of it should exist.
        </p>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Problem
          </p>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">
            Politicians run on public promises and govern through private pressure. Voters see speeches, endorsements, and cleanup statements after the vote. They usually do not see the actual decision process when a donor calls, a caucus leans, or a budget hole opens up.
          </p>
          <p className="mt-6 leading-relaxed text-[#94a3b8]">
            The problem is not a shortage of values language. Campaigns already have plenty of that. The problem is that the platform stops mattering once governing starts.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Solution
          </p>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">
            Turn the campaign platform into a public governing system before or at the start of office. Publish the priorities, fiscal logic, decision rules, and accepted tradeoffs in a form that can be applied consistently.
          </p>
          <p className="mt-6 leading-relaxed text-[#94a3b8]">
            AI matters here because it can apply the same visible rules across repetitive public decisions without getting tired, flattered, pressured, or quietly captured. The officeholder is still human. The difference is that the reasoning trail is harder to hide.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Mechanism
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="shrink-0 font-serif text-2xl text-[#d97706]">1.</span>
              <p className="text-lg leading-relaxed text-[#cbd5e1]">
                The candidate publishes the platform as a structured set of priorities, tradeoffs, fiscal rules, and hard lines.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="shrink-0 font-serif text-2xl text-[#d97706]">2.</span>
              <p className="text-lg leading-relaxed text-[#cbd5e1]">
                OpenCandidate applies those rules to legislation, budgets, land use decisions, procurement, and major public commitments.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="shrink-0 font-serif text-2xl text-[#d97706]">3.</span>
              <p className="text-lg leading-relaxed text-[#cbd5e1]">
                The recommendation is public. If the officeholder overrides it, the override is public too.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="shrink-0 font-serif text-2xl text-[#d97706]">4.</span>
              <p className="text-lg leading-relaxed text-[#cbd5e1]">
                Over time, voters get a visible record instead of campaign nostalgia and retrospective excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Why this is less corruptible
          </p>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">
            The claim is narrow. A public system is harder to bend quietly than a private decision process.
          </p>
          <p className="mt-6 leading-relaxed text-[#94a3b8]">
            A politician can take a meeting, change course, and explain it later. A published system leaves traces. Changes to the rules are visible. Overrides are visible. Long-term drift is visible. That does not eliminate corruption. It raises the cost of hiding it.
          </p>
          <p className="mt-8 font-serif text-2xl leading-snug text-[#faf7f2]">
            Overrides are normal. Hidden overrides are the problem.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            What it looks like in practice
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {practiceItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1e293b] bg-[#111827]/40 p-6">
                <h3 className="mb-3 font-serif text-xl text-[#faf7f2]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Why local politics first
          </p>
          <p className="text-lg leading-relaxed text-[#cbd5e1]">
            Local government is where decisions are concrete enough to judge and small enough to implement. Budgets are legible. Zoning votes matter. Procurement matters. A city council member or mayor can actually choose to govern through a published system.
          </p>
          <p className="mt-6 leading-relaxed text-[#94a3b8]">
            The timing matters too. Language models are finally good enough to apply repetitive rules across messy public decision work. That makes this operational instead of theoretical.
          </p>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            What we need
          </p>
          <div className="space-y-4">
            {needs.map((item) => (
              <div key={item} className="flex gap-4">
                <span className="text-[#d97706]">→</span>
                <p className="text-lg text-[#cbd5e1]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#1e293b] px-6 py-12 md:flex-row md:items-center md:px-12 lg:px-24">
        <p className="text-sm text-[#94a3b8]">
          opencandidate.org · Public governing systems for real campaigns
        </p>
        <p className="text-sm text-[#94a3b8]">
          Contact: sam@runpoint.ai
        </p>
      </footer>
    </main>
  );
}
