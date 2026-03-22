export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 animate-fade-in">
      <p className="text-[#d97706] text-sm uppercase tracking-[0.3em] mb-6">
        OpenCandidate
      </p>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#faf7f2] leading-[1.05] max-w-5xl mb-8">
        Hold politicians to the platform they ran on.
      </h1>
      <p className="text-[#94a3b8] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
        OpenCandidate turns a campaign platform into a public decision model.
        AI uses that model to draft policy, analyze votes, and score whether a
        politician is sticking to the plan.
      </p>
      <p className="text-[#64748b] text-sm uppercase tracking-[0.2em] max-w-2xl">
        You may not trust AI. Fair enough. A public model is still easier to
        audit than a private conversation with a donor.
      </p>
    </section>
  );
}
