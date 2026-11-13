import { ArrowUpRight, Compass, FileSearch, GitFork, Scale } from "lucide-react";

const stages = [
  { number: "01", title: "Frame the question", body: "Define the user, the constraint, and what a useful answer needs to establish.", output: "A bounded inquiry", icon: Compass },
  { number: "02", title: "Survey the terrain", body: "Map existing products and adjacent approaches. Separate recurring needs from assumed gaps.", output: "A landscape map", icon: FileSearch },
  { number: "03", title: "Inspect foundations", body: "Check candidate tools, source code, maintenance signals, and license terms against the use case.", output: "Reusable components", icon: GitFork },
  { number: "04", title: "Make the call", body: "Connect the evidence to a clear posture: adopt, integrate, extend, or build.", output: "A reasoned direction", icon: Scale },
];

export function MindsetChapter() {
  return (
    <section className="bh-method" id="mindset" aria-labelledby="mindset-title">
      <div className="bh-section-heading">
        <div>
          <span className="bh-section-kicker">THE RESEARCH METHOD</span>
          <h2 id="mindset-title">A trail from question<br />to decision.</h2>
        </div>
        <p>Each pass leaves something concrete behind, so the final recommendation can be traced back to what was examined.</p>
      </div>
      <ol className="bh-research-sequence">
        {stages.map(({ number, title, body, output, icon: Icon }) => (
          <li key={number} className="bh-research-stage">
            <div className="bh-stage-marker"><span>{number}</span><Icon aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{body}</p>
            <span className="bh-stage-output"><span>LEAVES</span>{output}</span>
          </li>
        ))}
      </ol>
      <a className="bh-text-link" href="#invitation">Put the method in your agent <ArrowUpRight aria-hidden="true" /></a>
    </section>
  );
}
