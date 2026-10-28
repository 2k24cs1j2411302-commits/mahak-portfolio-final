import { Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <Reveal>
        <SectionHeading eyebrow="Let's talk" title="Contact Me" id="contact-title" />
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-400">
            <p>Have an internship, project or opportunity in mind? Send me a message and I will reply as soon as I can.</p>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 font-medium text-violet-500 hover:underline">
              <Mail size={16} aria-hidden="true" /> {profile.email}
            </a>
          </div>
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
