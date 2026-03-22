import Link from "next/link";

const heroStats = [
  { label: "Platform published", value: "1" },
  { label: "Decision engine", value: "Public" },
  { label: "Output", value: "Recommendation" },
  { label: "Accountability", value: "Alignment score" },
];

export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-28 pb-16 md:pt-36 md:pb-20 animate-fade-in">
      <div className="max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
        <div>
          <p className="text-[#d97706] text-sm uppercase tracking-[0.3em] mb-6">
            OpenCandidate
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-[#faf7f2] leading-[0.98] max-w-5xl mb-6">
            A candidate platform you can audit after election day.
          </h1>
          <p className="text-[#cbd5e1] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            OpenCandidate turns campaign promises into a public governing system.
            AI applies the platform to real decisions. The public sees the
            recommendation, the action taken, and the score that follows.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <Link
              href="/brief"
              className="inline-block px-8 py-4 bg-[#d97706] text-white text-sm font-medium rounded-lg hover:bg-[#b45309] transition-colors"
            >
              Read the brief
            </Link>
            <Link
              href="/create"
              className="inline-block px-8 py-4 border border-[#1e293b] text-[#faf7f2] text-sm font-medium rounded-lg hover:border-[#d97706] hover:text-[#d97706] transition-colors"
            >
              Build a governing system
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-[#94a3b8]">
            <span className="rounded-full border border-[#1e293b] px-3 py-2">PLATFORM</span>
            <span className="rounded-full border border-[#1e293b] px-3 py-2">SYSTEM</span>
            <span className="rounded-full border border-[#1e293b] px-3 py-2">RECOMMENDATION</span>
            <span className="rounded-full border border-[#1e293b] px-3 py-2">ACTION</span>
            <span className="rounded-full border border-[#1e293b] px-3 py-2">SCORE</span>
          </div>
        </div>

        <div className="border border-[#2b3448] rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.18),_transparent_45%),_rgba(15,23,42,0.92)] p-6 md:p-8 shadow-[0_0_60px_rgba(15,23,42,0.45)]">
          <div className="flex items-center justify-between border-b border-[#243041] pb-4 mb-5">
            <div>
              <p className="text-[#d97706] text-[11px] uppercase tracking-[0.24em] mb-2">
                Live concept view
              </p>
              <p className="font-serif text-2xl text-[#faf7f2]">
                Public accountability loop
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#64748b] text-[11px] uppercase tracking-[0.24em]">
                Status
              </p>
              <p className="text-emerald-400 text-sm">Visible</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#223046] bg-[#0f172a]/70 p-4">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-2">
                  {item.label}
                </p>
                <p className="text-[#faf7f2] text-base md:text-lg">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#223046] bg-[#111827]/70 p-5 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-1">
                  Example decision
                </p>
                <p className="text-[#faf7f2] text-lg">Stadium bond vote</p>
              </div>
              <div className="text-right">
                <p className="text-[#64748b] text-[11px] uppercase tracking-[0.2em] mb-1">
                  Alignment score
                </p>
                <p className="font-serif text-3xl text-[#faf7f2]">78</p>
              </div>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-[#1f2937] pb-3">
                <span className="text-[#64748b] uppercase tracking-[0.18em] text-[11px]">Platform</span>
                <p className="text-[#cbd5e1] text-right max-w-[16rem]">No major debt without clear public ROI.</p>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[#1f2937] pb-3">
                <span className="text-[#64748b] uppercase tracking-[0.18em] text-[11px]">AI recommendation</span>
                <p className="text-[#faf7f2] text-right">Vote NO</p>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[#1f2937] pb-3">
                <span className="text-[#64748b] uppercase tracking-[0.18em] text-[11px]">Politician action</span>
                <p className="text-amber-300 text-right">Voted YES</p>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-[#64748b] uppercase tracking-[0.18em] text-[11px]">Override note</span>
                <p className="text-[#94a3b8] text-right max-w-[16rem]">
                  I believed the economic upside justified the exception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
