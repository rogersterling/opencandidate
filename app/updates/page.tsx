import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates — OpenCandidate",
  description: "Notes on the OpenCandidate project and public governing systems.",
};

const posts = [
  {
    slug: "why-opencandidate",
    title: "Why OpenCandidate exists",
    date: "March 22, 2026",
    author: "OpenCandidate",
    content: `Most politicians do not break their promises all at once. They drift.

A donor asks for an exception. A party leader asks for patience. A budget gets tight. A deal gets cut. By the time voters see the pattern, the explanation is already polished and the decision is already made.

OpenCandidate is built around that reality.

The point is not that AI should run government. The point is that a campaign platform should not disappear the moment someone takes office.

A candidate should be able to publish the platform they ran on, turn it into explicit decision rules, and govern through those rules in public. Bills, budgets, land use votes, procurement decisions. The repetitive work of applying the rules can be done by AI. The officeholder remains the officeholder.

Then the public can compare two things: what the system recommended and what the politician actually did.

That comparison matters. It creates a public record of alignment and override. It makes quiet drift harder. It makes political pressure easier to spot. It gives voters something better than vibes and cleanup statements.

Overrides still happen. They should. Politics has edge cases, emergencies, and facts that change. The problem is not override. The problem is hidden override.

That is the whole idea in one line: hold politicians to the platform they ran on.

We are starting with local politics because the work is concrete there. Council votes matter. Budget choices matter. Zoning decisions matter. A city is small enough to implement this and large enough for the public record to matter.

The current site shows three fictional Austin candidates with different campaign platforms and different governing rules. The next step is a real candidate willing to bind themselves to the system in public.`
  },
];

export default function UpdatesPage() {
  return (
    <main>
      <section className="px-6 md:px-12 lg:px-24 py-24 min-h-screen">
        <Link
          href="/"
          className="text-[#64748b] text-sm hover:text-[#94a3b8] transition-colors mb-12 inline-block"
        >
          ← Back
        </Link>
        <p className="text-[#d97706] text-xs uppercase tracking-[0.2em] mb-6">
          Updates
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#faf7f2] mb-16">
          Project notes
        </h1>

        <div className="max-w-3xl space-y-16">
          {posts.map((post) => (
            <article key={post.slug}>
              <p className="text-[#64748b] text-xs uppercase tracking-wider mb-2">
                {post.date} · {post.author}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-[#faf7f2] mb-6">
                {post.title}
              </h2>
              <div className="text-[#cbd5e1] leading-relaxed space-y-4">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1e293b] text-[#475569] text-xs">
        OpenCandidate is an open project for candidates who want a public governing system people can inspect.
      </footer>
    </main>
  );
}
