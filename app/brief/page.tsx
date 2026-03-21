import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brief — OpenCandidate",
  description:
    "What if every politician's priorities were source code? A brief on transparent governance.",
};

export default function BriefPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
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

      {/* Headline */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
          opencandidate.org
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf7f2] leading-tight max-w-3xl mb-8">
          What if every politician&apos;s priorities were source code?
        </h1>
      </section>

      {/* The Problem */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            The Problem
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            Politicians campaign on values, then govern in a black box. Voters reverse-engineer
            priorities from votes, donor lists, and press conferences. By the time a contradiction
            surfaces, the next election is years away.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            The Solution
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            OpenCandidate is an open standard for political transparency. Candidates publish a
            &quot;civic prompt&quot; &mdash; a machine-readable set of values, priorities, and tradeoffs. An
            AI advisor reasons against that prompt in public. Citizens can interrogate it directly.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            How It Works
          </p>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">1.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                Candidate publishes their civic prompt &mdash; priorities in order, fiscal philosophy,
                accepted and rejected tradeoffs.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">2.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                An AI advisor answers policy questions publicly, with full reasoning chains traced
                back to the prompt.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="font-serif text-2xl text-[#d97706] shrink-0">3.</span>
              <p className="text-[#cbd5e1] text-lg leading-relaxed">
                Citizens challenge the AI on edge cases. Contradictions surface before votes, not
                after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In Practice */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            In Practice
          </p>
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-xl text-[#faf7f2] mb-3">Zoning</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Developer requests a 12-story variance. The AI analyzes it against
                density/affordability priorities, publishes its recommendation. If the candidate
                votes differently, they explain why.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#faf7f2] mb-3">Budget</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                AI proposes line-item allocations based on stated priorities. Every dollar traces to
                a value. The public sees the math.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#faf7f2] mb-3">Accountability</h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Candidate campaigns on fiscal discipline, then a $200M stadium bond hits the agenda.
                The AI flags the contradiction before the vote, not after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Austin */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Why Austin
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            Austin is the right proving ground. A tech-forward city with an engaged electorate,
            growing pains around density and affordability, and a council structure where
            transparency has real impact. 10 council districts + a mayor. Enough complexity to
            prove the model. Small enough to actually do it.
          </p>
        </div>
      </section>

      {/* What We Need */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            What We Need
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-[#d97706]">→</span>
              <p className="text-[#cbd5e1] text-lg">
                Advisors with civic tech, local government, or campaign experience
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#d97706]">→</span>
              <p className="text-[#cbd5e1] text-lg">
                Funders who back transparency and democratic innovation
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#d97706]">→</span>
              <p className="text-[#cbd5e1] text-lg">
                A real candidate willing to run as the first OpenCandidate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Current Status
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-[#d97706]">●</span>
              <p className="text-[#cbd5e1] text-lg">
                Live demo at opencandidate.org with 3 fictional Austin mayoral candidates
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#d97706]">●</span>
              <p className="text-[#cbd5e1] text-lg">
                Open source platform built on Next.js + AI
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#d97706]">●</span>
              <p className="text-[#cbd5e1] text-lg">
                Looking for the first real race: Austin City Council 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[#94a3b8] text-sm">
          opencandidate.org &middot; An open platform for transparent governance
        </p>
        <p className="text-[#94a3b8] text-sm">
          Contact: sam@runpoint.ai
        </p>
      </footer>
    </main>
  );
}
