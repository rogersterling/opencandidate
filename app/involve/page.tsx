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
      "You want to back an accountability mechanism, not another awareness campaign. Early funding helps build the system, the public record, and the first real implementation.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Fund",
  },
  {
    label: "Run",
    description:
      "You are willing to run for office and be held to the platform you campaigned on. That means publishing decision rules, running major decisions through them, and owning overrides in public.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Run",
  },
];

export default function InvolvePage() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
        <Link
          href="/"
          className="text-[#64748b] text-sm hover:text-[#94a3b8] transition-colors mb-12"
        >
          ← Back
        </Link>
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          Get Involved
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#faf7f2] leading-tight max-w-3xl mb-6">
          Three ways to help make this real.
        </h1>
        <p className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed mb-16">
          OpenCandidate needs people who can test the mechanism, fund the first real deployments, or run for office under a public governing system.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {tracks.map((track) => (
            <div
              key={track.label}
              className="border border-[#1e293b] rounded-lg p-8 flex flex-col"
            >
              <span className="text-[#d97706] font-serif text-2xl mb-4">
                {track.label}
              </span>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 flex-1">
                {track.description}
              </p>
              <a
                href={track.mailto}
                className="inline-block px-6 py-3 border border-[#d97706] text-[#d97706] text-sm font-medium rounded-lg hover:bg-[#d97706] hover:text-white transition-colors text-center"
              >
                Reach out
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs">
        OpenCandidate is an open project for candidates who want voters to see the plan, the recommendation, and the override record.
      </footer>
    </main>
  );
}
