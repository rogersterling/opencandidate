import Link from "next/link";
import { Candidate } from "@/lib/candidates";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <Link
      href={`/candidate/${candidate.slug}`}
      className="group block py-8 border-b border-[#1e293b] last:border-b-0 hover:pl-2 transition-all duration-300"
    >
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="font-serif text-2xl text-[#faf7f2] group-hover:text-[#d97706] transition-colors">
          {candidate.name}
        </h3>
        <span className="text-xs text-[#64748b] uppercase tracking-widest">
          {candidate.race} · {candidate.location}
        </span>
      </div>
      <p className="text-[#d97706] text-sm font-medium mb-2">
        &ldquo;{candidate.tagline}&rdquo;
      </p>
      <p className="text-[#94a3b8] text-sm leading-relaxed max-w-2xl">
        {candidate.summary}
      </p>
    </Link>
  );
}
