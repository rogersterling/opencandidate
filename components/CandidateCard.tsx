import Link from "next/link";
import { Candidate } from "@/lib/candidates";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  const latestDecision = candidate.recentDecisions[0];

  return (
    <Link
      href={`/candidate/${candidate.slug}`}
      className="group block border-b border-[#1e293b] py-6 transition-all duration-300 hover:translate-x-1 md:py-8 last:border-b-0"
    >
      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
        <div className="max-w-3xl">
          <div className="mb-3 flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#64748b]">
              {candidate.race} · {candidate.location}
            </span>
            <h3 className="font-serif text-[1.9rem] leading-tight text-[#faf7f2] transition-colors group-hover:text-[#d97706] md:text-[2.2rem]">
              {candidate.name}
            </h3>
          </div>
          <p className="mb-3 text-sm font-medium text-[#d97706]">
            &ldquo;{candidate.tagline}&rdquo;
          </p>
          <p className="mb-4 max-w-2xl text-sm leading-7 text-[#94a3b8]">
            {candidate.summary}
          </p>
          {latestDecision && (
            <div className="grid max-w-2xl gap-3 border-t border-[#1e293b] pt-4 text-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-4">
              <div>
                <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">
                  Most recent test
                </p>
                <p className="text-[#cbd5e1]">{latestDecision.issue}</p>
              </div>
              <span
                className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] ${
                  latestDecision.outcome === "Aligned"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                }`}
              >
                {latestDecision.outcome}
              </span>
            </div>
          )}
        </div>

        <div className="hidden rounded-[24px] border border-[#223046] bg-[#111827]/24 p-5 lg:block lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:pt-1 lg:text-right">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#64748b]">
            Alignment score
          </p>
          <p className="mb-3 font-serif text-5xl leading-none text-[#faf7f2] md:text-6xl">
            {candidate.alignmentScore}
          </p>
          <p
            className={`mb-5 text-sm ${
              candidate.scoreDelta >= 0 ? "text-emerald-400" : "text-amber-300"
            }`}
          >
            {candidate.scoreDelta >= 0 ? `+${candidate.scoreDelta}` : candidate.scoreDelta} this month
          </p>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#1e293b] lg:ml-auto lg:max-w-[180px]">
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
