import Social from '@/components/commons/Social';
import AboutSection from '@/components/sections/HomeSections/AboutSection';
import ContactSection from '@/components/sections/HomeSections/ContactSection';
import ExperienceSection from '@/components/sections/HomeSections/ExperienceSection';
import IntroSection from '@/components/sections/HomeSections/IntroSection';
import ProjectSection from '@/components/sections/HomeSections/ProjectSection';
import SkillsSection from '@/components/sections/HomeSections/SkillsSection';

export default function PortfolioTemplate() {
  return (
    <main>
      <Social />

      <IntroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectSection />

      <ExperienceSection />

      <ContactSection />
    </main>
  );
}
