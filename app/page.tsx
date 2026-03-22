import Hero from "@/components/Hero";
import CandidateCard from "@/components/CandidateCard";
import { candidates } from "@/lib/candidates";
import Link from "next/link";

const systemSections = [
  {
    title: "Campaign platform",
    desc: "The officeholder starts by publishing the platform they ran on in a form that can be applied, inspected, and challenged.",
  },
  {
    title: "Decision rules",
    desc: "The platform gets turned into explicit rules about priorities, tradeoffs, spending, and what counts as a justified exception.",
  },
  {
    title: "Public governing system",
    desc: "Those rules become a standing system the public can refer to when bills, budgets, and major votes show up.",
  },
];

const decisionItems = [
  "Bills and ordinances",
  "Budget drafts and amendments",
  "Land use and zoning votes",
  "Major procurement and contract decisions",
  "Public statements tied to governing choices",
  "Constituent issues that force real tradeoffs",
];

const accountabilityItems = [
  {
    title: "Recommendation",
    desc: "The system shows what the platform would call for on a specific decision.",
  },
  {
    title: "Override",
    desc: "The politician can depart from that recommendation, but the departure becomes part of the public record.",
  },
  {
    title: "Alignment",
    desc: "Over time the public can see whether the officeholder is governing through the plan or walking away from it.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between bg-[#0f172a]/90 backdrop-blur-sm border-b border-[#1e293b]/50">
        <Link href="/" className="font-serif text-lg text-[#faf7f2]">
          OpenCandidate
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/updates" className="text-[#94a3b8] hover:text-[#faf7f2] transition-colors">Updates</Link>
          <Link href="/involve" className="text-[#94a3b8] hover:text-[#faf7f2] transition-colors">Get Involved</Link>
          <Link href="/brief" className="text-[#94a3b8] hover:text-[#faf7f2] transition-colors">Brief</Link>
        </div>
      </nav>

      <Hero />

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <div className="max-w-5xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            What this is
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-8 max-w-3xl">
            A way to turn campaign promises into a governing system people can actually audit.
          </h2>
          <p className="text-[#94a3b8] leading-relaxed max-w-3xl mb-12">
            OpenCandidate is built for a simple commitment. A candidate publishes the platform they ran on, turns it into decision rules, and governs through those rules in public. AI does the repetitive application work. The politician still holds office.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {systemSections.map((item) => (
              <div key={item.title} className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
                <h3 className="font-serif text-xl text-[#faf7f2] mb-3">{item.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <div className="max-w-4xl space-y-6">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em]">
            Why it exists
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] max-w-3xl">
            Politicians change under pressure. Usually where the public cannot see it.
          </h2>
          <p className="text-[#94a3b8] leading-relaxed max-w-3xl">
            The problem is not that voters lack slogans. The problem is that governing happens after the campaign, under pressure, in private rooms, with incentives the public cannot track in real time.
          </p>
          <p className="text-[#94a3b8] leading-relaxed max-w-3xl">
            OpenCandidate does not assume AI is wise. It assumes that a public governing system is easier to inspect than a human being making exceptions offstage.
          </p>
          <p className="text-[#faf7f2] font-serif text-2xl md:text-3xl leading-snug max-w-3xl">
            A politician can drift in private. A public governing system can only drift in public.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <div className="max-w-5xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            What runs through it
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-8 max-w-3xl">
            The system is there for real governing work, not campaign theater.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
            {decisionItems.map((item) => (
              <div key={item} className="border-t border-[#1e293b] pt-4">
                <p className="text-[#cbd5e1] text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <div className="max-w-5xl grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
              Alignment and accountability
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-8 max-w-3xl">
              The public should be able to compare what the system recommended to what the politician actually did.
            </h2>
            <div className="space-y-6">
              {accountabilityItems.map((item) => (
                <div key={item.title} className="border-l border-[#1e293b] pl-6">
                  <h3 className="text-[#faf7f2] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#1e293b] rounded-2xl p-6 md:p-8 bg-[#111827]/40">
            <p className="text-[#faf7f2] font-serif text-2xl leading-snug mb-4">
              Not every override is bad. Hidden overrides are.
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Emergencies happen. Facts change. Coalitions shift. The point is not blind obedience to software.
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              The point is that when a politician steps outside the published plan, the public should be able to see it, judge it, and remember it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
          Demo candidates
        </h2>
        <p className="text-[#64748b] text-sm mb-12 max-w-2xl">
          Three fictional Austin candidates. Three different campaign platforms turned into three different public governing systems.
        </p>
        <div>
          {candidates.map((c) => (
            <CandidateCard key={c.slug} candidate={c} />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b] text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#faf7f2] mb-6 max-w-3xl mx-auto">
          Turn a campaign platform into a public governing system.
        </h2>
        <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
          Define the platform. Write the decision rules. Make alignment visible.
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
