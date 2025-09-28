import { projects } from '../data/projects';
import Project from './Project';
import SectionTemplate from './SectionTemplate';

export default function Projects() {
  const visibleProjects = projects.filter(project => project.visible);

  return (
    <SectionTemplate title="Projects">
      <ul className="space-y-8 list-disc pl-5">
        {visibleProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
            projectType={project.projectType}
          />
        ))}
      </ul>
    </SectionTemplate>
  );
}
