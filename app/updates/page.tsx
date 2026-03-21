import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates — OpenCandidate",
  description: "News and updates from the OpenCandidate project.",
};

const posts = [
  {
    slug: "why-opencandidate",
    title: "Why OpenCandidate",
    date: "March 21, 2026",
    author: "OpenCandidate",
    content: `Every politician has a hidden prompt. The donors they listen to, the ideology they absorbed in college, the grudge from a primary ten years ago. All of it shapes how they vote. None of it is written down.

We just accept this. We watch debates, parse stump speeches, scan donor filings. We try to reverse-engineer what a candidate actually believes from breadcrumbs. It works about as well as you'd expect.

So here's the question: what if a candidate just told you?

Not a platform page with bullet points. An actual decision-making framework. Their priorities ranked. Their fiscal philosophy stated. The tradeoffs they'll accept and the ones they won't. Written before they take office.

Then you hand that framework to an AI and let anyone ask it questions. In public. How would this candidate vote on a zoning variance? What would they cut if the budget falls short? Push it on the hard stuff. Find the contradictions. That's the whole point.

OpenCandidate is that idea turned into a standard. A candidate publishes their civic prompt. An AI advisor reasons against it in the open. Citizens interrogate it. The candidate governs alongside it.

We started in Austin because it's the right city for this. Big enough to matter. Weird enough to try something new. Local races where one council seat affects your street, your water bill, your kid's school.

This isn't a product. There's no app to download and no subscription. It's a standard for how candidates can operate if they choose transparency over performance.

We're looking for the first real candidate willing to try it.`,
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
          What&apos;s happening
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
        OpenCandidate is an open platform for candidates who believe governance
        should be transparent. Not a product. Not a party. A standard.
      </footer>
    </main>
  );
}
