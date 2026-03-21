export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 animate-fade-in">
      <p className="text-[#d97706] text-sm uppercase tracking-[0.3em] mb-6">
        A civic experiment
      </p>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#faf7f2] leading-[1.05] max-w-4xl mb-8">
        Every politician has a hidden prompt.
        <br />
        <span className="text-[#d97706]">Make it readable.</span>
      </h1>
      <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
        OpenCandidate puts AI at the center of civic governance. Candidates
        publish a civic prompt. An AI advisor reasons from it in public. You
        interrogate both.
      </p>
      <p className="text-[#64748b] text-sm uppercase tracking-[0.2em]">
        Transparency, not objectivity
      </p>
    </section>
  );
}
