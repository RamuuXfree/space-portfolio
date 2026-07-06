import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { hyperLearning, additionalProjects } from '../../data/hyperlearning';
import SectionHeader from '../ui/SectionHeader';
import ShowcaseCard from '../ui/ShowcaseCard';
import ProjectCard from '../ui/ProjectCard';

const entrySpring = { type: 'spring' as const, stiffness: 90, damping: 22, mass: 0.85 };

export default function FeaturedProject() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="project" className="section-padding container-custom" ref={ref}>
        <SectionHeader
          label="Projects"
          title="Selected work"
          description="Building meaningful products, contributing to real-world software, and growing through hands-on development."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={entrySpring}
        >
          <ShowcaseCard glow="#4A7BF7" featured className="overflow-hidden">
            <div className="project-showcase">
              <div className="project-showcase-glow" aria-hidden="true" />

              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="featured-badge">Featured Project</span>
                  <span className="font-secondary text-xs tracking-[0.15em] uppercase text-white/35">
                    {hyperLearning.role}
                  </span>
                </div>

                <div className="mb-10">
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight mb-3">
                    {hyperLearning.name}
                  </h3>
                  <p className="font-body text-white/55 text-base md:text-lg max-w-2xl">
                    {hyperLearning.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <p className="section-label !mb-3">Overview</p>
                      <p className="font-body text-white/60 text-base md:text-lg leading-relaxed">
                        {hyperLearning.overview}
                      </p>
                    </div>

                    <div>
                      <p className="section-label !mb-4">Focus Areas</p>
                      <ul className="space-y-3">
                        {hyperLearning.contributions.map((item) => (
                          <li
                            key={item}
                            className="font-body text-sm md:text-base text-white/50 flex gap-3 leading-relaxed"
                          >
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-cosmic-blue/70 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-8">
                    <div>
                      <p className="section-label !mb-4">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {hyperLearning.technologies.map((tech) => (
                          <span key={tech} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-auto">
                      <a
                        href={hyperLearning.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline justify-center gap-2 text-sm"
                      >
                        <FiGithub size={15} />
                        Repository
                      </a>
                      <a
                        href={hyperLearning.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-white justify-center gap-2 text-sm"
                      >
                        <ExternalLink size={15} />
                        Live Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShowcaseCard>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {additionalProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...entrySpring, delay: 0.15 + i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
    </section>
  );
}
