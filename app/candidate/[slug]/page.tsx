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
      <nav className="border-b border-[#1e293b] px-4 py-5 sm:px-6 md:px-12 md:py-6 lg:px-24">
        <Link
          href="/"
          className="text-sm text-[#64748b] transition-colors hover:text-[#faf7f2]"
        >
          ← OpenCandidate
        </Link>
      </nav>

      <section className="animate-fade-in px-4 pb-16 pt-12 sm:px-6 md:px-12 md:pb-16 md:pt-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,0.98fr)_336px] lg:gap-16 xl:gap-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d97706]">
              {candidate.race} · {candidate.location}
            </p>
            <h1 className="mb-4 font-serif text-4xl leading-[0.98] text-[#faf7f2] sm:text-5xl md:mb-5 md:text-7xl">
              {candidate.name}
            </h1>
            <p className="mb-6 max-w-2xl font-serif text-lg italic text-[#94a3b8] sm:text-xl md:mb-8 md:text-2xl">
              &ldquo;{candidate.tagline}&rdquo;
            </p>
            <p className="mb-8 max-w-3xl text-base leading-7 text-[#cbd5e1] sm:text-lg md:mb-10 md:leading-relaxed">
              {candidate.summary}
            </p>

            <div className="grid gap-8 border-t border-[#1e293b] pt-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Governing principle</p>
                <blockquote className="max-w-2xl font-serif text-[1.9rem] leading-snug text-[#faf7f2] md:text-4xl">
                  {parsed.coreValue}
                </blockquote>
              </div>
              <div className="grid gap-6">
                <div className="rounded-[24px] border border-[#223046] bg-[#111827]/24 p-5 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Decision types</p>
                  <p className="text-sm leading-relaxed text-[#cbd5e1]">
                    {decisionTypes.length > 0
                      ? decisionTypes.join(", ")
                      : "Major votes, budgets, policy drafts, and constituent issues."}
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#223046] bg-[#111827]/24 p-5 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Public record</p>
                  <p className="text-sm leading-relaxed text-[#cbd5e1]">
                    Recommendation, action, explanation, and score all live together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="rounded-[28px] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.58)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.16),transparent_40%)] p-5 sm:p-6 md:p-8 lg:sticky lg:top-8">
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">Alignment score</p>
              <p className="mb-3 font-serif text-6xl leading-none text-[#faf7f2] sm:text-7xl">{candidate.alignmentScore}</p>
              <p className={`mb-5 text-sm ${candidate.scoreDelta >= 0 ? "text-emerald-400" : "text-amber-300"}`}>
                {candidate.scoreDelta >= 0 ? `+${candidate.scoreDelta}` : candidate.scoreDelta} points in 30 days
              </p>
              <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-[#1e293b]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b]"
                  style={{ width: `${candidate.alignmentScore}%` }}
                />
              </div>
              <p className="border-t border-[#223046] pt-5 text-sm leading-relaxed text-[#94a3b8]">
                Public score tracking whether major actions match the published governing system. Overrides are allowed. Hidden overrides are not.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-14 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
              Recent decisions
            </p>
            <h2 className="mb-4 font-serif text-3xl text-[#faf7f2] md:text-4xl">
              A few recent tests of the platform.
            </h2>
            <p className="leading-relaxed text-[#94a3b8]">
              The concept lands faster when the recommendation and the action are side by side.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {candidate.recentDecisions.map((decision) => (
              <div key={decision.issue} className="rounded-[24px] border border-[#223046] bg-[#111827]/24 p-5 sm:p-6">
                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#64748b]">Issue</p>
                    <h3 className="font-serif text-[1.75rem] leading-tight text-[#faf7f2] md:text-[2rem]">{decision.issue}</h3>
                  </div>
                  <span className={`inline-flex w-fit rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.18em] ${decision.outcome === "Aligned" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}`}>
                    {decision.outcome}
                  </span>
                </div>
                <div className="mb-4 grid gap-4 md:grid-cols-2 md:gap-5">
                  <div className="rounded-xl border border-[#1f2b3d] bg-[#0f172a]/44 p-4">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Recommendation</p>
                    <p className="text-sm leading-relaxed text-[#faf7f2]">{decision.recommendation}</p>
                  </div>
                  <div className="rounded-xl border border-[#1f2b3d] bg-[#0f172a]/44 p-4">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">Action</p>
                    <p className="text-sm leading-relaxed text-[#cbd5e1]">{decision.action}</p>
                  </div>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-[#94a3b8]">{decision.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-14 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-16">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706] md:mb-8">
              Platform summary
            </p>
            <div className="grid gap-4 sm:gap-5">
              {priorities.map((p, i) => {
                const [title, ...rest] = p.split(" — ");
                return (
                  <div key={i} className="rounded-[24px] border border-[#223046] bg-[#111827]/24 p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 shrink-0 font-mono text-sm text-[#d97706]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="mb-2 font-serif text-2xl leading-tight text-[#faf7f2]">{title}</h3>
                        {rest.length > 0 && (
                          <p className="max-w-2xl text-sm leading-relaxed text-[#94a3b8]">{rest.join(" — ")}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-[24px] border border-[#223046] bg-[#111827]/28 p-5 sm:p-6">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#d97706]">Alignment frame</p>
              <p className="mb-4 leading-relaxed text-[#cbd5e1]">
                {buildAlignmentCopy(candidate.name, priorities)}
              </p>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                Overrides belong in the public record so voters can judge them later against the platform that got the candidate elected.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#223046] bg-[#111827]/28 p-5 sm:p-6">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#d97706]">Fiscal approach</p>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">{parsed.fiscal}</p>
            </div>
            <div className="rounded-[24px] border border-[#223046] bg-[#111827]/28 p-5 sm:p-6">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-emerald-400">Tradeoffs accepted</p>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">{parsed.tradeoffsAccepted}</p>
            </div>
            <div className="rounded-[24px] border border-[#223046] bg-[#111827]/28 p-5 sm:p-6">
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-red-400">Tradeoffs rejected</p>
              <p className="text-sm leading-relaxed text-[#cbd5e1]">{parsed.tradeoffsRejected}</p>
            </div>
            {parsed.tone && (
              <div className="rounded-[24px] border border-[#223046] bg-[#111827]/28 p-5 sm:p-6">
                <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#64748b]">Public voice</p>
                <p className="text-sm italic leading-relaxed text-[#94a3b8]">{parsed.tone}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Top questions
          </p>
          <h2 className="mb-8 font-serif text-3xl text-[#faf7f2] md:mb-12">
            What citizens are asking
          </h2>
          <div className="grid max-w-4xl gap-4">
            {candidate.faq.map((item, i) => (
              <div key={i} className="rounded-[24px] border border-[#223046] bg-[#111827]/22 p-5 sm:p-6">
                <h3 className="mb-3 font-serif text-lg text-[#faf7f2]">
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1e293b] px-4 py-16 sm:px-6 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#d97706]">
            Live system demo
          </p>
          <h2 className="mb-4 font-serif text-3xl text-[#faf7f2]">
            Ask {firstName} anything
          </h2>
          <p className="mb-8 max-w-xl text-sm text-[#64748b]">
            This AI reasons from the campaign platform and decision rules above. It is there to show how this public governing system would handle hard choices in public.
          </p>
          <div className="max-w-2xl">
            <ChatWithQuestions candidateSlug={candidate.slug} fallbackFaqs={candidate.faq} />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1e293b] px-4 py-12 text-xs text-[#475569] sm:px-6 md:px-12 lg:px-24">
        OpenCandidate is an open project for candidates who want a public governing system people can inspect.
      </footer>
    </main>
  );
}
