import { Github, Linkedin, Code2, Mail } from 'lucide-react';
import { profile, socials } from '../data/portfolio.js';

const iconFor = { GitHub: Github, LinkedIn: Linkedin, LeetCode: Code2 };

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rose/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-10 sm:px-8">
        <ul className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = iconFor[s.label];
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in new tab)`}
                  className="inline-flex rounded-full border border-rose/20 bg-white/70 p-2.5 text-ink transition hover:border-rose hover:text-rose"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            );
          })}
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="inline-flex rounded-full border border-rose/20 bg-white/70 p-2.5 text-ink transition hover:border-rose hover:text-rose">
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted">© {year} {profile.name}. Made with care.</p>
      </div>
    </footer>
  );
}
