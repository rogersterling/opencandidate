import Link from "next/link";
import { Candidate } from "@/lib/candidates";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  const latestDecision = candidate.recentDecisions[0];

  return (
    <Link
      href={`/candidate/${candidate.slug}`}
      className="group block py-8 border-b border-[#1e293b] last:border-b-0 transition-all duration-300 hover:translate-x-1"
    >
      <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-start">
        <div>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
            <h3 className="font-serif text-2xl md:text-3xl text-[#faf7f2] group-hover:text-[#d97706] transition-colors">
              {candidate.name}
            </h3>
            <span className="text-xs text-[#64748b] uppercase tracking-widest">
              {candidate.race} · {candidate.location}
            </span>
          </div>
          <p className="text-[#d97706] text-sm font-medium mb-3">
            &ldquo;{candidate.tagline}&rdquo;
          </p>
          <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl mb-4">
            {candidate.summary}
          </p>
          {latestDecision && (
            <div className="rounded-2xl border border-[#1e293b] bg-[#111827]/40 px-4 py-3 max-w-2xl">
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-2">
                Recent decision
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p className="text-[#faf7f2] text-sm">{latestDecision.issue}</p>
                <span className={`text-xs uppercase tracking-[0.18em] ${latestDecision.outcome === "Aligned" ? "text-emerald-400" : "text-amber-300"}`}>
                  {latestDecision.outcome}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-[#253247] bg-[#0f172a]/70 p-5">
          <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-2">
            Alignment score
          </p>
          <div className="flex items-end justify-between gap-4 mb-4">
            <p className="font-serif text-5xl text-[#faf7f2] leading-none">{candidate.alignmentScore}</p>
            <p className={`text-sm ${candidate.scoreDelta >= 0 ? "text-emerald-400" : "text-amber-300"}`}>
              {candidate.scoreDelta >= 0 ? `+${candidate.scoreDelta}` : candidate.scoreDelta} this month
            </p>
          </div>
          <div className="h-2 rounded-full bg-[#1e293b] overflow-hidden mb-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b]"
              style={{ width: `${candidate.alignmentScore}%` }}
            />
          </div>
          <p className="text-[#94a3b8] text-xs leading-relaxed">
            Public score tracking whether decisions match the published governing system.
          </p>
        </div>
      </div>
    </Link>
  );
}
