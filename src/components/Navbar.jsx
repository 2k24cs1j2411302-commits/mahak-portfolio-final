import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding', label: 'Coding Profiles' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold text-ink">
          {profile.shortName}<span className="text-rose">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition hover:text-rose">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border border-rose/30 bg-white/70 p-2 text-ink lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-6 mb-4 flex flex-col gap-1 rounded-3xl border border-rose/10 bg-white p-3 shadow-soft sm:mx-8 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-2 hover:bg-blush">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
