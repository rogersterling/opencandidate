import { notFound } from "next/navigation";
import { candidates, getCandidate } from "@/lib/candidates";
import ChatWithQuestions from "@/components/ChatWithQuestions";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return candidates.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const candidate = getCandidate(slug);
  if (!candidate) return {};

  const ogImage = `/api/og?candidate=${encodeURIComponent(candidate.name)}&tagline=${encodeURIComponent(candidate.tagline)}`;

  return {
    title: `${candidate.name} — OpenCandidate`,
    description: `${candidate.name}'s campaign platform, governing rules, and public alignment frame.`,
    openGraph: {
      title: `${candidate.name} — OpenCandidate`,
      description: `${candidate.name}'s campaign platform, governing rules, and public alignment frame.`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${candidate.name} — OpenCandidate`,
      description: `${candidate.name}'s campaign platform, governing rules, and public alignment frame.`,
      images: [ogImage],
    },
  };
}

function parseCivicPrompt(prompt: string) {
  const sections: Record<string, string> = {};
  const lines = prompt.split("\n");
  let currentKey = "";

  for (const line of lines) {
    if (line.startsWith("Core value:")) {
      sections.coreValue = line.replace("Core value:", "").trim();
    } else if (line.startsWith("Priorities")) {
      currentKey = "priorities";
      sections[currentKey] = "";
    } else if (line.startsWith("Fiscal approach:")) {
      currentKey = "";
      sections.fiscal = line.replace("Fiscal approach:", "").trim();
    } else if (line.startsWith("Tradeoffs I accept:")) {
      currentKey = "";
      sections.tradeoffsAccepted = line.replace("Tradeoffs I accept:", "").trim();
    } else if (line.startsWith("Tradeoffs I reject:")) {
      currentKey = "";
      sections.tradeoffsRejected = line.replace("Tradeoffs I reject:", "").trim();
    } else if (line.startsWith("Tone:")) {
      currentKey = "";
      sections.tone = line.replace("Tone:", "").trim();
    } else if (currentKey === "priorities" && line.trim()) {
      sections.priorities = (sections.priorities || "") + line + "\n";
    }
  }
  return sections;
}

