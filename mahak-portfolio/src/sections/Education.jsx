import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="Academics" title="Education" id="education-title" />
        <ol className="relative mx-auto max-w-3xl space-y-6 border-l-2 border-violet-500/40 pl-8">
          {education.map((e) => (
            <li key={e.school} className="card">
              <span aria-hidden="true" className="absolute -left-[9px] mt-7 h-4 w-4 rounded-full bg-brand-gradient" />
              <div className="flex items-start gap-3">
                <GraduationCap size={22} className="mt-1 shrink-0 text-violet-500" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{e.school}</p>
                  <p className="mt-1 text-xs text-slate-500">{e.period}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
