import Hero from "@/components/Hero";
import CandidateCard from "@/components/CandidateCard";
import { candidates } from "@/lib/candidates";
import Link from "next/link";

const standardItems = [
  {
    num: "01",
    title: "Publish the public decision model in full",
    desc: "The candidate makes public the decision model that encodes priorities, tradeoffs, fiscal philosophy, and the rules they claim will guide them in office.",
  },
  {
    num: "02",
    title: "Run major decisions through it",
    desc: "Bills, budgets, policy drafts, and major votes get analyzed against the public decision model before the politician acts.",
  },
  {
    num: "03",
    title: "Publish AI guidance when possible",
    desc: "Before major votes or decisions, the platform should show what the model recommended and how it got there.",
  },
  {
    num: "04",
    title: "Explain every override",
    desc: "A politician can disagree with the AI. They just have to say why in public instead of quietly drifting away from the plan.",
  },
  {
    num: "05",
    title: "Maintain a public alignment score",
    desc: "The public can track whether the candidate is staying close to the published decision rules over time or treating them like campaign wallpaper.",
  },
];

const modelWork = [
  {
    title: "Bills and ordinances",
    desc: "The AI reads proposed legislation, compares it to the public decision model, and recommends support, opposition, or amendments.",
  },
  {
    title: "Budget decisions",
    desc: "The AI maps spending choices back to stated priorities, flags tradeoffs, and recommends where money should go first.",
  },
  {
    title: "Zoning and development votes",
    desc: "The AI tests land use decisions against housing, infrastructure, affordability, and neighborhood tradeoffs in the published decision rules.",
  },
  {
    title: "Policy memos",
    desc: "The AI drafts briefing documents and policy options that reflect the candidate's stated mission instead of whatever is politically convenient that week.",
  },
  {
    title: "Public statements and campaign promises",
    desc: "The AI checks whether a public message matches the public decision model and surfaces contradictions before they become habits.",
  },
  {
    title: "Constituent issue triage",
    desc: "The AI sorts incoming issues, suggests responses, and prioritizes follow-up according to the candidate's published decision rules.",
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
        <div className="max-w-4xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            What this actually is
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-10 max-w-3xl">
            A movement and platform for politicians to publish a public decision model, then be measured against it.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
              <p className="text-[#faf7f2] text-lg mb-3">1. Publish the model before taking office.</p>
              <p className="text-[#94a3b8] leading-relaxed text-sm">
                The public decision model is the candidate&apos;s platform turned into explicit decision rules. It spells out priorities, tradeoffs, fiscal philosophy, and the rules they claim will guide them when things get messy.
              </p>
            </div>
            <div className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
              <p className="text-[#faf7f2] text-lg mb-3">2. Use AI to apply it to real decisions.</p>
              <p className="text-[#94a3b8] leading-relaxed text-sm">
                The AI is not there to replace judgment. It is there to run the published model against bills, budgets, policy drafts, vote choices, and constituent issues in a consistent way.
              </p>
            </div>
            <div className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
              <p className="text-[#faf7f2] text-lg mb-3">3. Show the public what the model recommended.</p>
              <p className="text-[#94a3b8] leading-relaxed text-sm">
                Voters can compare the AI&apos;s recommendation to what the politician actually does. If the politician diverges, they can override. They just need to explain it.
              </p>
            </div>
            <div className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
              <p className="text-[#faf7f2] text-lg mb-3">4. Track alignment over time.</p>
              <p className="text-[#94a3b8] leading-relaxed text-sm">
                That creates a public accountability score. The point is simple: make it easier to tell whether a politician is staying true to the plan they sold voters in the first place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <div className="max-w-3xl space-y-6">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em]">
            Why people care
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#faf7f2] leading-snug">
            Politicians are easier to pressure than a published model.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            OpenCandidate is built around that reality. A politician can be lobbied, flattered, bought off, or slowly nudged off course in private. A public decision model cannot quietly change in a donor meeting.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            If the model changes, the public can see the change. That does not make politics perfect. It makes private drift harder to hide.
          </p>
          <p className="text-[#94a3b8] leading-relaxed border-l-2 border-[#d97706] pl-4">
            You may not trust AI. Fair enough. But a public model is easier to audit than a private conversation with a donor.
          </p>
          <p className="text-[#64748b] text-sm uppercase tracking-[0.2em] max-w-2xl">
            A politician can drift in private. A public decision model can only drift in public.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          The OpenCandidate Standard
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-12 max-w-2xl">
          A real commitment system, not a manifesto.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {standardItems.map((item) => (
            <div
              key={item.num}
              className="border border-[#1e293b] rounded-lg p-6"
            >
              <span className="text-[#d97706] font-mono text-sm">
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

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          What gets run through the model
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-12 max-w-3xl">
          The public decision model is supposed to shape actual governing work.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {modelWork.map((item) => (
            <div key={item.title} className="border-t border-[#1e293b] pt-6">
              <h3 className="font-serif text-xl text-[#faf7f2] mb-3">{item.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          Scoring and accountability
        </p>
        <div className="max-w-4xl grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-6">
              The platform measures whether a politician follows the public decision model they published.
            </h2>
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                When the AI recommendation and the politician&apos;s action line up, alignment stays high. When the politician overrides the recommendation, the platform records it.
              </p>
              <p>
                The public score is a simple accountability number. It asks: how often did the politician act the way their own published decision rules said they should?
              </p>
              <p>
                Overrides are allowed. Politics is messy. New facts show up. Coalitions shift. Emergencies happen. But hidden overrides and unexplained drift should count against alignment.
              </p>
              <p>
                Over time, the public gets a clearer picture of whether a candidate is genuinely governing from the mission they claimed or slowly bending toward convenience.
              </p>
            </div>
          </div>
          <div className="border border-[#1e293b] rounded-2xl p-6 bg-[#111827]/40">
            <p className="text-[#faf7f2] font-serif text-2xl leading-snug mb-4">
              Not every override is bad. Hidden overrides are.
            </p>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              The score is not there to force obedience to a machine. It is there to expose whether the politician is still operating inside the public commitments they asked voters to trust.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b]">
        <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
          Platform Demo
        </h2>
        <p className="text-[#64748b] text-sm mb-12 max-w-2xl">
          Three demo candidates for Mayor of Austin, TX. Each one has a different public decision model, a different fiscal logic, and a different alignment standard.
        </p>
        <div>
          {candidates.map((c) => (
            <CandidateCard key={c.slug} candidate={c} />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[#1e293b] text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#faf7f2] mb-6 max-w-3xl mx-auto">
          Turn a campaign platform into a public decision model.
        </h2>
        <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
          Publish the model. Run major decisions through it. Let the public see where you followed it and where you did not.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/create"
            className="inline-block px-8 py-4 bg-[#d97706] text-white text-sm font-medium rounded-lg hover:bg-[#b45309] transition-colors"
          >
            Create a candidate
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
        <span>OpenCandidate is an open platform for candidates who believe political accountability should be easier to inspect. Not a party. Not a campaign slogan. A standard.</span>
        <div className="flex gap-4">
          <Link href="/updates" className="hover:text-[#94a3b8] transition-colors">Updates</Link>
          <Link href="/involve" className="hover:text-[#94a3b8] transition-colors">Get Involved</Link>
        </div>
      </footer>
    </main>
  );
}
