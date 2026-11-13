import {
  ArrowUpRight,
  Check,
  Compass,
  GitFork,
  Lightbulb,
  Layers,
  ShieldCheck,
} from "lucide-react";

export function MethodSection() {
  const steps = [
    {
      num: "01",
      name: "PRECEDENTS",
      title: "Find what exists and who's shipping it.",
      icon: Compass,
      description:
        "Before proposing another software answer, survey the commercial and open-source landscape. Understand existing product paradigms, user expectations, and incumbent market barriers so you don't build a product nobody switches to.",
      engineeringImpact:
        "Clarifies the established products, user expectations, and open questions in the category.",
      concreteFinding:
        "e.g., Discover that Ashby and Greenhouse already solve ATS pipelines, uncovering the real need: a webhook-driven AI review layer.",
    },
    {
      num: "02",
      name: "CODE",
      title: "Trace reusable repositories and inspect dependencies.",
      icon: Layers,
      description:
        "Audit existing open-source libraries, APIs, and models. BeenHere inspects recent commit activity, issue velocity, architectural fit, and copyleft/AGPL licensing terms before you write bespoke code.",
      engineeringImpact:
        "Checks technical fit, maintenance signals, and license terms before adoption.",
      concreteFinding:
        "e.g., Identify Docling (MIT) for document parsing; flag PyMuPDF's AGPL-3.0 terms to avoid unwanted copyleft contamination.",
    },
    {
      num: "03",
      name: "ADJACENT FIELDS",
      title: "Look sideways at neighboring industries and papers.",
      icon: Lightbulb,
      description:
        "Look beyond standard keyword searches for patterns from neighboring technical disciplines—such as distributed systems consensus, bioinformatics diffing, or financial ledger immutability.",
      engineeringImpact:
        "Surfaces approaches from neighboring disciplines that may transfer to the problem.",
      concreteFinding:
        "e.g., Borrow CRDT sequence algorithms originally developed for collaborative CAD to build an offline-first collaborative editor.",
    },
    {
      num: "04",
      name: "DECISION",
      title: "Formulate a concrete build trajectory.",
      icon: GitFork,
      description:
        "Synthesize all evidence into an actionable architectural posture: Adopt existing tools, Fork an unmaintained repo, Integrate via APIs, Extend an existing framework, or Build custom from scratch.",
      engineeringImpact:
        "Replaces vague brainstorming with a grounded, evidence-backed engineering roadmap.",
      concreteFinding:
        "e.g., Concrete recommendation: 'Integrate via ATS webhooks, adopt Docling, extend with custom reranking model.'",
    },
  ];

  const buildPostures = [
    { name: "ADOPT", desc: "Use existing libraries or SaaS when their capabilities fit the requirements." },
    {
      name: "INTEGRATE",
      desc: "Build a focused value-add layer on top of established platforms via APIs.",
    },
    { name: "EXTEND", desc: "Add custom plugins or modules to mature open-source foundations." },
    { name: "FORK", desc: "Branch an active or abandoned repo when core features diverge." },
    { name: "BUILD", desc: "Write from scratch only for genuinely unique, unaddressed problems." },
  ];

  return (
    <section className="bh-method-section" id="method" aria-labelledby="method-title">
      <div className="bh-section-label">
        <span>02</span>
        <span>THE METHOD</span>
        <span className="bh-label-line" />
        <span>FOUR INVESTIGATIVE PASSES</span>
      </div>

      <div className="bh-method-intro">
        <h2 id="method-title">
          Research the landscape.
          <br />
          <em>Then decide what deserves code.</em>
        </h2>
        <p>
          Not a search box with a new name. A disciplined pass through the evidence that shapes
          high-leverage engineering decisions before implementation begins.
        </p>
      </div>

      <div className="bh-steps">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.num} className="bh-step">
              <span className="bh-step-number">{step.num}</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  <span className="bh-step-label">{step.name}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-border/60 text-[11px]">
                  <div className="border border-border/60 bg-card/60 p-2.5 rounded-xs">
                    <span className="font-mono text-[9px] text-primary uppercase block">
                      Engineering Impact
                    </span>
                    <span className="text-foreground/90 font-medium">{step.engineeringImpact}</span>
                  </div>
                  <div className="border border-border/60 bg-card/60 p-2.5 rounded-xs">
                    <span className="font-mono text-[9px] text-muted-foreground uppercase block">
                      Concrete Finding
                    </span>
                    <span className="font-mono text-[10px] text-foreground/80">
                      {step.concreteFinding}
                    </span>
                  </div>
                </div>
              </div>
              <ArrowUpRight
                className="hidden sm:inline-block size-4 text-primary"
                aria-hidden="true"
              />
            </article>
          );
        })}
      </div>

      {/* Decision Taxonomy Box */}
      <div className="mt-12 border border-border bg-card p-6 rounded-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border gap-2">
          <div>
            <span className="font-mono text-[10px] uppercase text-primary">SYNTHESIS TAXONOMY</span>
            <h3 className="font-editorial text-2xl font-normal text-foreground mt-1">
              The Five Build Postures
            </h3>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-sm">
            BeenHere categorizes every research inquiry into one of five definitive engineering
            postures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-4">
          {buildPostures.map((posture) => (
            <div
              key={posture.name}
              className="border border-border/70 bg-background/70 p-3 rounded-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-primary block">
                  {posture.name}
                </span>
                <p className="mt-1 text-xs text-foreground/80 font-sans leading-relaxed">
                  {posture.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/50 font-mono text-[9px] text-muted-foreground">
                POSTURE // {posture.name.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
