import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#1e293b]/80 bg-[#0f172a]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link href="/" className="flex items-center gap-3 text-[#faf7f2] transition-colors hover:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#3b2a10] bg-[#1a140a] text-[11px] font-medium uppercase tracking-[0.18em] text-[#fbbf24]">
            OC
          </span>
          <span className="font-serif text-lg tracking-tight">OpenCandidate</span>
        </Link>

        <div className="flex items-center gap-5 text-sm md:gap-6">
          <Link href="/updates" className="text-[#94a3b8] transition-colors hover:text-[#faf7f2]">
            Updates
          </Link>
          <Link href="/involve" className="text-[#94a3b8] transition-colors hover:text-[#faf7f2]">
            Get Involved
          </Link>
          <Link href="/brief" className="text-[#94a3b8] transition-colors hover:text-[#faf7f2]">
            Brief
          </Link>
        </div>
      </div>
    </nav>
  );
}
