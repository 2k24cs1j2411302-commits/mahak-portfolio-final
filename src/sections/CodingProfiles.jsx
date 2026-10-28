import { Github, Linkedin, Code2, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { socials } from '../data/portfolio.js';

const meta = {
  GitHub: { icon: Github, blurb: 'Code, experiments and repositories.' },
  LinkedIn: { icon: Linkedin, blurb: 'Professional profile, experience and network.' },
  LeetCode: { icon: Code2, blurb: 'DSA practice and problem solving.' },
};

export default function CodingProfiles() {
  return (
    <section id="coding" aria-labelledby="coding-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="Find me online" title="Coding Profiles" id="coding-title" />
        <div className="grid gap-6 md:grid-cols-3">
          {socials.map((s) => {
            const { icon: Icon, blurb } = meta[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} profile (opens in new tab)`}
                className="card group"
              >
                <Icon size={26} className="text-rose" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{s.label}</h3>
                <p className="mt-1 text-sm text-muted">{blurb}</p>
                {s.username && <p className="mt-3 truncate text-xs text-muted">@{s.username}</p>}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose group-hover:underline">
                  View profile <ExternalLink size={14} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted">Profile links only. Live stats are not shown to avoid stale or incorrect numbers.</p>
      </Reveal>
    </section>
  );
}
