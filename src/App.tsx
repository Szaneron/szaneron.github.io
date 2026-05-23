import { useScrollReveal } from '@hooks/useActiveSection';
import Navigation from '@components/layout/Navigation';
import Footer from '@components/layout/Footer';
import Divider from '@components/ui/divider';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Impact from '@components/sections/Impact';
import Work from '@components/sections/Work';
import Experience from '@components/sections/Experience';
import Skills from '@components/sections/Skills';
import Contact from '@components/sections/Contact';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Impact />
        <Divider />
        <Work />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
