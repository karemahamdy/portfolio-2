import { motion } from 'framer-motion';
import { jobs } from '../data/experience';
import Job from './Job';
import SectionTemplate from './SectionTemplate';

export default function Experience() {
  const visibleJobs = jobs.filter(job => job.visible);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionTemplate title="Work Experience">
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {visibleJobs.map((job, index) => (
          <motion.div
            key={index}
            className="experience-item"
            variants={itemVariants}
          >
            <Job
              role={job.role}
              company={job.company}
              period={job.period}
              companyUrl={job.companyUrl}
              logoUrl={job.logoUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionTemplate>
  );
}
