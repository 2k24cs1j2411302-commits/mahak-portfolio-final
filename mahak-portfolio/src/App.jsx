import Navbar from './components/Navbar.jsx';
import useTheme from './hooks/useTheme.js';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import CodingProfiles from './sections/CodingProfiles.jsx';
import Education from './sections/Education.jsx';
import CertificationsAchievements from './sections/CertificationsAchievements.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-navy-950">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 dark:focus:bg-navy-900">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Education />
        <CertificationsAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
