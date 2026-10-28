import { Github, ExternalLink, FolderOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/portfolio.js';

function ProjectCard({ project }) {
  return (
    <article className={`card flex flex-col ${project.example ? 'border-dashed' : ''}`}>
      {project.example && (
        <span className="mb-3 w-fit rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          EXAMPLE: replace this card
        </span>
      )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
      {project.tech?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-slate-200/70 px-2 py-0.5 text-xs dark:bg-white/10">{t}</li>
          ))}
        </ul>
      )}
      {(project.github || project.demo) && (
        <div className="mt-5 flex gap-4 text-sm">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-violet-500">
              <Github size={15} aria-hidden="true" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-violet-500">
              <ExternalLink size={15} aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="My work" title="Projects" id="projects-title" />
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        ) : (
          <div className="card flex flex-col items-center py-12 text-center">
            <FolderOpen size={36} className="mb-3 text-violet-500" aria-hidden="true" />
            <p className="text-slate-600 dark:text-slate-400">No projects added yet. Projects will appear here once they are added in src/data/portfolio.js.</p>
          </div>
        )}
      </Reveal>
    </section>
  );
}
