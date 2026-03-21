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
1. [First priority — what you'd spend political capital on first]
2. [Second priority]
3. [Third priority]
4. [Fourth priority]
5. [Fifth priority]

Fiscal approach: [How do you think about spending and revenue?]

Tradeoffs I accept: [What costs are you willing to pay for your priorities?]

Tradeoffs I reject: [What lines won't you cross?]

Tone: [How should the AI sound when representing your positions?]`;

export default function CreatePage() {
  const [race, setRace] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState(starterPrompt);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <main className="min-h-screen">
      <nav className="px-6 md:px-12 lg:px-24 py-6 flex items-center border-b border-[#1e293b]">
        <Link
          href="/"
          className="text-[#64748b] text-sm hover:text-[#faf7f2] transition-colors"
        >
          ← OpenCandidate
        </Link>
      </nav>

      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-4xl animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl text-[#faf7f2] mb-4">
          Create a candidate
        </h1>
        <p className="text-[#94a3b8] mb-12">
          Pick a race, write your civic prompt, and see how an AI would
          represent your values in public.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-[#64748b] text-xs uppercase tracking-widest mb-2">
              Candidate name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your candidate's name"
              className="w-full bg-[#1e293b] text-[#e2e8f0] placeholder-[#475569] px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#d97706]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#64748b] text-xs uppercase tracking-widest mb-2">
                Race
              </label>
              <select
                value={race}
                onChange={(e) => setRace(e.target.value)}
                className="w-full bg-[#1e293b] text-[#e2e8f0] px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#d97706]"
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
              <label className="block text-[#64748b] text-xs uppercase tracking-widest mb-2">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, State"
                className="w-full bg-[#1e293b] text-[#e2e8f0] placeholder-[#475569] px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#d97706]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#64748b] text-xs uppercase tracking-widest mb-2">
              Civic Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={18}
              className="w-full bg-[#1e293b] text-[#e2e8f0] placeholder-[#475569] px-4 py-3 rounded-lg text-sm font-mono leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#d97706] resize-y"
            />
          </div>

          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-6 py-3 bg-[#d97706] text-white text-sm font-medium rounded-lg hover:bg-[#b45309] transition-colors"
          >
            {showPreview ? "Hide preview" : "Preview civic prompt"}
          </button>

          {showPreview && (
            <div className="animate-slide-up">
              <CivicPrompt prompt={prompt} />
              <p className="text-[#475569] text-xs mt-4">
                In V1, candidates are demo-only. Full deployment coming soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
