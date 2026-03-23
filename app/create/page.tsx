"use client";

import { useState } from "react";
import Link from "next/link";
import CivicPrompt from "@/components/CivicPrompt";

const races = [
  "Mayor",
  "City Council",
  "School Board",
  "County Judge",
  "State Representative",
  "Governor",
];

const starterPrompt = `Core value: [What matters most to you in one sentence]

Priorities (in order):
1. [First governing priority — what you would spend political capital on first]
2. [Second governing priority]
3. [Third governing priority]
4. [Fourth governing priority]
5. [Fifth governing priority]

Fiscal approach: [How should this governing system think about spending, revenue, debt, and savings?]

Tradeoffs I accept: [What costs are you willing to accept to follow the platform?]

Tradeoffs I reject: [What lines will this governing system not cross?]

Tone: [How should the public-facing system sound when explaining decisions?]`;

export default function CreatePage() {
  const [race, setRace] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState(starterPrompt);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <main className="min-h-screen">
      <nav className="flex items-center border-b border-[#1e293b] px-6 py-6 md:px-12 lg:px-24">
        <Link
          href="/"
          className="text-sm text-[#64748b] transition-colors hover:text-[#faf7f2]"
        >
          ← OpenCandidate
        </Link>
      </nav>

      <div className="max-w-4xl animate-fade-in px-6 py-16 md:px-12 lg:px-24">
        <h1 className="mb-4 font-serif text-4xl text-[#faf7f2] md:text-5xl">
          Build a public governing system
        </h1>
        <p className="mb-12 max-w-2xl leading-relaxed text-[#94a3b8]">
          This page is the builder. Fill in the structure below and preview how a candidate page would publish it. The raw labels remain because they are useful inputs, not because they are pretty marketing copy.
        </p>

        <div className="space-y-8">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#64748b]">
              Candidate name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your candidate's name"
              className="w-full rounded-lg bg-[#1e293b] px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:ring-1 focus:ring-[#d97706]"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[#64748b]">
                Race
              </label>
              <select
                value={race}
                onChange={(e) => setRace(e.target.value)}
                className="w-full rounded-lg bg-[#1e293b] px-4 py-3 text-sm text-[#e2e8f0] focus:outline-none focus:ring-1 focus:ring-[#d97706]"
              >
                <option value="">Select a race</option>
                {races.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-[#64748b]">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, State"
                className="w-full rounded-lg bg-[#1e293b] px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:ring-1 focus:ring-[#d97706]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-[#64748b]">
              Campaign platform and decision rules
            </label>
            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[#64748b]">
              Use this structure to define priorities, fiscal posture, accepted tradeoffs, and hard lines. The preview below shows how that foundation becomes a public record.
            </p>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={18}
              className="w-full resize-y rounded-lg bg-[#1e293b] px-4 py-3 font-mono text-sm leading-relaxed text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:ring-1 focus:ring-[#d97706]"
            />
          </div>

          <button
            onClick={() => setShowPreview(!showPreview)}
            className="rounded-lg bg-[#d97706] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b45309]"
          >
            {showPreview ? "Hide preview" : "Preview governing system"}
          </button>

          {showPreview && (
            <div className="animate-slide-up">
              <CivicPrompt prompt={prompt} />
              <p className="mt-4 text-xs text-[#475569]">
                Demo mode for now. This preview shows how the governing system would be published on a candidate page.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
