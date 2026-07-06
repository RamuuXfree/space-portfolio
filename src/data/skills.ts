export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'REST APIs', icon: 'openapiinitiative' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    skills: [
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'npm', icon: 'npm' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    skills: [
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
];
