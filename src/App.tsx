import { useScrollReveal } from '@hooks/useActiveSection';
import Navigation from '@components/layout/Navigation';
import Footer from '@components/layout/Footer';
import Divider from '@components/ui/divider';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Impact from '@components/sections/Impact';
import Work from '@components/sections/Work';
import Timeline from '@components/sections/Timeline';
import Lab from '@components/sections/Lab';
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
        <Timeline />
        <Divider />
        <Lab />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
