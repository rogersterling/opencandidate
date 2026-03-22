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
    body: "A proposal lands on the agenda. The system applies the candidate's decision rules, shows the likely recommendation, and identifies where the proposal fits or conflicts with the campaign platform.",
  },
  {
    title: "Budget vote",
    body: "A budget forces tradeoffs. The system maps spending choices back to the published priorities and exposes where the officeholder is honoring or ignoring them.",
  },
  {
    title: "Override",
    body: "The politician can still depart from the recommendation. The difference is that the departure becomes visible, explained, and part of the public record.",
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
      <header className="px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between border-b border-[#1e293b]">
        <Link href="/" className="font-serif text-xl text-[#faf7f2] tracking-tight">
          Open<span className="text-[#d97706]">Candidate</span>
        </Link>
        <a
          href="/opencandidate-brief.pdf"
          download
          className="text-sm text-[#d97706] border border-[#d97706] px-4 py-2 hover:bg-[#d97706] hover:text-[#0f172a] transition-colors"
        >
          Download PDF
        </a>
      </header>

      <section className="px-6 md:px-12 lg:px-24 py-20">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
          Concept memo
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf7f2] leading-tight max-w-4xl mb-8">
          Hold politicians to the platform they ran on.
        </h1>
        <p className="text-[#94a3b8] text-lg leading-relaxed max-w-3xl">
          OpenCandidate turns a campaign platform into a public governing system. AI applies that system to real decisions. The officeholder remains human. The public gets a durable record of alignment, override, and drift.
        </p>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Problem
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            Politicians run on public promises and govern through private pressure. Voters see speeches, endorsements, and after-the-fact explanations. They do not see the actual decision process when a donor calls, a caucus leans, or an inconvenient vote shows up.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mt-6">
            The failure is not a lack of values language. Every campaign already has that. The failure is that the platform disappears once governing starts.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Solution
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            Turn the campaign platform into a public governing system before or at the start of office. Publish the priorities, fiscal logic, decision rules, and accepted tradeoffs in a form that can be applied consistently.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mt-6">
            AI is useful here for one reason. It can apply the same public rules over and over to bills, budgets, and major decisions without getting tired, flattered, pressured, or quietly bought off.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-4xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Mechanism
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">1.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                The candidate publishes the campaign platform as a structured set of decision rules, including priorities, budget posture, tradeoffs, and hard lines.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">2.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                OpenCandidate applies those rules to governing inputs: legislation, budget choices, land use decisions, procurement, and major public commitments.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">3.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                The recommendation and reasoning are visible. If the officeholder overrides the system, that override is logged and explained in the public record.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">4.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                Alignment can then be measured over time. Voters no longer have to guess whether the politician is still governing through the platform they ran on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Why this is less corruptible
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            The claim is not that software is morally superior to people. The claim is narrower. A public governing system is harder to bend quietly than a human operating alone.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mt-6">
            A politician can take a meeting, change course, and offer a vague explanation later. A public system leaves traces. Changes to the rules are visible. Overrides are visible. Long-term drift is visible. That does not eliminate corruption. It raises the cost of hiding it.
          </p>
          <p className="text-[#faf7f2] font-serif text-2xl leading-snug mt-8">
            Not every override is bad. Hidden overrides are.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-4xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            What it looks like in practice
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceItems.map((item) => (
              <div key={item.title} className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
                <h3 className="font-serif text-xl text-[#faf7f2] mb-3">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Why now and why local politics
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            Local government is where decisions are concrete enough to evaluate and small enough to implement. Budgets are legible. Zoning votes matter. Procurement matters. A city council member or mayor can actually choose to govern through a published system.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mt-6">
            The timing also matters. Language models are now good enough to apply rules across repetitive public decision work. That makes this operational, not theoretical.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            What we need
          </p>
          <div className="space-y-4">
            {needs.map((item) => (
              <div key={item} className="flex gap-4">
                <span className="text-[#d97706]">→</span>
                <p className="text-[#cbd5e1] text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[#94a3b8] text-sm">
          opencandidate.org · Public governing systems for real campaigns
        </p>
        <p className="text-[#94a3b8] text-sm">
          Contact: sam@runpoint.ai
        </p>
      </footer>
    </main>
  );
}
