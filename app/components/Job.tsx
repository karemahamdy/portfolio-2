import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface JobProps {
  role: string;
  company: string;
  period: string;
  companyUrl?: string;
  logoUrl?: string;
}

export default function Job({
  role,
  company,
  period,
  companyUrl = "#",
  logoUrl
}: JobProps) {
  const [imageError, setImageError] = useState(false);
  const isExternalLink = companyUrl && companyUrl !== "#";

  const getInitials = () => {
    if (company === 'UltaHost') return 'UH';

    const words = company.split(' ');
    if (words.length === 1) {
      const matches = company.match(/[A-Z][a-z]*/g);
      if (matches && matches.length > 1) {
        return matches.map(m => m[0]).join('').substring(0, 2);
      }
      return company.substring(0, 2).toUpperCase();
    }
    return words.map(word => word[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-base text-foreground font-normal">{role}</h3>
      <div className="flex items-baseline gap-x-1.5 text-sm">
        <a
          href={companyUrl}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noopener noreferrer" : undefined}
        >
          {company}
          {isExternalLink && (
            <ExternalLink className="inline-block w-3 h-3 ml-0.5 -mt-px opacity-60" />
          )}
        </a>
        <span className="text-muted-foreground/40">·</span>
        <span className="text-muted-foreground/60">{period}</span>
      </div>
    </div>
  );
}
