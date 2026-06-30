export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  logo: string;
  color: string;
  category: string;
}

export const certificates: Certificate[] = [
  {
    id: 'aws-ml',
    title: 'AWS Certified Machine Learning Specialty',
    issuer: 'Amazon Web Services',
    date: 'March 2025',
    credentialId: 'AWS-MLS-2025-XK9B',
    verifyUrl: 'https://aws.amazon.com/verify',
    logo: '☁️',
    color: '#FF9900',
    category: 'Cloud & AI',
  },
  {
    id: 'deeplearning-ai',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI & Coursera',
    date: 'January 2025',
    credentialId: 'DL-SPEC-2025-A7F3',
    verifyUrl: 'https://coursera.org/verify',
    logo: '🧠',
    color: '#06B6D4',
    category: 'AI & ML',
  },
  {
    id: 'gcp-professional',
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'November 2024',
    credentialId: 'GCP-PDE-2024-7X2M',
    verifyUrl: 'https://cloud.google.com/verify',
    logo: '🔵',
    color: '#4285F4',
    category: 'Cloud',
  },
  {
    id: 'tensorflow',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google for Developers',
    date: 'September 2024',
    credentialId: 'TF-DEV-2024-9K5R',
    verifyUrl: 'https://tensorflow.org/verify',
    logo: '🌊',
    color: '#FF6F00',
    category: 'AI & ML',
  },
  {
    id: 'ckad',
    title: 'Certified Kubernetes Application Developer',
    issuer: 'Cloud Native Computing Foundation',
    date: 'July 2024',
    credentialId: 'CKAD-2024-3M8P',
    verifyUrl: 'https://www.cncf.io/verify',
    logo: '⚓',
    color: '#326CE5',
    category: 'DevOps',
  },
  {
    id: 'meta-react',
    title: 'Advanced React Development',
    issuer: 'Meta & Coursera',
    date: 'May 2024',
    credentialId: 'META-REACT-2024-2B6W',
    verifyUrl: 'https://coursera.org/verify',
    logo: '⚛️',
    color: '#61DAFB',
    category: 'Frontend',
  },
];

export const achievements = [
  { title: 'LeetCode Problems', value: 650, suffix: '+', icon: '⚡', color: '#F7DF1E', sub: 'Top 5% Global' },
  { title: 'GitHub Stars', value: 1200, suffix: '+', icon: '⭐', color: '#FFD700', sub: 'Across Repositories' },
  { title: 'Hackathons Won', value: 8, suffix: '', icon: '🏆', color: '#06B6D4', sub: 'National & International' },
  { title: 'Open Source PRs', value: 340, suffix: '+', icon: '🔀', color: '#3B82F6', sub: 'Merged Contributions' },
  { title: 'Research Papers', value: 3, suffix: '', icon: '📄', color: '#A855F7', sub: 'Published / Accepted' },
  { title: 'Dev Awards', value: 12, suffix: '+', icon: '🎖️', color: '#22D3EE', sub: 'Recognition Awards' },
  { title: 'Codeforces Rating', value: 1847, suffix: '', icon: '🔥', color: '#FF4444', sub: 'Expert Level' },
  { title: 'Countries Reached', value: 28, suffix: '+', icon: '🌍', color: '#10B981', sub: 'Open Source Users' },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Research Scientist',
    company: 'Google DeepMind',
    avatar: '👩‍🔬',
    text: "Alex is one of the most exceptional engineers I've had the pleasure to mentor. Their ability to grasp complex ML concepts and translate them into production systems is remarkable. They shipped code that's now running in products used by billions of people.",
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'Vercel',
    avatar: '👨‍💼',
    text: "Working with Alex was a highlight of our internship program. They contributed meaningfully to our open-source AI SDK within the first week. Their code quality, communication, and initiative are all top-tier. We'd hire them full-time in a heartbeat.",
    rating: 5,
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Professor of AI',
    company: 'MIT CSAIL',
    avatar: '👩‍🏫',
    text: "Alex has that rare combination of theoretical depth and practical engineering skills. Their research on efficient attention mechanisms showed genuine originality. A natural leader who elevates everyone around them.",
    rating: 5,
  },
  {
    name: 'James Liu',
    role: 'Founding Engineer',
    company: 'Anthropic',
    avatar: '👨‍💻',
    text: "I've collaborated with Alex on several open source projects. Their contributions are always thoughtful, well-documented, and push the boundaries of what the community thought was possible. Truly a 10x engineer.",
    rating: 5,
  },
];
