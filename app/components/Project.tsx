import { ProjectType } from '../data/projects';

interface ProjectLink {
  label: string;
  url: string;
  icon?: 'github' | 'link' | 'demo';  // Add more icon types as needed
}

interface ProjectTechnology {
  category: string;
  items: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: ProjectTechnology[];
  links?: ProjectLink[];
  projectType?: ProjectType;
}

export default function Project({
  title,
  description,
  technologies,
  links,
  projectType
}: ProjectProps) {
  // Function to get icon for link
  const getLinkIcon = (link: ProjectLink) => {
    // Default to external link icon if no icon specified
    const iconType = link.icon || 'link';

    switch (iconType) {
      case 'github':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'demo':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        );
    }
  };

  // Function to get label text and style based on project type
  const getProjectLabel = () => {
    if (!projectType) return null;

    const labelConfig = {
      freelance: {
        text: 'Freelance',
        className: 'bg-white/5 text-white/80'
      },
      student: {
        text: 'Educational Project',
        className: 'bg-white/5 text-white/80'
      },
      side: {
        text: 'Side Project',
        className: 'bg-white/5 text-white/80'
      },
      personal: {
        text: 'Personal Project',
        className: 'bg-white/5 text-white/80'
      }
    };

    const config = labelConfig[projectType];

    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${config.className}`}>
        {config.text}
      </span>
    );
  };

  return (
    <li className="group relative list-none border rounded-sm border-white/25 ">
      <div className="relative p-4 rounded-2xl ">
        <div className="relative space-y-4">
          {/* Header Section */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-white/90">
              {title}
            </h3>
            {projectType && getProjectLabel()}
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-white/80">Technologies</h4>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="relative p-3 pl-4 rounded-xl border border-white/10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-medium text-white/80 min-w-[120px] text-sm">
                      {tech.category}
                    </span>
                    <span className="text-white/60 text-sm">
                      {tech.items}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {links && links.length > 0 && (
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-medium text-white/80">Links</h4>
                <div className="h-px flex-1 bg-white/10"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <div className="relative px-4 py-2 border border-white/10 rounded-xl transition-all duration-300 hover:border-white/30">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white/90">
                        {getLinkIcon(link)}
                        {link.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
