import { ArrowUpRight } from "lucide-react";

export function MindsetChapter() {
  const lenses = [
    {
      num: "01",
      title: "Find the precedents.",
      body: "Before proposing another software answer, survey the commercial and open-source landscape. Understand existing product paradigms, user expectations, and incumbent market barriers so you don't spend months building a product nobody switches to.",
      tagline: "Prevent reinvention of settled interfaces.",
    },
    {
      num: "02",
      title: "Inspect what can be reused.",
      body: "Audit existing open-source libraries, APIs, and models. BeenHere inspects recent commit activity, issue velocity, architectural fit, and copyleft/AGPL licensing terms before you write bespoke code.",
      tagline: "Surface battle-tested code and flag legal landmines.",
    },
    {
      num: "03",
      title: "Look beyond the obvious category.",
      body: "Break out of standard keyword bubbles. Borrow battle-tested patterns from neighboring technical disciplines—such as distributed systems consensus, bioinformatics diffing, or financial ledger immutability.",
      tagline: "Cross-pollinate architectures from adjacent industries.",
    },
    {
      num: "04",
      title: "Decide what actually needs building.",
      body: "Synthesize all evidence into an actionable architectural posture: Adopt existing tools, Fork an unmaintained repo, Integrate via APIs, Extend an existing framework, or Build custom from scratch.",
      tagline: "Replace speculative debate with a concrete engineering posture.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 border-b border-border"
      id="mindset"
      aria-labelledby="mindset-title"
    >
      {/* Chapter Marker */}
      <div className="flex items-center justify-between pb-8 border-b border-border text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-primary font-bold">03</span>
          <span className="text-foreground">The Mindset</span>
        </span>
        <span>FOUR INVESTIGATIVE LENSES</span>
      </div>

      {/* Editorial Spread: Two-Column Monograph Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
        {/* Left Column: Thesis Statement */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
            HOW BEENHERE THINKS
          </span>
          <h2
            id="mindset-title"
            className="font-editorial text-4xl sm:text-5xl text-foreground font-normal leading-[1.08]"
          >
            Software design is largely an act of synthesis.
          </h2>
          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
            Most engineering hours are wasted constructing code that has already been elegantly
            settled in an adjacent repository, an academic paper, or an established commercial
            product. BeenHere equips your coding agent with the disciplined curiosity of a senior
            research scientist.
          </p>
          <div className="pt-4 border-t border-border font-mono text-xs text-foreground/80 space-y-1">
            <div>POSTURE TAXONOMY:</div>
            <div className="text-primary font-semibold">
              ADOPT · INTEGRATE · EXTEND · FORK · BUILD
            </div>
          </div>
        </div>

        {/* Right Column: The 4 Lenses in Staggered Editorial Typography */}
        <div className="lg:col-span-7 space-y-12">
          {lenses.map((lens) => (
            <article
              key={lens.num}
              className="space-y-3 pb-8 border-b border-border/60 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-primary">LENS {lens.num} //</span>
                <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider">
                  {lens.tagline}
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-foreground">
                {lens.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl">
                {lens.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
