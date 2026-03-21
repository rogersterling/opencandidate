export default function CivicPrompt({ prompt }: { prompt: string }) {
  return (
    <div className="bg-[#1e293b]/50 border border-[#334155] rounded-lg p-6">
      <h3 className="font-serif text-lg text-[#d97706] mb-4 tracking-wide">
        The Civic Prompt
      </h3>
      <pre className="whitespace-pre-wrap text-sm text-[#cbd5e1] leading-relaxed font-mono">
        {prompt}
      </pre>
    </div>
  );
}
