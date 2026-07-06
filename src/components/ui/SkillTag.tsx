import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiFigma,
  SiGit,
  SiGithub,
  SiVscodium,
  SiNpm,
  SiVercel,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  nodedotjs: SiNodedotjs,
  openapiinitiative: SiOpenapiinitiative,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  visualstudiocode: SiVscodium,
  npm: SiNpm,
  vercel: SiVercel,
};

interface SkillTagProps {
  name: string;
  icon: string;
  index: number;
  inView: boolean;
}

export default function SkillTag({ name, icon, index, inView }: SkillTagProps) {
  const reduced = useReducedMotion();
  const Icon = iconMap[icon];

  return (
    <motion.span
      className="skill-tag"
      initial={{ opacity: 0, y: 14 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: reduced ? 0 : [0, -3, 0],
            }
          : {}
      }
      transition={{
        opacity: { delay: index * 0.04, duration: 0.5 },
        y: reduced
          ? { delay: index * 0.04, duration: 0.5 }
          : { delay: index * 0.04 + 0.5, duration: 5 + (index % 3), repeat: Infinity, ease: 'easeInOut' },
      }}
      whileHover={{
        y: -4,
        scale: 1.03,
        boxShadow: '0 12px 32px rgba(74,123,247,0.12)',
        borderColor: 'rgba(74,123,247,0.3)',
      }}
    >
      {Icon && <Icon className="skill-tag-icon" aria-hidden="true" />}
      <span>{name}</span>
    </motion.span>
  );
}
