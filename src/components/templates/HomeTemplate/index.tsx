import Social from '@/components/commons/Social';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AboutSection from '@/components/sections/AboutSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import IntroSection from '@/components/sections/IntroSection';
import ProjectSection from '@/components/sections/ProjectSection';
import SkillSection from '@/components/sections/SkillSection';

export default function HomeTemplate() {
  return (
    <main>
      <div>
        <Social />
        <section className="default-container">
          <Header />
        </section>

        <section id="home" className="default-container">
          <IntroSection />
        </section>

        <section
          id="about"
          className="bg-[url('/bg-about.jpg')] bg-cover bg-center"
        >
          <AboutSection />
        </section>

        <section id="skills" className="default-container">
          <SkillSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
