import { Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { certifications } from '../data/portfolio.js';

export default function CertificationsAchievements() {
  return (
    <section id="certifications" aria-labelledby="cert-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="Credentials" title="Certifications & Achievements" id="cert-title" />
        {certifications.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.title} className="card">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{c.issuer}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="card flex flex-col items-center py-10 text-center">
            <Award size={36} className="mb-3 text-violet-500" aria-hidden="true" />
            <p className="text-slate-600 dark:text-slate-400">Nothing listed yet. Certifications and achievements will be added here once they are earned.</p>
          </div>
        )}
      </Reveal>
    </section>
  );
}
