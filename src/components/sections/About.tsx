import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Code2, Brain, Zap } from 'lucide-react';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';

const FOCUS = [
  { icon: Brain,   text: 'Large Language Models & RAG Systems', color: '#06B6D4' },
  { icon: Code2,   text: 'Full Stack Development (React / Node / Python)', color: '#3B82F6' },
  { icon: Zap,     text: 'AI Safety & Responsible ML', color: '#8B5CF6' },
  { icon: Briefcase, text: 'Open Source Contributions', color: '#A855F7' },
];

const EDUCATION = [
  {
    degree: 'M.S. Computer Science — AI Concentration',
    school: 'Stanford University',
    year: '2020 – 2022',
    gpa: '3.9/4.0',
    desc: 'Focused on deep learning, NLP, and reinforcement learning. Published two papers on attention mechanisms.',
  },
  {
    degree: 'B.S. Software Engineering',
    school: 'MIT',
    year: '2016 – 2020',
    gpa: '3.8/4.0',
    desc: 'Strong foundation in algorithms, distributed systems, and full-stack development.',
  },
];

const HIGHLIGHTS = [
  { year: '2024', title: 'Lead AI Engineer', company: 'TechCorp', desc: 'Architected LLM-powered pipelines serving 10M users.' },
  { year: '2023', title: 'Built OpenLLM Framework', company: 'Open Source', desc: '2,000+ GitHub stars. Used by 500+ companies worldwide.' },
  { year: '2022', title: 'AI Research Engineer', company: 'DeepMind', desc: 'Contributed to Gemini pre-training and safety alignment.' },
  { year: '2021', title: 'Full Stack Lead', company: 'Startup X', desc: 'Built 0→1 SaaS platform, grew to $2M ARR in 18 months.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #111827 100%)' }}
    >
      <StarField count={140} speed={0.2} />
      <NebulaBackground variant="about" />

      {/* Aurora beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[{ l:'20%', c:'rgba(6,182,212,0.06)', dur:9 }, { l:'70%', c:'rgba(139,92,246,0.05)', dur:12 }].map((b,i) => (
          <motion.div key={i} className="absolute top-0 bottom-0" style={{ left: b.l, width: 1, background: `linear-gradient(180deg, transparent, ${b.c}, transparent)`, filter: 'blur(20px)' }}
            animate={{ scaleX: [1, 1.6, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Story</span>
          <h2 className="section-title text-4xl md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="divider-line" />
          <p className="font-body text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            A passionate technologist who believes that the most profound impact comes from combining rigorous engineering with creative vision. I've spent the last 5 years building at the cutting edge of AI and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Story card */}
          <motion.div className="lg:col-span-1 glass-card p-6 flex flex-col gap-5"
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-2" style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
              border: '1px solid rgba(6,182,212,0.25)',
            }}>
              <span className="font-signature italic text-4xl" style={{
                background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>AN</span>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-bold text-white text-lg">Alex Nova</h3>
              <p className="font-secondary text-xs text-accent-cyan mt-1">AI Engineer & Full Stack Developer</p>
              <p className="font-signature italic text-white/40 text-sm mt-1">New York, USA 🇺🇸</p>
            </div>

            <div className="border-t border-white/5 pt-4">
              <p className="font-secondary text-xs text-white/30 uppercase tracking-widest mb-3">Current Focus</p>
              <div className="flex flex-col gap-2">
                {FOCUS.map(({ icon: Icon, text, color }, i) => (
                  <motion.div key={i} className="flex items-start gap-3 glass px-3 py-2.5 rounded-xl"
                    whileHover={{ x: 3 }}
                  >
                    <Icon size={14} style={{ color, marginTop: 2, flexShrink: 0 }} />
                    <span className="font-secondary text-xs text-white/70 leading-relaxed">{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="glass-card p-6"
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="font-heading font-semibold text-white flex items-center gap-2 mb-5">
              <GraduationCap className="text-accent-cyan" size={20} />
              Education
            </h3>
            <div className="flex flex-col gap-4">
              {EDUCATION.map((edu, i) => (
                <motion.div key={i} className="glass px-4 py-4 rounded-xl"
                  whileHover={{ boxShadow: '0 0 20px rgba(6,182,212,0.1)' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-heading font-semibold text-white text-sm leading-snug flex-1">{edu.degree}</h4>
                    <span className="font-secondary text-xs text-accent-cyan whitespace-nowrap">{edu.gpa}</span>
                  </div>
                  <p className="font-secondary text-xs text-accent-cyan mb-1">{edu.school}</p>
                  <p className="font-secondary text-xs text-white/30 mb-2">{edu.year}</p>
                  <p className="font-body text-xs text-white/50 leading-relaxed">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Timeline */}
          <motion.div className="glass-card p-6"
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="font-heading font-semibold text-white flex items-center gap-2 mb-5">
              <Briefcase className="text-accent-violet" size={20} />
              Career Highlights
            </h3>
            <div className="relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, #06B6D4, #8B5CF6, transparent)' }} />
              <div className="flex flex-col gap-5 pl-9">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div key={i} whileHover={{ x: 2 }} className="relative">
                    <div className="absolute -left-9 top-1 w-4 h-4 rounded-full border-2 border-accent-cyan flex items-center justify-center"
                      style={{ background: '#050816', boxShadow: '0 0 8px rgba(6,182,212,0.6)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    </div>
                    <span className="font-secondary text-xs text-accent-cyan/60">{h.year}</span>
                    <h4 className="font-heading font-semibold text-white text-sm leading-tight">{h.title}</h4>
                    <p className="font-secondary text-xs text-accent-violet mb-1">{h.company}</p>
                    <p className="font-body text-xs text-white/50 leading-relaxed">{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