function parsePriorities(text: string): string[] {
  return text
    .trim()
    .split("\n")
    .map((l) => l.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

function inferDecisionTypes(priorities: string[]) {
  const joined = priorities.join(" ").toLowerCase();
  const items: string[] = [];

  if (joined.includes("transit") || joined.includes("bike") || joined.includes("pedestrian")) {
    items.push("transportation plans and corridor investments");
  }
  if (joined.includes("zoning") || joined.includes("housing") || joined.includes("development")) {
    items.push("zoning cases, housing policy, and development approvals");
  }
  if (joined.includes("fiscal") || joined.includes("budget") || joined.includes("tax") || joined.includes("debt")) {
    items.push("budgets, bond questions, and tax decisions");
  }
  if (joined.includes("police") || joined.includes("safety") || joined.includes("homelessness") || joined.includes("ems")) {
    items.push("public safety funding and service delivery choices");
  }
  if (joined.includes("community") || joined.includes("equity") || joined.includes("business") || joined.includes("infrastructure")) {
    items.push("infrastructure priorities and constituent casework");
  }

  return items.slice(0, 3);
}

function buildAlignmentCopy(candidateName: string, priorities: string[]) {
  const primary = priorities[0]?.split(" — ")[0].toLowerCase() || "the published platform";
  return `${candidateName.split(" ")[0]}'s alignment record tracks whether major actions stay consistent with ${primary}, the rest of the published decision rules, and the tradeoffs laid out in the campaign platform.`;
}

export default async function CandidatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const candidate = getCandidate(slug);
  if (!candidate) notFound();

  const parsed = parseCivicPrompt(candidate.civicPrompt);
  const priorities = parsed.priorities ? parsePriorities(parsed.priorities) : [];
  const decisionTypes = inferDecisionTypes(priorities);
  const firstName = candidate.name.split(" ")[0];

  return (
    <main className="min-h-screen">
      <nav className="px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between border-b border-[#1e293b]">
        <Link
          href="/"
          className="text-[#64748b] text-sm hover:text-[#faf7f2] transition-colors"
        >
          ← OpenCandidate
        </Link>
      </nav>

      <section className="px-6 pt-16 pb-16 md:px-12 lg:px-24 animate-fade-in">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[minmax(0,0.98fr)_336px] xl:gap-20">
          <div className="max-w-4xl">
            <p className="text-[#d97706] text-sm uppercase tracking-[0.2em] mb-4">
              {candidate.race} · {candidate.location}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#faf7f2] mb-5 leading-[0.96]">
              {candidate.name}
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#94a3b8] max-w-2xl italic mb-8">
              &ldquo;{candidate.tagline}&rdquo;
            </p>
            <p className="text-[#cbd5e1] text-lg leading-relaxed max-w-3xl mb-10">
              {candidate.summary}
            </p>

            <div className="grid gap-8 border-t border-[#1e293b] pt-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-3">Governing principle</p>
                <blockquote className="font-serif text-3xl md:text-4xl text-[#faf7f2] leading-snug max-w-2xl">
                  {parsed.coreValue}
                </blockquote>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-2">Decision types</p>
                  <p className="text-sm text-[#cbd5e1] leading-relaxed">
                    {decisionTypes.length > 0
                      ? decisionTypes.join(", ")
                      : "Major votes, budgets, policy drafts, and constituent issues."}
                  </p>
                </div>
                <div>
                  <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-2">Public record</p>
                  <p className="text-sm text-[#cbd5e1] leading-relaxed">
                    Recommendation, action, explanation, and score all live together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-8 rounded-[2rem] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.58)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.16),transparent_40%)] p-6 md:p-8">
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-3">Alignment score</p>
              <p className="font-serif text-7xl text-[#faf7f2] leading-none mb-3">{candidate.alignmentScore}</p>
              <p className={`text-sm mb-5 ${candidate.scoreDelta >= 0 ? "text-emerald-400" : "text-amber-300"}`}>
                {candidate.scoreDelta >= 0 ? `+${candidate.scoreDelta}` : candidate.scoreDelta} points in 30 days
              </p>
              <div className="h-1.5 rounded-full bg-[#1e293b] overflow-hidden mb-5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b]"
                  style={{ width: `${candidate.alignmentScore}%` }}
                />
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[#223046] pt-5">
                Public score tracking whether major actions match the published governing system. Overrides are allowed. Hidden overrides are not.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-14 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.88fr_1.12fr] gap-12 xl:gap-16 items-start">
          <div className="max-w-xl">
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
              Recent decisions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#faf7f2] mb-4">
              A few recent tests of the platform.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              The concept lands faster when the recommendation and the action are side by side.
            </p>
          </div>

          <div className="divide-y divide-[#1e293b] border-t border-[#1e293b]">
            {candidate.recentDecisions.map((decision) => (
              <div key={decision.issue} className="py-6 first:pt-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-2">Issue</p>
                    <h3 className="font-serif text-2xl md:text-[2rem] text-[#faf7f2] leading-tight">{decision.issue}</h3>
                  </div>
                  <span className={`inline-flex w-fit rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.18em] ${decision.outcome === "Aligned" ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" : "border-amber-500/30 text-amber-300 bg-amber-500/10"}`}>
                    {decision.outcome}
                  </span>
                </div>
                <div className="grid md:grid-cols-[1fr_1fr] gap-5 mb-4">
                  <div>
                    <p className="text-[#64748b] text-[11px] uppercase tracking-[0.18em] mb-2">Recommendation</p>
                    <p className="text-[#faf7f2] text-sm leading-relaxed">{decision.recommendation}</p>
                  </div>
                  <div>
                    <p className="text-[#64748b] text-[11px] uppercase tracking-[0.18em] mb-2">Action</p>
                    <p className="text-[#cbd5e1] text-sm leading-relaxed">{decision.action}</p>
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl">{decision.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-14 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.02fr_0.98fr] gap-12 xl:gap-16 items-start">
          <div>
            <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-8">
              Platform summary
            </p>
            <div className="grid gap-5">
              {priorities.map((p, i) => {
                const [title, ...rest] = p.split(" — ");
                return (
                  <div key={i} className="border-t border-[#253247] pt-5 md:pt-6">
                    <div className="flex gap-4 items-start">
                      <span className="text-[#d97706] font-mono text-sm mt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl text-[#faf7f2] mb-2 leading-tight">{title}</h3>
                        {rest.length > 0 && (
                          <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl">{rest.join(" — ")}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.6rem] border border-[#223046] bg-[#111827]/28 p-6">
              <p className="text-[#d97706] text-[11px] uppercase tracking-[0.2em] mb-4">Alignment frame</p>
              <p className="text-[#cbd5e1] leading-relaxed mb-4">
                {buildAlignmentCopy(candidate.name, priorities)}
              </p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Overrides belong in the public record so voters can judge them later against the platform that got the candidate elected.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#223046] bg-[#111827]/28 p-6">
              <p className="text-[#d97706] text-[11px] uppercase tracking-[0.2em] mb-4">Fiscal approach</p>
              <p className="text-[#cbd5e1] text-sm leading-relaxed">{parsed.fiscal}</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#223046] bg-[#111827]/28 p-6">
              <p className="text-emerald-400 text-[11px] uppercase tracking-[0.2em] mb-4">Tradeoffs accepted</p>
              <p className="text-[#cbd5e1] text-sm leading-relaxed">{parsed.tradeoffsAccepted}</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#223046] bg-[#111827]/28 p-6">
              <p className="text-red-400 text-[11px] uppercase tracking-[0.2em] mb-4">Tradeoffs rejected</p>
              <p className="text-[#cbd5e1] text-sm leading-relaxed">{parsed.tradeoffsRejected}</p>
            </div>
            {parsed.tone && (
              <div className="rounded-[1.6rem] border border-[#223046] bg-[#111827]/28 p-6">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-4">Public voice</p>
                <p className="text-[#94a3b8] text-sm italic leading-relaxed">{parsed.tone}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
            Top questions
          </p>
          <h2 className="font-serif text-3xl text-[#faf7f2] mb-12">
            What citizens are asking
          </h2>
          <div className="max-w-4xl grid gap-4">
            {candidate.faq.map((item, i) => (
              <div key={i} className="rounded-[1.5rem] border border-[#223046] bg-[#111827]/22 p-6">
                <h3 className="font-serif text-lg text-[#faf7f2] mb-3">
                  {item.question}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
            Live system demo
          </p>
          <h2 className="font-serif text-3xl text-[#faf7f2] mb-4">
            Ask {firstName} anything
          </h2>
          <p className="text-[#64748b] text-sm mb-8 max-w-xl">
            This AI reasons from the campaign platform and decision rules above. It is there to show how this public governing system would handle hard choices in public.
          </p>
          <div className="max-w-2xl">
            <ChatWithQuestions candidateSlug={candidate.slug} fallbackFaqs={candidate.faq} />
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs">
        OpenCandidate is an open project for candidates who want a public governing system people can inspect.
      </footer>
    </main>
  );
}
