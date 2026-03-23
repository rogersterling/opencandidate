import Link from "next/link";

const artifactRows = [
  {
    label: "Published rule",
    value: "Permit reform comes before new incentive spending.",
    tone: "text-[#cbd5e1]",
  },
  {
    label: "Recommendation",
    value: "Approve the 30-day permitting pilot.",
    tone: "text-[#faf7f2]",
  },
  {
    label: "Action",
    value: "Passed 6-1.",
    tone: "text-amber-300",
  },
  {
    label: "Public note",
    value: "Pilot is funded from existing operations budget and reviewed in 90 days.",
    tone: "text-[#94a3b8]",
  },
];

export default function Hero() {
  return (
    <section className="animate-fade-in px-4 pb-12 pt-24 sm:px-6 sm:pb-16 md:px-12 md:pb-24 md:pt-32 lg:px-24 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(320px,1.06fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-[38rem]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#d97706]">
            Public governing systems
          </p>
          <h1 className="mb-4 font-serif text-4xl leading-[0.98] text-[#faf7f2] sm:text-5xl md:mb-6 md:text-7xl lg:text-[5.5rem]">
            A candidate platform you can audit after election day.
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-7 text-[#cbd5e1] sm:text-lg md:mb-8 md:text-xl md:leading-8">
            OpenCandidate turns campaign promises into a public governing system.
            The public can inspect the rules, watch a real decision run against them,
            and compare the recommendation to what happened next.
          </p>
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:items-start md:flex-row md:gap-4">
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
          <div className="grid gap-4 border-t border-[#1e293b] pt-6 sm:grid-cols-3 sm:gap-6 sm:pt-8">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Publish it
              </p>
              <p className="text-sm leading-6 text-[#cbd5e1]">
                Priorities, budget posture, and hard lines are stated up front.
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Test it
              </p>
              <p className="text-sm leading-6 text-[#cbd5e1]">
                Major decisions get checked against the same public rules.
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Keep the record
              </p>
              <p className="text-sm leading-6 text-[#cbd5e1]">
                Recommendation, action, and any override stay together.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:justify-self-end lg:max-w-[34rem]">
          <div className="rounded-[28px] border border-[#253247] bg-[linear-gradient(180deg,rgba(250,247,242,0.03),rgba(17,24,39,0.58)),radial-gradient(circle_at_top_right,rgba(217,119,6,0.14),transparent_36%)] p-4 shadow-[0_20px_70px_rgba(2,6,23,0.28)] sm:p-6 md:p-7">
            <div className="border-b border-[#223046] pb-4 sm:pb-5">
              <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Example public record
              </p>
              <h2 className="font-serif text-[1.75rem] leading-tight text-[#faf7f2] sm:text-[2rem] md:text-[2.15rem]">
                One decision. No mystery.
              </h2>
            </div>

            <div className="py-4 sm:py-5">
              <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#64748b]">
                Permit reform pilot
              </p>
              <dl className="grid gap-3">
                {artifactRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-[#1f2b3d] bg-[#0f172a]/40 px-4 py-4"
                  >
                    <dt className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#64748b]">
                      {row.label}
                    </dt>
                    <dd className={`text-sm leading-6 ${row.tone}`}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-[#223046] pt-4 sm:pt-5">
              <p className="max-w-md text-sm leading-6 text-[#94a3b8]">
                This is the basic unit of the product. A published rule, a recommendation, an action, and a public explanation when they diverge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
