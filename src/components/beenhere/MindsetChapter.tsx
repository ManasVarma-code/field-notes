import { ArrowUpRight, Boxes, Compass, GitFork, Scale } from "lucide-react";

const researchLenses = [
  {
    number: "01",
    icon: Compass,
    title: "Map the landscape",
    body: "Find the products people already use, the expectations they set, and the gaps still worth solving.",
    signal: "PRODUCTS · PATTERNS · GAPS",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Find solid foundations",
    body: "Surface useful libraries, APIs, and models. Check their fit, maintenance, and the terms they ship under.",
    signal: "REPOS · APIS · LICENSES",
  },
  {
    number: "03",
    icon: GitFork,
    title: "Borrow proven ideas",
    body: "Look outside the obvious category for patterns from systems that have already solved a similar problem.",
    signal: "ADJACENT FIELDS · SYSTEMS",
  },
  {
    number: "04",
    icon: Scale,
    title: "Choose what to build",
    body: "Turn the evidence into a practical posture: adopt, integrate, extend, fork, or build from scratch.",
    signal: "A DECISION YOU CAN ACT ON",
  },
];

export function MindsetChapter() {
  return (
    <section className="bh-method" id="mindset" aria-labelledby="mindset-title">
      <div className="bh-section-heading">
        <div>
          <span className="bh-section-kicker">THE RESEARCH METHOD</span>
          <h2 id="mindset-title">Four checks before<br />the first commit.</h2>
        </div>
        <p>Good engineering starts with a clear picture of the terrain. BeenHere gives your agent a repeatable way to get one.</p>
      </div>
      <div className="bh-lens-grid">
        {researchLenses.map(({ number, icon: Icon, title, body, signal }) => (
          <article key={number} className="bh-lens-card">
            <div className="bh-lens-top"><span>{number}</span><Icon aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{body}</p>
            <span className="bh-lens-signal">{signal}</span>
          </article>
        ))}
      </div>
      <a className="bh-text-link" href="#invitation">Put the method in your agent <ArrowUpRight aria-hidden="true" /></a>
    </section>
  );
}
