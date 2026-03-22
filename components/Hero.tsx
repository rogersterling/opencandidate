import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 animate-fade-in pt-24 pb-16">
      <p className="text-[#d97706] text-sm uppercase tracking-[0.3em] mb-6">
        OpenCandidate
      </p>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#faf7f2] leading-[1.02] max-w-5xl mb-8">
        Hold politicians to the platform they ran on.
      </h1>
      <p className="text-[#94a3b8] text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
        OpenCandidate turns a campaign platform into a public governing system.
        AI applies it to bills, budgets, and major decisions. The public can see
        when a politician follows the plan and when they do not.
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
          className="inline-block px-8 py-4 border border-[#1e293b] text-[#faf7f2] text-sm font-medium rounded-lg hover:border-[#d97706] hover:text-[#d97706] transition-colors"
        >
          Build a governing system
        </Link>
      </div>
      <p className="text-[#64748b] text-sm uppercase tracking-[0.2em] max-w-3xl">
        A politician can drift in private. A public governing system can only drift in public.
      </p>
    </section>
  );
}
