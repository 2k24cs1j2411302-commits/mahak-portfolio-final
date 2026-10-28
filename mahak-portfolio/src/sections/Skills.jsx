import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { skillCategories } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="What I work with" title="Skills" id="skills-title" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card">
              <h3 className="mb-4 text-base font-semibold">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={`${cat.title} skills`}>
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-sm text-violet-700 dark:text-violet-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
