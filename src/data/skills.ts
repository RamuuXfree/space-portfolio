export interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    color: '#06B6D4',
    skills: [
      { name: 'Python', icon: '🐍', level: 95, color: '#3776AB' },
      { name: 'TypeScript', icon: '🔷', level: 90, color: '#3178C6' },
      { name: 'JavaScript', icon: '🟨', level: 92, color: '#F7DF1E' },
      { name: 'Java', icon: '☕', level: 80, color: '#ED8B00' },
      { name: 'C++', icon: '⚡', level: 75, color: '#00599C' },
      { name: 'Go', icon: '🔵', level: 65, color: '#00ADD8' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#3B82F6',
    skills: [
      { name: 'React', icon: '⚛️', level: 95, color: '#61DAFB' },
      { name: 'Next.js', icon: '▲', level: 90, color: '#ffffff' },
      { name: 'Tailwind', icon: '🌊', level: 92, color: '#06B6D4' },
      { name: 'Redux', icon: '🔄', level: 85, color: '#764ABC' },
      { name: 'Three.js', icon: '🎲', level: 75, color: '#ffffff' },
      { name: 'Framer', icon: '✨', level: 80, color: '#BB4B96' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 90, color: '#339933' },
      { name: 'FastAPI', icon: '⚡', level: 88, color: '#009688' },
      { name: 'Express', icon: '🚂', level: 85, color: '#ffffff' },
      { name: 'Spring Boot', icon: '🍃', level: 70, color: '#6DB33F' },
      { name: 'GraphQL', icon: '📊', level: 78, color: '#E10098' },
      { name: 'REST APIs', icon: '🔗', level: 95, color: '#06B6D4' },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: '#A855F7',
    skills: [
      { name: 'MongoDB', icon: '🍃', level: 88, color: '#47A248' },
      { name: 'PostgreSQL', icon: '🐘', level: 85, color: '#4169E1' },
      { name: 'MySQL', icon: '🐬', level: 82, color: '#4479A1' },
      { name: 'Redis', icon: '🔴', level: 78, color: '#DC382D' },
      { name: 'Pinecone', icon: '🌲', level: 72, color: '#00BFA5' },
      { name: 'Supabase', icon: '⚡', level: 80, color: '#3ECF8E' },
    ],
  },
  {
    title: 'AI & ML',
    icon: '🧠',
    color: '#22D3EE',
    skills: [
      { name: 'PyTorch', icon: '🔥', level: 88, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: '🌊', level: 85, color: '#FF6F00' },
      { name: 'Scikit-Learn', icon: '🤖', level: 90, color: '#F7931E' },
      { name: 'OpenCV', icon: '👁️', level: 82, color: '#5C3EE8' },
      { name: 'LangChain', icon: '🦜', level: 85, color: '#1C3C3C' },
      { name: 'HuggingFace', icon: '🤗', level: 80, color: '#FFD21E' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: '#06B6D4',
    skills: [
      { name: 'AWS', icon: '☁️', level: 78, color: '#FF9900' },
      { name: 'Docker', icon: '🐳', level: 85, color: '#2496ED' },
      { name: 'Kubernetes', icon: '⚓', level: 70, color: '#326CE5' },
      { name: 'Firebase', icon: '🔥', level: 88, color: '#FFCA28' },
      { name: 'Vercel', icon: '▲', level: 92, color: '#ffffff' },
      { name: 'GitHub CI', icon: '🔄', level: 85, color: '#2088FF' },
    ],
  },
];
