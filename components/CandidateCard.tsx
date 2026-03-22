import Link from "next/link";
import { Candidate } from "@/lib/candidates";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  const latestDecision = candidate.recentDecisions[0];

  return (
    <Link
      href={`/candidate/${candidate.slug}`}
      className="group block py-10 border-b border-[#1e293b] last:border-b-0 transition-all duration-300 hover:translate-x-1"
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_220px] gap-8 lg:gap-10 items-start">
        <div className="max-w-3xl">
          <div className="flex flex-col gap-3 mb-4">
            <span className="text-xs text-[#64748b] uppercase tracking-[0.22em]">
              {candidate.race} · {candidate.location}
            </span>
            <h3 className="font-serif text-3xl md:text-[2.2rem] text-[#faf7f2] group-hover:text-[#d97706] transition-colors">
              {candidate.name}
            </h3>
          </div>
          <p className="text-[#d97706] text-sm font-medium mb-4">
            &ldquo;{candidate.tagline}&rdquo;
          </p>
          <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl mb-5">
            {candidate.summary}
          </p>
          {latestDecision && (
            <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm border-t border-[#1e293b] pt-5 max-w-2xl">
              <p className="text-[#64748b] uppercase tracking-[0.18em] text-[11px] shrink-0">Latest decision</p>
              <p className="text-[#cbd5e1] flex-1">{latestDecision.issue}</p>
              <span className={`text-[11px] uppercase tracking-[0.18em] ${latestDecision.outcome === "Aligned" ? "text-emerald-400" : "text-amber-300"}`}>
                {latestDecision.outcome}
              </span>
            </div>
          )}
        </div>

        <div className="lg:text-right lg:pt-1">
          <p className="text-[#64748b] text-[11px] uppercase tracking-[0.22em] mb-2">
            Alignment score
          </p>
          <p className="font-serif text-6xl text-[#faf7f2] leading-none mb-3">{candidate.alignmentScore}</p>
          <p className={`text-sm mb-5 ${candidate.scoreDelta >= 0 ? "text-emerald-400" : "text-amber-300"}`}>
            {candidate.scoreDelta >= 0 ? `+${candidate.scoreDelta}` : candidate.scoreDelta} this month
          </p>
          <div className="h-1.5 rounded-full bg-[#1e293b] overflow-hidden lg:ml-auto lg:max-w-[180px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b]"
              style={{ width: `${candidate.alignmentScore}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
