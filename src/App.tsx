import { useScrollReveal } from "@hooks/useActiveSection";
import Navigation from "@components/layout/Navigation";
import Footer from "@components/layout/Footer";
import Hero from "@components/sections/Hero";
import About from "@components/sections/About";
import Projects from "@components/sections/Projects";
import Experience from "@components/sections/Experience";
import Skills from "@components/sections/Skills";
import Contact from "@components/sections/Contact";

export default function App() {
  // Sets up IntersectionObserver for all .reveal elements on the page.
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      <main>
        <Hero />

        <div className="w-full h-px bg-line" />
        <About />

        <div className="w-full h-px bg-line" />
        <Projects />

        <div className="w-full h-px bg-line" />
        <Experience />

        <div className="w-full h-px bg-line" />
        <Skills />

        <div className="w-full h-px bg-line" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
