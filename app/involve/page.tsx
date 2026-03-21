import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved — OpenCandidate",
  description: "Advise, fund, or run as the first OpenCandidate.",
};

const tracks = [
  {
    label: "Advise",
    description:
      "You have civic tech, local government, or campaign experience. We need people who understand how elections actually work and where transparency breaks down.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Advise",
  },
  {
    label: "Fund",
    description:
      "You back transparency and democratic innovation. OpenCandidate is pre-revenue and intentionally non-partisan. Early funding keeps it independent.",
    mailto: "mailto:sam@runpoint.ai?subject=OpenCandidate%20-%20Fund",
  },
  {
    label: "Run",
    description:
      "You're considering running as the first OpenCandidate. City council, school board, mayor. Any race where voters deserve to see the reasoning behind every decision.",
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
          Three ways to help build this.
        </h1>
        <p className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed mb-16">
          OpenCandidate is early. The advisory board is forming, funding is
          open, and we're looking for the first real candidate willing to run
          transparent.
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
        OpenCandidate is an open platform for candidates who believe governance
        should be transparent. Not a product. Not a party. A standard.
      </footer>
    </main>
  );
}
