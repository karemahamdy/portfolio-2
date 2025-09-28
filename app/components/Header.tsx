import { motion } from 'framer-motion';
import { FileText, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mb-16"
    >
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-normal text-foreground">
            Karim Essam
          </h1>
          <div className="mt-1">
            <p className="text-base text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/resume.pdf"
            className="text-muted-foreground no-underline hover:text-foreground transition-colors duration-200"
            aria-label="Resume"
          >
            <FileText size={20} />
          </a>
          <a
            href="https://github.com/KaEssam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground no-underline hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaessam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground no-underline hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
