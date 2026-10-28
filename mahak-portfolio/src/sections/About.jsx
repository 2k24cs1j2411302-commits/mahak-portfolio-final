import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { aboutParagraphs, careerGoals } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="Get to know me" title="About Me" id="about-title" />
        <div className="grid gap-8 md:grid-cols-5">
          <div className="space-y-4 text-slate-700 leading-relaxed md:col-span-3 dark:text-slate-300">
            {aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="card md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Placement goals</h3>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {careerGoals.map((g) => (
                <li key={g} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-gradient" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
