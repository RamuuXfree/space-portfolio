export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  category: string[];
  featured: boolean;
  stars: number;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'nova-ai',
    title: 'Nova AI — Conversational Intelligence Platform',
    description: 'A production-grade AI platform with multi-modal RAG, real-time voice, and autonomous agent capabilities.',
    longDescription: 'Built on top of LLMs with custom fine-tuning, this platform enables enterprises to deploy AI assistants trained on their private data. Features include multi-modal inputs, real-time streaming, voice synthesis, and a visual agent builder.',
    tech: ['Python', 'FastAPI', 'React', 'LangChain', 'OpenAI', 'Pinecone', 'Redis', 'Docker'],
    github: 'https://github.com/alexnova/nova-ai',
    live: 'https://nova-ai.dev',
    image: '/projects/nova-ai.png',
    category: ['AI', 'Full Stack', 'Featured'],
    featured: true,
    stars: 847,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-purple-500/20',
  },
  {
    id: 'constellation',
    title: 'Constellation — Real-time Collaboration OS',
    description: 'A next-gen collaborative workspace combining AI writing, multiplayer editing, and knowledge graph visualization.',
    longDescription: 'Think Notion meets Figma meets AI. Real-time multiplayer document editing, AI-powered content generation, visual knowledge graphs, and team analytics — all in one platform.',
    tech: ['Next.js', 'TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'WebSockets', 'AI SDK'],
    github: 'https://github.com/alexnova/constellation',
    live: 'https://constellation.app',
    image: '/projects/constellation.png',
    category: ['Full Stack', 'Featured'],
    featured: true,
    stars: 612,
    gradient: 'from-blue-500/20 via-purple-500/10 to-pink-500/20',
  },
  {
    id: 'visionx',
    title: 'VisionX — Computer Vision Analytics',
    description: 'Real-time computer vision pipeline for retail analytics, object detection, and anomaly detection at scale.',
    longDescription: 'End-to-end CV pipeline processing 60fps video streams with YOLOv8 object detection, pose estimation, and custom trained classifiers. Used by 3 Fortune 500 retailers.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'CUDA', 'TensorRT', 'Kafka'],
    github: 'https://github.com/alexnova/visionx',
    live: 'https://visionx.io',
    image: '/projects/visionx.png',
    category: ['AI', 'ML', 'Featured'],
    featured: true,
    stars: 534,
    gradient: 'from-purple-500/20 via-pink-500/10 to-red-500/20',
  },
  {
    id: 'nexus',
    title: 'Nexus — Decentralized Data Marketplace',
    description: 'A Web3 platform for buying, selling, and licensing ML training datasets with on-chain provenance.',
    longDescription: 'Smart contract-powered marketplace where data scientists can monetize datasets while maintaining attribution. Features zero-knowledge proofs for privacy-preserving data verification.',
    tech: ['Solidity', 'React', 'Node.js', 'IPFS', 'Polygon', 'Hardhat', 'ethers.js'],
    github: 'https://github.com/alexnova/nexus',
    live: 'https://nexus.market',
    image: '/projects/nexus.png',
    category: ['Web3', 'Full Stack'],
    featured: false,
    stars: 389,
    gradient: 'from-green-500/20 via-cyan-500/10 to-blue-500/20',
  },
  {
    id: 'aurora',
    title: 'Aurora — Developer Analytics Dashboard',
    description: 'Beautiful analytics dashboard for development teams with AI-powered insights and productivity metrics.',
    longDescription: 'Integrates with GitHub, Jira, Slack, and Linear to give engineering leaders deep visibility into team velocity, code quality, and developer experience.',
    tech: ['React', 'TypeScript', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/alexnova/aurora',
    live: 'https://aurora-dash.dev',
    image: '/projects/aurora.png',
    category: ['Full Stack', 'Open Source'],
    featured: false,
    stars: 276,
    gradient: 'from-yellow-500/20 via-orange-500/10 to-red-500/20',
  },
  {
    id: 'phantom',
    title: 'Phantom — Code Intelligence Engine',
    description: 'LSP-compatible code intelligence engine with semantic search, AI refactoring, and vulnerability detection.',
    longDescription: 'A VS Code extension + cloud service that provides next-level code intelligence. Uses tree-sitter for AST analysis, custom embeddings for semantic code search, and GPT-4 for intelligent refactoring suggestions.',
    tech: ['TypeScript', 'Rust', 'Python', 'WASM', 'LLMs', 'tree-sitter', 'LSP'],
    github: 'https://github.com/alexnova/phantom',
    live: 'https://phantom-code.dev',
    image: '/projects/phantom.png',
    category: ['AI', 'Developer Tools', 'Open Source'],
    featured: false,
    stars: 423,
    gradient: 'from-indigo-500/20 via-violet-500/10 to-purple-500/20',
  },
];

export const projectCategories = ['All', 'AI', 'Full Stack', 'ML', 'Web3', 'Open Source', 'Developer Tools', 'Featured'];
