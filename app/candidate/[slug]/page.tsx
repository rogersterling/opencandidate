import { notFound } from "next/navigation";
import { candidates, getCandidate } from "@/lib/candidates";
import CivicPrompt from "@/components/CivicPrompt";
import Chat from "@/components/Chat";
import Link from "next/link";

export function generateStaticParams() {
  return candidates.map((c) => ({ slug: c.slug }));
}

export default async function CandidatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const candidate = getCandidate(slug);
  if (!candidate) notFound();

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

      <div className="px-6 md:px-12 lg:px-24 py-16 animate-fade-in">
        <p className="text-[#d97706] text-sm uppercase tracking-[0.2em] mb-3">
          {candidate.race} · {candidate.location}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-[#faf7f2] mb-2">
          {candidate.name}
        </h1>
        <p className="text-[#94a3b8] text-lg mb-12">{candidate.summary}</p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <CivicPrompt prompt={candidate.civicPrompt} />
          </div>
          <div
            className="animate-slide-up"
            style={{ animationDelay: "150ms" }}
          >
            <h3 className="font-serif text-lg text-[#faf7f2] mb-4">
              Talk to this candidate&apos;s AI
            </h3>
            <Chat candidateSlug={candidate.slug} />
          </div>
        </div>
      </div>
    </main>
  );
}
