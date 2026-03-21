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
          <p className="text-[#94a3b8] leading-relaxed">
            Today, voters reverse-engineer a candidate&apos;s real priorities from votes, donor lists, and body language. That&apos;s inefficient at best, manipulative at worst. OpenCandidate replaces guesswork with source code.
          </p>
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
            Voters make decisions with incomplete information. Candidates speak in generalities, dodge direct questions, and reveal their real priorities only through years of voting records. By then, the election is over.
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            A civic prompt changes the incentive structure. When your values are public and an AI reasons from them consistently, contradictions surface fast. You can&apos;t promise fiscal discipline to one audience and new spending to another when the same AI is answering both.
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            This isn&apos;t about replacing human judgment with AI. It&apos;s about making human judgment legible. The candidate still decides. The AI just makes the reasoning visible.
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
        OpenCandidate is an experiment. Not a product. Not a party.
      </footer>
    </main>
  );
}
