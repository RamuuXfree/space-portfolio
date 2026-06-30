import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';

const FILTERS = ['All', 'AI/ML', 'Full Stack', 'Open Source', 'Tools'];

const PROJECTS = [
  {
    title: 'NeuralChat — Enterprise AI Assistant',
    desc: 'Production-grade LLM-powered chat platform with RAG, multi-modal inputs, and real-time streaming. Deployed at Fortune 500 companies.',
    tech: ['Python', 'FastAPI', 'LangChain', 'React', 'PostgreSQL', 'Redis'],
    cat: 'AI/ML',
    stars: '1.2k',
    featured: true,
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.12))',
    glow: 'rgba(6,182,212,0.25)',
  },
  {
    title: 'VisionAI — Computer Vision Pipeline',
    desc: 'Real-time object detection and classification system using custom-trained YOLO models. Processes 1000+ images/sec.',
    tech: ['PyTorch', 'OpenCV', 'FastAPI', 'React', 'Docker', 'AWS'],
    cat: 'AI/ML',
    stars: '847',
    featured: true,
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(168,85,247,0.12))',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    title: 'OpenRAG — Open Source RAG Framework',
    desc: 'Plug-and-play retrieval-augmented generation framework supporting 15+ vector DBs. 2k+ GitHub stars.',
    tech: ['Python', 'LangChain', 'Pinecone', 'Weaviate', 'HuggingFace'],
    cat: 'Open Source',
    stars: '2.1k',
    featured: true,
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(6,182,212,0.12))',
    glow: 'rgba(34,211,238,0.25)',
  },
  {
    title: 'CosmicUI — Design System',
    desc: 'A futuristic React component library with 80+ components, dark mode, glassmorphism effects, and Framer Motion animations.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Storybook'],
    cat: 'Full Stack',
    stars: '623',
    featured: false,
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    title: 'SentinelDB — Intelligent Query Optimizer',
    desc: 'ML-powered SQL query optimizer that reduces database load by up to 70% using learned cost models.',
    tech: ['Python', 'PostgreSQL', 'scikit-learn', 'FastAPI', 'React'],
    cat: 'Tools',
    stars: '412',
    featured: false,
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(59,130,246,0.12))',
    glow: 'rgba(168,85,247,0.2)',
  },
  {
    title: 'DeployBot — K8s Deployment Wizard',
    desc: 'CLI tool and web dashboard for zero-downtime Kubernetes deployments with automated rollback and health checks.',
    tech: ['Go', 'Kubernetes', 'Helm', 'React', 'TypeScript', 'Docker'],
    cat: 'Tools',
    stars: '338',
    featured: false,
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(34,211,238,0.1))',
    glow: 'rgba(6,182,212,0.15)',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #111827 100%)' }}
    >
      <StarField count={150} speed={0.18} />
      <NebulaBackground variant="projects" />

      {/* Meteor shower */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: `${10 + i * 15}%`, right: `${5 + i * 10}%` }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [-0, -500], y: [0, 250], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 2.5, ease: 'easeIn' }}
          >
            <div className="h-px w-20 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.8), rgba(255,255,255,0.5))', transform: 'rotate(-25deg)' }} />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title text-4xl md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="divider-line" />
          <p className="font-body text-white/50 max-w-xl mx-auto text-sm">
            Handpicked projects that showcase my range — from AI infrastructure to beautiful frontends.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
        >
          {FILTERS.map(f => (
            <motion.button key={f} onClick={() => setFilter(f)}
              className="font-secondary text-xs px-4 py-2 rounded-full transition-all duration-200"
              style={{
                background: filter === f ? 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)' : 'rgba(255,255,255,0.05)',
                color: filter === f ? '#fff' : 'rgba(255,255,255,0.5)',
                border: filter === f ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: filter === f ? '0 0 20px rgba(6,182,212,0.4)' : 'none',
              }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          >
            {shown.map((p, i) => (
              <motion.div
                key={p.title}
                className="glass-card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, boxShadow: `0 0 40px ${p.glow}` }}
              >
                {/* Header banner */}
                <div className="h-36 relative" style={{ background: p.gradient }}>
                  {p.featured && (
                    <span className="absolute top-3 left-3 font-secondary text-xs px-2.5 py-1 rounded-full" style={{ background:'rgba(6,182,212,0.15)', border:'1px solid rgba(6,182,212,0.3)', color:'#06B6D4' }}>
                      ✦ Featured
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-heading font-bold text-white text-base px-4 text-center leading-tight">{p.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-secondary mb-3">
                    <Star size={11} fill="currentColor" />
                    <span>{p.stars} stars</span>
                    <span className="ml-auto font-secondary text-xs px-2 py-0.5 rounded-md text-white/40" style={{ background: 'rgba(255,255,255,0.05)' }}>{p.cat}</span>
                  </div>

                  <p className="font-body text-white/55 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.slice(0, 5).map(t => (
                      <span key={t} className="font-secondary text-xs px-2 py-0.5 rounded-md text-accent-cyan/80" style={{ background:'rgba(6,182,212,0.08)', border:'1px solid rgba(6,182,212,0.15)' }}>
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 5 && <span className="font-secondary text-xs text-white/25">+{p.tech.length - 5}</span>}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <motion.a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl font-secondary text-xs font-semibold text-white/60 hover:text-white transition-all glass"
                      whileHover={{ scale: 1.02 }}
                    >
                      <FiGithub size={13} /> Code
                    </motion.a>
                    <motion.a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl font-secondary text-xs font-semibold text-white transition-all"
                      style={{ background:'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)', boxShadow:'0 0 15px rgba(6,182,212,0.3)' }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <ExternalLink size={13} /> Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div className="text-center mt-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="btn-outline gap-2 inline-flex items-center"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
