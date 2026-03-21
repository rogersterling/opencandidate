import Hero from "@/components/Hero";
import CandidateCard from "@/components/CandidateCard";
import { candidates } from "@/lib/candidates";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* The Pitch */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            The Problem
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#faf7f2] leading-snug mb-8">
            Every politician has a hidden prompt — donors, ideology, ambition, personal grudges. An OpenCandidate makes theirs readable.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mb-6">
            Today, voters reverse-engineer a candidate&apos;s real priorities from votes, donor lists, and body language. That&apos;s inefficient at best, manipulative at worst. OpenCandidate replaces guesswork with source code.
          </p>
          <p className="text-[#94a3b8] leading-relaxed border-l-2 border-[#d97706] pl-4">
            Think of a civic prompt as a politician&apos;s operating manual — written before they take office, telling an AI exactly what they care about and in what order. Their priorities, their fiscal philosophy, the tradeoffs they&apos;ll accept and the ones they won&apos;t.
          </p>
        </div>
      </section>

      {/* In Practice */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          In Practice
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-12 max-w-2xl">
          What an OpenCandidate actually does
        </h2>
        <div className="max-w-3xl space-y-8">
          <div>
            <p className="text-[#faf7f2] text-lg mb-2">
              <span className="font-serif font-bold">Zoning Vote</span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              A developer requests a variance for a 12-story building in a residential neighborhood. The AI advisor analyzes it against the civic prompt&apos;s density and affordability priorities, publishes its recommendation with reasoning, and the candidate votes. If they vote differently, they explain why.
            </p>
          </div>
          <div>
            <p className="text-[#faf7f2] text-lg mb-2">
              <span className="font-serif font-bold">Bill Drafting</span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              City council needs a short-term rental ordinance. The AI drafts one based on the civic prompt&apos;s housing and local business priorities. The full draft and reasoning chain are public before the first reading.
            </p>
          </div>
          <div>
            <p className="text-[#faf7f2] text-lg mb-2">
              <span className="font-serif font-bold">Budget Season</span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              The AI proposes line-item allocations based on stated priorities. Transit gets 40% because the civic prompt ranks it first. The public can see the math. Every dollar traces back to a value.
            </p>
          </div>
          <div>
            <p className="text-[#faf7f2] text-lg mb-2">
              <span className="font-serif font-bold">Constituent Complaint</span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              A resident reports illegal dumping in their neighborhood. The AI logs the complaint, cross-references it against infrastructure priorities, and recommends a response. The exchange is public.
            </p>
          </div>
          <div>
            <p className="text-[#faf7f2] text-lg mb-2">
              <span className="font-serif font-bold">Public Vote</span>
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Before every council vote, the AI publishes how it would vote and why, based on the civic prompt. The candidate&apos;s actual vote is recorded next to it. Alignment and divergence are both visible.
            </p>
          </div>
        </div>
      </section>

      {/* The Pledge */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          The Commitment
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-12 max-w-2xl">
          The OpenCandidate Pledge
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {[
            {
              num: "I",
              title: "Publish the civic prompt",
              desc: "The complete set of values, priorities, and tradeoffs that guide the AI advisor. Nothing hidden, nothing redacted.",
            },
            {
              num: "II",
              title: "Make all AI interactions public",
              desc: "Every conversation between the candidate and their AI advisor is logged and visible. No private channel.",
            },
            {
              num: "III",
              title: "Let citizens question the AI directly",
              desc: "Anyone can interrogate the AI advisor. Push it on edge cases. Find the contradictions. That's the point.",
            },
            {
              num: "IV",
              title: "Explain every override",
              desc: "When a candidate overrides the AI's recommendation, they explain why publicly. Disagreement is fine. Silence isn't.",
            },
            {
              num: "V",
              title: "Use AI for real governance",
              desc: "Run policy analysis, bill drafts, budget proposals, and vote recommendations through the AI advisor. Not as a novelty. As the actual decision-support process.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="border border-[#1e293b] rounded-lg p-6"
            >
              <span className="text-[#d97706] font-serif text-2xl">
                {item.num}
              </span>
              <h3 className="font-serif text-lg text-[#faf7f2] mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          The Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-16">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl">
          {[
            {
              step: "01",
              title: "Write a civic prompt",
              desc: "A candidate publishes the values, priorities, and tradeoffs that guide every decision. Not talking points. Source code.",
              detail: "Priorities in order. Fiscal philosophy. Tradeoffs accepted and rejected. The uncomfortable parts included.",
            },
            {
              step: "02",
              title: "AI reasons in public",
              desc: "An AI advisor is created from that prompt. It answers policy questions, shows its reasoning, and operates entirely in the open.",
              detail: "No private mode. No off-the-record. Every answer traces back to the civic prompt.",
            },
            {
              step: "03",
              title: "Citizens interrogate",
              desc: "Anyone can challenge the AI. Push it on edge cases. Find the gaps between stated values and logical conclusions.",
              detail: "The civic prompt is a living document. Citizens pressure-test it. Candidates update it. Transparency compounds.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className="text-[#d97706] text-xs font-mono tracking-widest">
                {item.step}
              </span>
              <h3 className="font-serif text-xl text-[#faf7f2] mt-3 mb-3">
                {item.title}
              </h3>
              <p className="text-[#cbd5e1] text-sm leading-relaxed mb-3">
                {item.desc}
              </p>
              <p className="text-[#64748b] text-xs leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Matters */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          Why It Matters
        </p>
        <div className="max-w-3xl space-y-8">
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            A city councilmember campaigns on affordability, then votes to approve a luxury development with tax incentives. Voters find out months later from a local reporter. By then, the next election is two years away.
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            A mayor promises fiscal discipline during the campaign. In office, they approve a $200 million stadium bond. The reasoning? &ldquo;Economic development.&rdquo; No analysis published. No tradeoffs shown.
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            An OpenCandidate can&apos;t do this. Their AI advisor would flag the contradiction the moment the vote hits the agenda. The public would see it before the vote, not after.
          </p>
        </div>
      </section>

      {/* Candidates */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
          Sample candidates
        </h2>
        <p className="text-[#64748b] text-sm mb-12">
          Three fictional candidates for Mayor of Austin, TX. Same race,
          different civic prompts.
        </p>
        <div>
          {candidates.map((c) => (
            <CandidateCard key={c.slug} candidate={c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b] text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#faf7f2] mb-6 max-w-2xl mx-auto">
          What would your civic prompt say?
        </h2>
        <Link
          href="/create"
          className="inline-block px-8 py-4 bg-[#d97706] text-white text-sm font-medium rounded-lg hover:bg-[#b45309] transition-colors"
        >
          Create a candidate
        </Link>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs">
        OpenCandidate is an open platform for candidates who believe governance should be transparent. Not a product. Not a party. A standard.
      </footer>
    </main>
  );
}
