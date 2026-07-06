import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import type { Project } from '../../data/hyperlearning';
import ShowcaseCard from './ShowcaseCard';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const glow = project.variant === 'premium' ? '#7C6AE8' : '#4A7BF7';

  return (
    <ShowcaseCard glow={glow} className="h-full">
      <div className={`project-card project-card--${project.variant} p-7 md:p-8 flex flex-col h-full`}>
        <div className="mb-5">
          <span className="project-type-badge">{project.type}</span>
          <h3 className="font-heading text-xl md:text-2xl text-white mt-4 mb-3">{project.name}</h3>
          <p className="font-body text-sm md:text-base text-white/50 leading-relaxed">{project.overview}</p>
        </div>

        <ul className="space-y-2.5 mb-6 flex-1">
          {project.highlights.map((item) => (
            <li key={item} className="font-body text-white/45 text-sm flex gap-3 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-cosmic-violet/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mb-6">
          <p className="section-label !mb-3">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-tag text-xs py-1 px-2.5">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline justify-center gap-2 text-sm flex-1"
          >
            <FiGithub size={15} />
            Repository
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white justify-center gap-2 text-sm flex-1"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="demo-placeholder text-sm flex-1 justify-center">Live demo coming soon</span>
          )}
        </div>
      </div>
    </ShowcaseCard>
  );
}
