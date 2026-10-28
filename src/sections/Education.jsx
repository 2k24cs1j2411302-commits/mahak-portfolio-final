import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="Academics" title="Education" id="education-title" />
        <ol className="mx-auto max-w-3xl space-y-6">
          {education.map((e) => (
            <li key={e.school} className="card">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender">
                  <GraduationCap size={22} className="text-rose" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm text-muted">{e.school}</p>
                  <p className="mt-1 text-xs text-muted">{e.period}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
