import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { skillCategories } from '../data/portfolio.js';

const icons = {
  Java: 'java/java-original',
  Python: 'python/python-original',
  C: 'c/c-original',
  'C++': 'cplusplus/cplusplus-original',
  JavaScript: 'javascript/javascript-original',
  HTML: 'html5/html5-original',
  CSS: 'css3/css3-original',
  React: 'react/react-original',
  'Node.js': 'nodejs/nodejs-original',
  MongoDB: 'mongodb/mongodb-original',
  Git: 'git/git-original',
};

const iconUrl = (name) => {
  const path = icons[name];
  return path
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`
    : null;
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="What I work with" title="Skills" id="skills-title" />
        <div className="card">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {skillCategories.flatMap((cat) => cat.items).map((item) => {
              const url = iconUrl(item);
              return (
                <span key={item} className="flex items-center gap-2 text-sm text-ink">
                  {url && <img src={url} alt="" width="22" height="22" loading="lazy" aria-hidden="true" />}
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
