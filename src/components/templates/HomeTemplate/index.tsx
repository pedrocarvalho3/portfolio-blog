import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Intro from '@/components/sections/Intro';
import Skills from '@/components/sections/Skills';

export default function HomeTemplate() {
  return (
    <main>
      <div className="py-8">
        <section className="default-container">
          <Header />
        </section>

        <section id="home" className="default-container">
          <Intro />
        </section>

        <section
          id="about"
          className="bg-[url('/bg-about.jpg')] bg-cover bg-center"
        >
          <About />
        </section>

        <section id="skills" className="default-container">
          <Skills />
        </section>
      </div>
    </main>
  );
}
