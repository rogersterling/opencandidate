import Link from "next/link";

const artifactRows = [
  {
    label: "Platform",
    value: "No major debt without clear public ROI.",
    tone: "text-[#cbd5e1]",
  },
  {
    label: "Recommendation",
    value: "Vote no on the stadium bond.",
    tone: "text-[#faf7f2]",
  },
  {
    label: "Action",
    value: "Candidate voted yes.",
    tone: "text-amber-300",
  },
  {
    label: "Public note",
    value: "Economic upside justified the exception.",
    tone: "text-[#94a3b8]",
  },
];

export default function Hero() {
  return (
    <section className="animate-fade-in px-4 pb-16 pt-28 sm:px-6 md:px-12 md:pb-24 md:pt-36 lg:px-24 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(320px,1.06fr)] lg:gap-16 xl:gap-20">
        <div className="max-w-[40rem] pt-0 md:pt-4">
          <p className="mb-6 text-[11px] uppercase tracking-[0.24em] text-[#d97706]">
            Public governing systems
          </p>
          <h1 className="mb-6 font-serif text-4xl leading-[0.98] text-[#faf7f2] sm:text-5xl md:mb-8 md:text-7xl lg:text-[5.75rem]">
            A candidate platform you can audit after election day.
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-7 text-[#cbd5e1] sm:text-lg md:mb-12 md:text-xl md:leading-8">
            OpenCandidate turns campaign promises into a public governing system.
            AI applies the platform to real decisions. The public sees the
            recommendation, the action taken, and the score that follows.
          </p>
          <div className="mb-8 flex flex-col items-stretch gap-3 sm:mb-12 sm:items-start sm:gap-4 md:flex-row">
            <Link
              href="/brief"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d97706] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b45309] md:px-8 md:py-4"
            >
              Read the brief
            </Link>
            <Link
              href="/create"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#253247] px-6 py-3 text-sm font-medium text-[#faf7f2] transition-colors hover:border-[#d97706] hover:text-[#d97706] md:px-8 md:py-4"
            >
              Build a governing system
            </Link>
          </div>
          <div className="grid max-w-2xl gap-6 border-t border-[#1e293b] pt-8 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Platform
              </p>
              <p className="text-sm leading-6 text-[#cbd5e1]">
                Published priorities and constraints.
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Decision
              </p>
              <p className="text-sm leading-6 text-[#cbd5e1]">
                Recommendation and action shown together.
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Record
              </p>
              <p className="text-sm leading-6 text-[#cbd5e1]">
                Drift becomes visible over time.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:justify-self-end lg:max-w-[36rem]">
          <div className="rounded-[28px] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.62)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_38%)] p-4 shadow-[0_24px_80px_rgba(2,6,23,0.34)] sm:p-6 md:rounded-[2.25rem] md:p-8">
            <div className="grid gap-4 border-b border-[#223046] pb-5 sm:gap-6 sm:pb-6 md:grid-cols-[minmax(0,1fr)_96px] md:items-start">
              <div className="min-w-0">
                <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                  Public record specimen
                </p>
                <h2 className="font-serif text-[1.75rem] leading-tight text-[#faf7f2] sm:text-[2rem] md:text-[2.25rem]">
                  One decision, fully visible.
                </h2>
              </div>
              <div className="grid gap-2 rounded-2xl border border-[#1f2b3d] bg-[#0f172a]/44 px-4 py-4 md:block md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:pt-0 md:border-l md:border-[#223046] md:pl-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#64748b] md:text-right">
                  Score
                </p>
                <p className="font-serif text-4xl leading-none text-[#faf7f2] md:text-right md:text-5xl">
                  78
                </p>
              </div>
            </div>

            <div className="grid gap-5 py-5 sm:gap-6 sm:py-6">
              <div className="grid gap-3 border-b border-[#223046] pb-5 sm:pb-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                  Case file
                </p>
                <h3 className="font-serif text-[1.75rem] leading-tight text-[#faf7f2] sm:text-[2rem]">
                  Stadium bond vote
                </h3>
              </div>

              <dl className="grid gap-4">
                {artifactRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 rounded-2xl border border-[#1f2b3d] bg-[#0f172a]/44 px-4 py-4 sm:px-5 md:grid-cols-[112px_minmax(0,1fr)] md:gap-x-5"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-[#64748b] md:pt-1">
                      {row.label}
                    </dt>
                    <dd className={`min-w-0 text-sm leading-6 ${row.tone}`}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-4 border-t border-[#223046] pt-5 sm:pt-6 md:grid-cols-[minmax(0,1fr)_176px] md:items-end md:gap-6">
              <p className="max-w-md text-sm leading-6 text-[#94a3b8]">
                The point is not automation theater. It is a public paper trail for governing choices.
              </p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#d97706] md:text-right">
                Recommendation → action → score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
