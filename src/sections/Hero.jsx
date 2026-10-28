import { Github, Linkedin, Code2, Mail, Download } from 'lucide-react';
import ProfileLinkButton from '../components/ProfileLinkButton.jsx';
import { profile, socials } from '../data/portfolio.js';

const iconFor = { GitHub: Github, LinkedIn: Linkedin, LeetCode: Code2 };

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="flex min-h-[90vh] items-center px-6 pt-32 pb-16 sm:px-8">
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="mb-4 text-base text-rose">Hi, I am</p>
        <h1 id="hero-title" className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-lg text-ink sm:text-xl">{profile.role}</p>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => (
            <ProfileLinkButton key={s.label} href={s.href} label={s.label} icon={iconFor[s.label]} />
          ))}
          <a href={`mailto:${profile.email}`} className="btn-outline py-2">
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
      </div>
    </section>
  );
}
