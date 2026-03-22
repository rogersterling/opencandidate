export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 animate-fade-in">
      <p className="text-[#d97706] text-sm uppercase tracking-[0.3em] mb-6">
        OpenCandidate
      </p>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#faf7f2] leading-[1.05] max-w-5xl mb-8">
        A platform for politicians who want to be held to their word.
      </h1>
      <p className="text-[#94a3b8] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
        OpenCandidate lets candidates publish a driving prompt, use AI to apply
        it to bills, budgets, and policy questions, and get scored on how
        closely they stick to it over time.
      </p>
      <p className="text-[#64748b] text-sm uppercase tracking-[0.2em] max-w-2xl">
        You do not have to like AI to like the idea of politicians being easier
        to audit.
      </p>
    </section>
  );
}
