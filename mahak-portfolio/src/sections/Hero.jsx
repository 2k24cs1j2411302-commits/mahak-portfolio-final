import { Github, Linkedin, Code2, Mail, ArrowDown, Download } from 'lucide-react';
import ProfileLinkButton from '../components/ProfileLinkButton.jsx';
import { profile, socials } from '../data/portfolio.js';

const iconFor = { GitHub: Github, LinkedIn: Linkedin, LeetCode: Code2 };

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 sm:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl animate-pulse" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full border border-violet-400/40 px-4 py-1 text-xs font-medium uppercase tracking-widest text-violet-500 dark:text-violet-300">
          Hello, I am
        </p>
        <h1 id="hero-title" className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="mt-4 font-display text-lg font-medium text-slate-700 sm:text-2xl dark:text-slate-200">{profile.role}</p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => (
            <ProfileLinkButton key={s.label} href={s.href} label={s.label} icon={iconFor[s.label]} />
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm transition hover:border-violet-500 hover:text-violet-500 dark:border-white/20 dark:hover:text-violet-300"
          >
            <Mail size={16} aria-hidden="true" /> Email
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects" className="btn-primary w-full sm:w-auto">View Projects</a>
          <a href={profile.resumeUrl} download className="btn-outline w-full sm:w-auto">
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">Contact Me</a>
        </div>

        <a href="#about" aria-label="Scroll to about section" className="mt-16 inline-flex animate-bounce text-slate-500 dark:text-slate-400">
          <ArrowDown size={22} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
