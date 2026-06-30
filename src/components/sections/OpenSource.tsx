import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../data/certificates';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';
import { ChevronLeft, ChevronRight, Star, GitPullRequest, Activity } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const githubStats = [
  { label: 'Repositories', value: '120+', icon: <FiGithub size={20} />, color: '#06B6D4' },
  { label: 'Contributions', value: '2,847', icon: <Activity size={20} />, color: '#3B82F6' },
  { label: 'Pull Requests', value: '340+', icon: <GitPullRequest size={20} />, color: '#8B5CF6' },
  { label: 'Stars Earned', value: '1.2K+', icon: <Star size={20} />, color: '#A855F7' },
];

const blogPosts = [
  {
    title: 'Building Production RAG Systems: Lessons from 100K Users',
    category: 'AI Engineering',
    date: 'Jun 2025',
    readTime: '12 min read',
    emoji: '🤖',
    color: '#06B6D4',
  },
  {
    title: 'The Future of AI Agents: From Tools to Autonomous Systems',
    category: 'Research',
    date: 'May 2025',
    readTime: '9 min read',
    emoji: '🧠',
    color: '#3B82F6',
  },
  {
    title: 'Next.js 15 + AI SDK: Building Real-time AI Applications',
    category: 'Full Stack',
    date: 'Apr 2025',
    readTime: '8 min read',
    emoji: '⚡',
    color: '#8B5CF6',
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
  };
  const stop = () => { if (intervalRef.current) clearInterval(intervalRef.current); };

  useEffect(() => {
    start();
    return stop;
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="testimonials" className="mb-24" ref={ref}>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        <p className="font-secondary text-sm text-accent-cyan tracking-widest uppercase mb-3">What People Say</p>
        <h3 className="font-heading font-bold text-3xl md:text-4xl text-white">
          Voices of <span className="gradient-text">Trust</span>
        </h3>
      </motion.div>

      <div className="relative max-w-4xl mx-auto" onMouseEnter={stop} onMouseLeave={start}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="glass-card p-8 md:p-10"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>

            <blockquote className="font-body text-white/70 text-base leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl glass-card"
                style={{ border: '1px solid rgba(6,182,212,0.3)' }}
              >
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="font-heading font-semibold text-white">{testimonials[current].name}</p>
                <p className="font-secondary text-xs text-accent-cyan">{testimonials[current].role}, {testimonials[current].company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="glass p-2 rounded-full text-white/50 hover:text-white hover:border-accent-cyan/50 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current ? 'linear-gradient(90deg,#06B6D4,#8B5CF6)' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="glass p-2 rounded-full text-white/50 hover:text-white hover:border-accent-cyan/50 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OpenSourceBlogTestimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="opensource"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0B1120 100%)' }}
    >
      <StarField count={120} speed={0.15} />
      <NebulaBackground variant="skills" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Open Source / GitHub */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="font-secondary text-sm text-accent-cyan tracking-widest uppercase mb-3">Open Source</p>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8">
            GitHub <span className="gradient-text">Activity</span>
          </h3>
        </motion.div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {githubStats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 0 20px ${stat.color}25` }}
            >
              <div className="mb-3" style={{ color: stat.color }}>{stat.icon}</div>
              <div className="font-heading font-bold text-2xl mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="font-secondary text-xs text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph placeholder */}
        <motion.div
          className="glass-card p-6 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-5">
            <h4 className="font-heading font-semibold text-white">Contribution Activity (2025)</h4>
            <span className="font-secondary text-xs text-accent-cyan">2,847 contributions</span>
          </div>
          <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(52, 1fr)' }}>
            {Array.from({ length: 364 }).map((_, i) => {
              const intensity = Math.random();
              const color = intensity > 0.8 ? '#06B6D4' : intensity > 0.5 ? '#0e7490' : intensity > 0.2 ? '#164e63' : '#1e293b';
              return (
                <div
                  key={i}
                  className="rounded-sm aspect-square"
                  style={{
                    background: color,
                    boxShadow: intensity > 0.8 ? `0 0 4px rgba(6,182,212,0.6)` : 'none',
                  }}
                  title={`${Math.floor(intensity * 8)} contributions`}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Blog section */}
        <div id="blog">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="font-secondary text-sm text-accent-cyan tracking-widest uppercase mb-3">Writing</p>
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Latest <span className="gradient-text">Articles</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.a
                key={i}
                href="#"
                className="glass-card p-6 group block"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ y: -5, boxShadow: `0 0 25px ${post.color}25` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 glass"
                  style={{ border: `1px solid ${post.color}30` }}
                >
                  {post.emoji}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-secondary px-2 py-0.5 rounded-full"
                    style={{ background: `${post.color}20`, color: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-white/30">{post.readTime}</span>
                </div>
                <h4 className="font-heading font-semibold text-white text-sm leading-snug mb-3 group-hover:text-accent-cyan transition-colors">
                  {post.title}
                </h4>
                <p className="font-secondary text-xs text-white/30">{post.date}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
