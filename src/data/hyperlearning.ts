export const hyperLearning = {
  name: 'HyperLearningTech',
  tagline: 'AI-powered learning for syllabus mastery',
  overview:
    'Hyper Learning helps students master their syllabus through AI-powered notes, mapped previous year questions, instant solutions, and interactive topic-wise learning experiences.',
  github: 'https://github.com/imuniqueshiv/HyperLearningTech',
  live: 'https://www.hyperlearningtech.in/',
  role: 'Collaborator / Contributor',
  period: '2025 — Present',
  contributions: [
    'Frontend development across core learning flows and interfaces',
    'UI/UX improvements to hero section, header, and light mode visibility',
    'Feature development for content organization, discovery, and semester resources',
    'Product enhancements including creators page and course structure',
    'Open source collaboration through pull requests, reviews, and iterative workflows',
    'Performance improvements and design refinements across the platform',
  ],
  experienceFocus: [
    'Frontend engineering with Next.js and TypeScript',
    'Product development across core learning experiences',
    'UI/UX improvements across navigation and content flows',
    'Feature implementation for syllabus and question resources',
    'Open source collaboration and code contributions',
    'Technical problem solving in a production education platform',
  ],
  technologies: [
    'Next.js',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Git',
    'GitHub',
  ],
};

export interface Project {
  id: string;
  name: string;
  type: string;
  overview: string;
  highlights: string[];
  technologies: string[];
  github: string;
  live?: string;
  variant: 'modern' | 'premium';
}

export const additionalProjects: Project[] = [
  {
    id: 'college-management',
    name: 'College Management System',
    type: 'Full Stack Web Application',
    overview:
      'A full stack web application for college operations — designed around student management workflows, administrative functionality, and clear system design.',
    highlights: [
      'System design for institutional workflows',
      'Student management and record-keeping flows',
      'Administrative functionality for college operations',
      'Full stack development experience across the application',
    ],
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/RamuuXfree/collage-mangement-system',
    variant: 'modern',
  },
  {
    id: 'local-sathi',
    name: 'Local Sathi',
    type: 'Community / Local Services Platform',
    overview:
      'A community platform connecting customers with trusted local service providers — built to solve real-world booking and discovery problems through platform thinking and user-focused design.',
    highlights: [
      'Real-world problem solving for local service discovery',
      'Multi-role platform architecture for customers, providers, and admins',
      'User-focused design across booking and dashboard flows',
      'Full-stack application architecture with real-time updates',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    github: 'https://github.com/RamuuXfree/local-sathi-',
    variant: 'premium',
  },
];
