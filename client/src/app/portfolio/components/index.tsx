import Social from '@/components/commons/Social';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

export default function PortfolioContainer() {
  return (
    <main>
      <Social />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Contact />
    </main>
  );
}
