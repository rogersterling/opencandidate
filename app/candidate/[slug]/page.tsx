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
    description: candidate.tagline,
    openGraph: {
      title: `${candidate.name} — OpenCandidate`,
      description: candidate.tagline,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${candidate.name} — OpenCandidate`,
      description: candidate.tagline,
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

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-20 pb-16 animate-fade-in">
        <p className="text-[#d97706] text-sm uppercase tracking-[0.2em] mb-4">
          {candidate.race} · {candidate.location}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#faf7f2] mb-4">
          {candidate.name}
        </h1>
        <p className="font-serif text-xl md:text-2xl text-[#94a3b8] max-w-2xl italic">
          &ldquo;{candidate.tagline}&rdquo;
        </p>
      </section>

      {/* Core Value */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Core Value
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl text-[#faf7f2] leading-snug">
            {parsed.coreValue}
          </blockquote>
        </div>
      </section>

      {/* Priorities */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-10">
          Priorities
        </p>
        <div className="max-w-3xl space-y-8">
          {priorities.map((p, i) => {
            const [title, ...rest] = p.split(" — ");
            return (
              <div key={i} className="flex gap-6">
                <span className="text-[#d97706] font-mono text-sm mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-[#faf7f2] mb-1">
                    {title}
                  </h3>
                  {rest.length > 0 && (
                    <p className="text-[#94a3b8] text-sm leading-relaxed">
                      {rest.join(" — ")}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fiscal Approach */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
            Fiscal Approach
          </p>
          <p className="text-[#cbd5e1] text-lg leading-relaxed">
            {parsed.fiscal}
          </p>
        </div>
      </section>

      {/* Tradeoffs */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1e293b]">
        <div className="max-w-4xl grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-emerald-500 text-xs uppercase tracking-[0.2em] mb-6">
              Tradeoffs Accepted
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              {parsed.tradeoffsAccepted}
            </p>
          </div>
          <div>
            <p className="text-red-400 text-xs uppercase tracking-[0.2em] mb-6">
              Tradeoffs Rejected
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              {parsed.tradeoffsRejected}
            </p>
          </div>
        </div>
      </section>

      {/* Tone */}
      {parsed.tone && (
        <section className="px-6 md:px-12 lg:px-24 py-8 border-t border-[#1e293b]">
          <div className="max-w-3xl flex items-center gap-4">
            <span className="text-[#475569] text-xs uppercase tracking-[0.2em] shrink-0">
              Tone
            </span>
            <p className="text-[#64748b] text-sm italic">
              {parsed.tone}
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
          Top Questions
        </p>
        <h2 className="font-serif text-3xl text-[#faf7f2] mb-12">
          What citizens are asking
        </h2>
        <div className="max-w-3xl space-y-10">
          {candidate.faq.map((item, i) => (
            <div key={i} className="border-l-2 border-[#1e293b] pl-6">
              <h3 className="font-serif text-lg text-[#faf7f2] mb-3">
                {item.question}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chat */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-[#1e293b]">
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-4">
          Live AI Advisor
        </p>
        <h2 className="font-serif text-3xl text-[#faf7f2] mb-4">
          Ask {candidate.name.split(" ")[0]} anything
        </h2>
        <p className="text-[#64748b] text-sm mb-8 max-w-xl">
          This AI reasons from the civic prompt above. Its answers, its biases, and its reasoning are all public. Push it on edge cases.
        </p>
        <div className="max-w-2xl">
          <ChatWithQuestions candidateSlug={candidate.slug} fallbackFaqs={candidate.faq} />
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs">
        OpenCandidate is an open platform for candidates who believe governance should be transparent. Not a product. Not a party. A standard.
      </footer>
    </main>
  );
}
