import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import CodingProfiles from './sections/CodingProfiles.jsx';
import Education from './sections/Education.jsx';
import CertificationsAchievements from './sections/CertificationsAchievements.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

function Page({ id, children }) {
  return (
    <section id={id} className="flex min-h-screen snap-start flex-col justify-center px-6 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory bg-cream">
      <a href="#page-1" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Page id="page-1">
          <Hero />
          <About />
        </Page>
        <Page id="page-2">
          <Skills />
          <Projects />
          <CodingProfiles />
        </Page>
        <Page id="page-3">
          <Education />
          <CertificationsAchievements />
          <Contact />
          <Footer />
        </Page>
      </main>
    </div>
  );
}
