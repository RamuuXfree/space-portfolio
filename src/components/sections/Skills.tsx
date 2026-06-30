import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';

const CATEGORIES = ['All', 'AI/ML', 'Frontend', 'Backend', 'DevOps', 'Tools'];

const SKILLS = [
  // AI/ML
  { name: 'Python', level: 98, cat: 'AI/ML', color: '#3B82F6' },
  { name: 'PyTorch', level: 92, cat: 'AI/ML', color: '#3B82F6' },
  { name: 'TensorFlow', level: 88, cat: 'AI/ML', color: '#3B82F6' },
  { name: 'LangChain', level: 94, cat: 'AI/ML', color: '#06B6D4' },
  { name: 'OpenAI API', level: 97, cat: 'AI/ML', color: '#06B6D4' },
  { name: 'HuggingFace', level: 90, cat: 'AI/ML', color: '#A855F7' },
  { name: 'scikit-learn', level: 93, cat: 'AI/ML', color: '#3B82F6' },
  { name: 'RAG Systems', level: 95, cat: 'AI/ML', color: '#06B6D4' },
  // Frontend
  { name: 'React', level: 97, cat: 'Frontend', color: '#06B6D4' },
  { name: 'TypeScript', level: 95, cat: 'Frontend', color: '#3B82F6' },
  { name: 'Next.js', level: 93, cat: 'Frontend', color: '#fff' },
  { name: 'Tailwind CSS', level: 96, cat: 'Frontend', color: '#06B6D4' },
  { name: 'Framer Motion', level: 88, cat: 'Frontend', color: '#A855F7' },
  { name: 'Three.js', level: 80, cat: 'Frontend', color: '#8B5CF6' },
  // Backend
  { name: 'Node.js', level: 91, cat: 'Backend', color: '#22D3EE' },
  { name: 'FastAPI', level: 94, cat: 'Backend', color: '#06B6D4' },
  { name: 'PostgreSQL', level: 89, cat: 'Backend', color: '#3B82F6' },
  { name: 'MongoDB', level: 87, cat: 'Backend', color: '#22D3EE' },
  { name: 'Redis', level: 85, cat: 'Backend', color: '#EF4444' },
  { name: 'GraphQL', level: 82, cat: 'Backend', color: '#A855F7' },
  // DevOps
  { name: 'Docker', level: 90, cat: 'DevOps', color: '#3B82F6' },
  { name: 'Kubernetes', level: 83, cat: 'DevOps', color: '#3B82F6' },
  { name: 'AWS', level: 88, cat: 'DevOps', color: '#F59E0B' },
  { name: 'CI/CD (GitHub Actions)', level: 92, cat: 'DevOps', color: '#8B5CF6' },
  // Tools
  { name: 'Git', level: 98, cat: 'Tools', color: '#F97316' },
  { name: 'Figma', level: 80, cat: 'Tools', color: '#A855F7' },
  { name: 'VS Code', level: 99, cat: 'Tools', color: '#06B6D4' },
];

export default function Skills() {
  const [active, setActive] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.cat === active);

  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0B1120 100%)' }}
    >
      <StarField count={120} speed={0.15} />
      <NebulaBackground variant="skills" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="section-label">Tech Arsenal</span>
          <h2 className="section-title text-4xl md:text-5xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="divider-line" />
          <p className="font-body text-white/50 max-w-xl mx-auto text-sm">
            A curated collection of technologies I've mastered through years of building production-grade systems.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
        >
          {CATEGORIES.map(cat => (
            <motion.button key={cat}
              onClick={() => setActive(cat)}
              className="font-secondary text-xs px-4 py-2 rounded-full transition-all duration-200"
              style={{
                background: active === cat ? 'linear-gradient(135deg, #06B6D4, #3B82F6, #8B5CF6)' : 'rgba(255,255,255,0.05)',
                color: active === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: active === cat ? '0 0 20px rgba(6,182,212,0.4)' : 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={`${skill.name}-${active}`}
              className="glass-card p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -3, boxShadow: `0 0 25px ${skill.color}25` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-semibold text-white text-sm">{skill.name}</span>
                <span className="font-secondary text-xs font-bold" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              {/* Progress track */}
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`, boxShadow: `0 0 8px ${skill.color}` }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.04 + 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div className="mt-12 text-center"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
        >
          <p className="font-secondary text-xs text-white/25 mb-4 tracking-widest uppercase">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Rust', 'Go', 'Java', 'C++', 'Solidity', 'R', 'MATLAB', 'Spark', 'Kafka', 'Elasticsearch', 'Terraform', 'Ansible'].map(t => (
              <span key={t} className="glass px-3 py-1 rounded-full font-secondary text-xs text-white/40 hover:text-accent-cyan hover:border-accent-cyan/20 transition-colors border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
