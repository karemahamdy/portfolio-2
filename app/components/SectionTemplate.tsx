import { ReactNode } from 'react';

interface SectionTemplateProps {
  title: string;
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

export default function SectionTemplate({ title, children, className = '', visible = true }: SectionTemplateProps) {
  if (!visible) return null;

  return (
    <section className={`w-full mb-10 sm:mb-16 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-left font-heading">{title}</h2>
      {children}
    </section>
  );
}
