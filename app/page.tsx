import Hero from "@/components/Hero";
import CandidateCard from "@/components/CandidateCard";
import { candidates } from "@/lib/candidates";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* How it works */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-16">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
          {[
            {
              step: "01",
              title: "Write a civic prompt",
              desc: "A candidate publishes the values, priorities, and tradeoffs that guide every decision. No hiding behind talking points.",
            },
            {
              step: "02",
              title: "AI reasons in public",
              desc: "An AI advisor answers policy questions using only the civic prompt. Its reasoning is visible. Its biases are the ones you chose.",
            },
            {
              step: "03",
              title: "Citizens interrogate",
              desc: "Anyone can challenge the AI. Push it on edge cases. Find the gaps. The civic prompt is a living document, not a campaign slogan.",
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
              <h3 className="font-serif text-xl text-[#faf7f2] mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
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

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs">
        OpenCandidate is an experiment. Not a product. Not a party.
      </footer>
    </main>
  );
}
