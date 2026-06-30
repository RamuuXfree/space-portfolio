import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';

const EXPERIENCES = [
  {
    role: 'Lead AI Engineer',
    company: 'TechCorp Inc.',
    type: 'Full-time',
    period: 'Jan 2024 – Present',
    location: 'New York, USA',
    color: '#06B6D4',
    desc: 'Leading a team of 8 engineers building AI-powered products. Architected LLM pipelines serving 10M+ users, reduced inference cost by 60%.',
    achievements: [
      'Deployed GPT-4 powered chatbot with 99.9% uptime serving 10M users',
      'Reduced model inference cost by 60% through quantization and caching',
      'Built RAG system processing 500K documents in real-time',
      'Mentored 5 junior engineers, 2 promoted to senior roles',
    ],
    tech: ['Python', 'LangChain', 'FastAPI', 'React', 'AWS', 'Kubernetes'],
  },
  {
    role: 'AI Research Engineer',
    company: 'DeepMind',
    type: 'Full-time',
    period: 'Aug 2022 – Dec 2023',
    location: 'London, UK (Remote)',
    color: '#3B82F6',
    desc: 'Contributed to Gemini pre-training infrastructure and safety alignment research. Published 2 papers at NeurIPS.',
    achievements: [
      'Co-authored 2 NeurIPS papers on Constitutional AI and RLHF',
      'Built distributed training pipeline for 70B parameter models',
      'Developed automated red-teaming system for LLM safety',
      'Reduced training time by 35% through gradient checkpointing',
    ],
    tech: ['Python', 'JAX', 'TPU', 'TensorFlow', 'Kubernetes', 'GCP'],
  },
  {
    role: 'Full Stack Lead',
    company: 'Startup X',
    type: 'Full-time',
    period: 'Jun 2021 – Jul 2022',
    location: 'San Francisco, CA',
    color: '#8B5CF6',
    desc: 'Built the entire product 0→1. Led a cross-functional team of 12 to ship a SaaS platform that grew to $2M ARR in 18 months.',
    achievements: [
      'Architected monolith → microservices migration with zero downtime',
      'Built real-time collaboration features for 50K+ concurrent users',
      'Grew platform from 0 to $2M ARR in 18 months',
      'Hired and mentored a team of 8 engineers',
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Google',
    type: 'Internship',
    period: 'May 2020 – Aug 2020',
    location: 'Mountain View, CA',
    color: '#A855F7',
    desc: 'Worked on Google Search ranking algorithms and A/B testing infrastructure. Impact deployed to 3B+ users.',
    achievements: [
      'Improved search ranking quality by 1.2% (billions of queries/day)',
      'Built A/B testing dashboard used by 200+ engineers',
      'Received return offer (declined to pursue startup opportunity)',
    ],
    tech: ['C++', 'Python', 'Go', 'Bigtable', 'Borg', 'Protocol Buffers'],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="experience"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0B1120 100%)' }}
    >
      <StarField count={130} speed={0.15} />
      <NebulaBackground variant="experience" />

      {/* Floating planets */}
      {[{ sz: 80, color: 'rgba(6,182,212,0.08)', x: '85%', y: '15%' }, { sz: 120, color: 'rgba(139,92,246,0.07)', x: '5%', y: '70%' }].map((p, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none" style={{
          width: p.sz, height: p.sz, left: p.x, top: p.y,
          background: `radial-gradient(circle, ${p.color}, transparent)`,
          border: '1px solid rgba(6,182,212,0.1)',
          filter: 'blur(2px)',
        }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="section-label">Career Path</span>
          <h2 className="section-title text-4xl md:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="divider-line" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={i} className="flex gap-5 mb-6"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div className="w-4 h-4 rounded-full border-2" style={{ borderColor: exp.color, background: '#050816', boxShadow: `0 0 12px ${exp.color}` }} />
                {i < EXPERIENCES.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: `linear-gradient(180deg, ${exp.color}40, transparent)` }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 glass-card overflow-hidden mb-2">
                <button
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold text-white text-base">{exp.role}</h3>
                      <span className="font-secondary text-xs px-2 py-0.5 rounded-full" style={{ background:`${exp.color}20`, color: exp.color, border:`1px solid ${exp.color}30` }}>{exp.type}</span>
                    </div>
                    <p className="font-secondary text-sm" style={{ color: exp.color }}>{exp.company}</p>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <span className="font-secondary text-xs text-white/35">{exp.period}</span>
                      <span className="font-secondary text-xs text-white/25">📍 {exp.location}</span>
                    </div>
                  </div>
                  <div className="text-white/30 shrink-0 mt-1">
                    {expanded === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <p className="font-body text-white/55 text-sm leading-relaxed mt-4 mb-4">{exp.desc}</p>
                        <div className="flex flex-col gap-2 mb-4">
                          {exp.achievements.map((a, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
                              <span className="font-body text-xs text-white/60 leading-relaxed">{a}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map(t => (
                            <span key={t} className="font-secondary text-xs px-2 py-0.5 rounded-md text-white/50" style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
