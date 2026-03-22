"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/updates", label: "Updates" },
  { href: "/involve", label: "Get Involved" },
  { href: "/brief", label: "Brief" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1e293b]/80 bg-[#0f172a]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-12 lg:px-24">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-[#faf7f2] transition-colors hover:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3b2a10] bg-[#1a140a] text-[11px] font-medium uppercase tracking-[0.18em] text-[#fbbf24]">
            OC
          </span>
          <span className="truncate font-serif text-base tracking-tight sm:text-lg">OpenCandidate</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#94a3b8] transition-colors hover:text-[#faf7f2]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#253247] text-[#cbd5e1] transition-colors hover:border-[#d97706] hover:text-[#faf7f2] md:hidden"
        >
          <span className="relative block h-4 w-4">
            <span
              className={`absolute left-0 top-[2px] h-[1.5px] w-4 bg-current transition-all ${open ? "top-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-4 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[1.5px] w-4 bg-current transition-all ${open ? "top-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1e293b] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-transparent px-4 py-3 text-base text-[#cbd5e1] transition-colors hover:border-[#253247] hover:bg-[#111a2b] hover:text-[#faf7f2]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
