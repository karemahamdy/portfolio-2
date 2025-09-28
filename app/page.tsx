'use client';

import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import SectionTemplate from './components/SectionTemplate';
import Skills from './components/Skills';

// You can control section visibility here
const sectionVisibility = {
  about: true,
  workExperience: true,
  content: true,
  projects: true,
  skills: true,
  contact: true,
  // Add a custom section as an example
  customSection: false
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-6 sm:px-6 md:px-8 max-w-4xl mx-auto">
      <div className="w-full">
        <Header />
        {sectionVisibility.about && <About />}
        {sectionVisibility.workExperience && <Experience />}
        {sectionVisibility.skills && <Skills />}
        {sectionVisibility.projects && <Projects />}
        {sectionVisibility.contact && <Contact />}

        {/* Example of using SectionTemplate with visible prop */}
        <SectionTemplate
          title="Custom Section"
          visible={sectionVisibility.customSection}
        >
          <p>This is a custom section that can be toggled on/off.</p>
        </SectionTemplate>
      </div>
    </main>
  );
}
