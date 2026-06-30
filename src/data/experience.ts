export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  tech: string[];
  logo: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: 'google',
    company: 'Google DeepMind',
    role: 'AI Research Engineer Intern',
    type: 'Internship',
    period: 'Jun 2025 — Sep 2025',
    duration: '4 months',
    description: 'Working on large-scale language model research, contributing to next-generation reasoning capabilities and multimodal understanding systems.',
    achievements: [
      'Implemented novel attention mechanism improving inference speed by 34%',
      'Co-authored paper accepted at NeurIPS 2025',
      'Trained 7B parameter model on distributed TPU cluster',
      'Reduced model hallucination rate by 22% using RLHF fine-tuning',
    ],
    tech: ['Python', 'JAX', 'TPUs', 'Transformers', 'RLHF', 'Distributed Training'],
    logo: '🔵',
    color: '#4285F4',
  },
  {
    id: 'openai',
    company: 'OpenAI',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Jan 2025 — May 2025',
    duration: '5 months',
    description: 'Contributed to the ChatGPT web platform and internal developer tooling, focusing on performance optimization and new feature development.',
    achievements: [
      'Built real-time streaming infrastructure serving 100M+ daily users',
      'Improved platform performance by 40% through lazy loading & caching',
      'Developed internal AI safety evaluation framework',
      'Shipped voice mode improvements to GPT-4o',
    ],
    tech: ['TypeScript', 'React', 'Python', 'Kubernetes', 'PostgreSQL', 'Redis'],
    logo: '⚡',
    color: '#10A37F',
  },
  {
    id: 'vercel',
    company: 'Vercel',
    role: 'Full Stack Engineer Intern',
    type: 'Internship',
    period: 'Jun 2024 — Dec 2024',
    duration: '6 months',
    description: 'Worked on the AI SDK and edge runtime infrastructure, building tools that empower millions of developers worldwide.',
    achievements: [
      'Contributed 40+ PRs to the open-source AI SDK repository',
      'Built AI SDK streaming adapters used by 50K+ developers',
      'Optimized Edge Function cold start by 60%',
      'Designed and shipped new Analytics dashboard features',
    ],
    tech: ['Next.js', 'TypeScript', 'Rust', 'Edge Runtime', 'AI SDK', 'Turborepo'],
    logo: '▲',
    color: '#ffffff',
  },
  {
    id: 'startup',
    company: 'NeuralStack AI',
    role: 'Co-Founder & CTO',
    type: 'Startup',
    period: 'Jan 2023 — Present',
    duration: '2+ years',
    description: 'Building AI-powered developer tools. Raised $500K pre-seed funding. Leading a team of 6 engineers.',
    achievements: [
      'Grew to 5,000+ active users within 6 months of launch',
      'Raised $500K from Y Combinator alumni network',
      'Filed 2 provisional patents for novel AI architectures',
      'Built and shipped 3 production AI products',
    ],
    tech: ['Python', 'FastAPI', 'React', 'LLMs', 'AWS', 'Terraform', 'MLOps'],
    logo: '🚀',
    color: '#A855F7',
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science & AI',
    institution: 'Massachusetts Institute of Technology',
    period: '2021 — 2025',
    cgpa: '9.4 / 10.0',
    achievements: ['Dean\'s List All Semesters', 'Valedictorian Candidate', 'AI Lab Research Assistant'],
  },
];
