import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import { profile, socials } from '../data/portfolio.js';

const iconFor = { GitHub: Github, LinkedIn: Linkedin, LeetCode: Code2 };

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:px-8">
        <ul className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = iconFor[s.label];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in new tab)`}
                  className="inline-flex rounded-full border border-slate-300 p-2 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/20"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            );
          })}
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="inline-flex rounded-full border border-slate-300 p-2 transition hover:border-violet-500 hover:text-violet-500 dark:border-white/20">
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>
        <p className="text-sm text-slate-500">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
