'use client';

import { ExternalLink } from 'lucide-react';
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
  customSection: true
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

        {/* Example of using SectionTemplate with visible prop */}
        <SectionTemplate
          title="Awards"
          visible={sectionVisibility.customSection}
        >
          <p> 50 Days Badge 2025 on leetcode
            <a
            href={"https://leetcode.com/medal/?showImg=0&id=6864173&isLevel=false"}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            target={ "_blank" }
            rel={ "noopener noreferrer"}
          >
            <ExternalLink className="inline-block w-3 h-3 ml-0.5 -mt-px opacity-60" /> 
            </a>
          </p>
          <p> Solve SQL 50 Badge 2025 on leetcode
            <a
              href={"https://leetcode.com/medal/?showImg=0&id=8122287&isLevel=false"}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <ExternalLink className="inline-block w-3 h-3 ml-0.5 -mt-px opacity-60" />
            </a>
          </p>
          <p>February 2025 on leetcode
            <a
              href={"https://leetcode.com/medal/?showImg=0&id=6334124&isLevel=false"}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <ExternalLink className="inline-block w-3 h-3 ml-0.5 -mt-px opacity-60" />
            </a>
          </p>
        </SectionTemplate>
        {sectionVisibility.contact && <Contact />}

      </div>
    </main>
  );
}
