import Link from "next/link";

const artifactRows = [
  {
    label: "Platform",
    value: "No major debt without clear public ROI.",
  },
  {
    label: "Recommendation",
    value: "Vote no on the stadium bond.",
  },
  {
    label: "Action",
    value: "Candidate voted yes.",
  },
  {
    label: "Public note",
    value: "Economic upside justified the exception.",
  },
];

export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-28 pb-20 md:pt-36 md:pb-28 animate-fade-in">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] gap-14 xl:gap-20 items-center">
        <div className="max-w-3xl">
          <p className="text-[#d97706] text-sm uppercase tracking-[0.3em] mb-8">
            OpenCandidate
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.75rem] text-[#faf7f2] leading-[0.96] mb-7 text-balance">
            A candidate platform you can audit after election day.
          </h1>
          <p className="text-[#cbd5e1] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            OpenCandidate turns campaign promises into a public governing system.
            AI applies the platform to real decisions. The public sees the
            recommendation, the action taken, and the score that follows.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Link
              href="/brief"
              className="inline-block px-8 py-4 bg-[#d97706] text-white text-sm font-medium rounded-lg hover:bg-[#b45309] transition-colors"
            >
              Read the brief
            </Link>
            <Link
              href="/create"
              className="inline-block px-8 py-4 border border-[#253247] text-[#faf7f2] text-sm font-medium rounded-lg hover:border-[#d97706] hover:text-[#d97706] transition-colors"
            >
              Build a governing system
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl pt-6 border-t border-[#1e293b]">
            <div>
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.24em] mb-2">Platform</p>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">Published priorities and constraints.</p>
            </div>
            <div>
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.24em] mb-2">Decision</p>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">Recommendation and action shown together.</p>
            </div>
            <div>
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.24em] mb-2">Record</p>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">Drift becomes visible over time.</p>
            </div>
          </div>
        </div>

        <div className="lg:justify-self-end w-full max-w-[34rem]">
          <div className="rounded-[2.2rem] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.62)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_38%)] px-6 py-6 md:px-8 md:py-8 shadow-[0_24px_80px_rgba(2,6,23,0.34)]">
            <div className="flex items-start justify-between gap-6 pb-5 border-b border-[#223046]">
              <div>
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.24em] mb-2">
                  Public record specimen
                </p>
                <h2 className="font-serif text-3xl text-[#faf7f2] leading-tight">
                  One decision, fully visible.
                </h2>
              </div>
              <p className="text-right">
                <span className="block text-[#64748b] text-[11px] uppercase tracking-[0.24em] mb-2">Score</span>
                <span className="font-serif text-4xl text-[#faf7f2] leading-none">78</span>
              </p>
            </div>

            <div className="py-6 space-y-4">
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.24em]">Case file</p>
              <h3 className="font-serif text-[2rem] text-[#faf7f2] leading-tight">Stadium bond vote</h3>
              <div className="h-px bg-[#223046]" />
              <div className="space-y-4">
                {artifactRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[108px_1fr] gap-4 text-sm leading-relaxed">
                    <p className="text-[#64748b] uppercase tracking-[0.18em] text-[11px] pt-0.5">{row.label}</p>
                    <p className={row.label === "Action" ? "text-amber-300" : row.label === "Recommendation" ? "text-[#faf7f2]" : "text-[#cbd5e1]"}>
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#223046] grid sm:grid-cols-[1fr_auto] gap-4 items-end">
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-md">
                The point is not automation theater. It is a public paper trail for governing choices.
              </p>
              <p className="text-[#d97706] text-[11px] uppercase tracking-[0.24em] sm:text-right">
                Recommendation → action → score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
