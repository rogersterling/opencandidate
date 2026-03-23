import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved — OpenCandidate",
  description: "Advise, fund, or run with a public governing system.",
};

const tracks = [
  {
    label: "Advise",
    description:
      "You know campaigns, local government, policy operations, or civic tech. We need people who can pressure-test the mechanism against how politics actually works.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Advise",
  },
  {
    label: "Fund",
    description:
      "You want to back an accountability mechanism, not another awareness campaign. Early funding helps build the product, the public record, and the first real implementation.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Fund",
  },
  {
    label: "Run",
    description:
      "You are willing to run for office and be held to the platform you campaigned on. That means publishing decision rules, routing major choices through them, and owning overrides in public.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Run",
  },
];

export default function InvolvePage() {
  return (
    <main>
      <section className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24">
        <Link
          href="/"
          className="mb-12 text-sm text-[#64748b] transition-colors hover:text-[#94a3b8]"
        >
          ← Back
        </Link>
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
          Get Involved
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-4xl leading-tight text-[#faf7f2] md:text-5xl">
          Three ways to help make this real.
        </h1>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-[#94a3b8]">
          This page is the conversion page. Pick the lane that fits. We do not need everyone to do everything.
        </p>

        <div className="grid max-w-5xl gap-8 md:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.label}
              className="flex flex-col rounded-lg border border-[#1e293b] p-8"
            >
              <span className="mb-4 font-serif text-2xl text-[#d97706]">
                {track.label}
              </span>
              <p className="mb-8 flex-1 text-sm leading-relaxed text-[#94a3b8]">
                {track.description}
              </p>
              <a
                href={track.mailto}
                className="inline-block rounded-lg border border-[#d97706] px-6 py-3 text-center text-sm font-medium text-[#d97706] transition-colors hover:bg-[#d97706] hover:text-white"
              >
                Reach out
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#1e293b] px-6 py-12 text-xs text-[#475569] md:px-12 lg:px-24">
        OpenCandidate is an open project for candidates who want voters to see the plan, the action, and any override that followed.
      </footer>
    </main>
  );
}
