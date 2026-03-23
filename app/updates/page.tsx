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

A donor asks for an exception. A party leader asks for patience. A budget gets tight. A deal gets cut. By the time voters see the pattern, the explanation is polished and the decision is already old.

OpenCandidate is built around that reality.

The core idea is simple. A campaign platform should not disappear the moment someone takes office.

A candidate should be able to publish the platform they ran on, turn it into explicit decision rules, and govern against those rules in public.

That means the public can compare two things. What the system recommended. What the politician actually did.

That comparison creates a record. It makes quiet drift harder. It gives voters something better than vibes and cleanup statements.

Overrides still happen. They should. Politics has edge cases, emergencies, and facts that change. The issue is not override itself. The issue is whether the override is visible.

We are starting with local politics because the decisions are concrete there. Council votes matter. Budget choices matter. Zoning cases matter.

The current site shows three fictional Austin candidates with different governing logics. The next step is a real candidate willing to use the system in public.`
  },
];

export default function UpdatesPage() {
  return (
    <main>
      <section className="min-h-screen px-6 py-24 md:px-12 lg:px-24">
        <Link
          href="/"
          className="mb-12 inline-block text-sm text-[#64748b] transition-colors hover:text-[#94a3b8]"
        >
          ← Back
        </Link>
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#d97706]">
          Updates
        </p>
        <h1 className="mb-6 font-serif text-4xl text-[#faf7f2] md:text-5xl">
          Project notes
        </h1>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-[#94a3b8]">
          This page is for progress and thinking in public, not for re-explaining the homepage word for word.
        </p>

        <div className="max-w-3xl space-y-16">
          {posts.map((post) => (
            <article key={post.slug}>
              <p className="mb-2 text-xs uppercase tracking-wider text-[#64748b]">
                {post.date} · {post.author}
              </p>
              <h2 className="mb-6 font-serif text-2xl text-[#faf7f2] md:text-3xl">
                {post.title}
              </h2>
              <div className="space-y-4 leading-relaxed text-[#cbd5e1]">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#1e293b] px-6 py-12 text-xs text-[#475569] md:px-12 lg:px-24">
        OpenCandidate is an open project for candidates who want a public governing system people can inspect.
      </footer>
    </main>
  );
}
