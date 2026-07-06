import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/personal';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const nameSpring = { type: 'spring' as const, stiffness: 75, damping: 22, mass: 0.85 };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col">
      <div className="container-custom flex-1 flex items-center pt-28 pb-20">
        <div className="max-w-4xl">
          <motion.p
            className="font-secondary text-[11px] tracking-[0.28em] uppercase text-white/40 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m
          </motion.p>

          <div className="relative mb-5 md:mb-6">
            <motion.div
              className="hero-name-glow"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...nameSpring, delay: 0.18 }}
            />
            <motion.h1
              className="hero-name font-heading font-medium leading-[1.02] tracking-[-0.03em]"
              initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ ...nameSpring, delay: 0.2 }}
            >
              <span className="hero-name-text">{personalInfo.fullName}</span>
            </motion.h1>
          </div>

          <motion.p
            className="font-secondary text-sm md:text-base tracking-[0.04em] text-white/62 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            className="font-body text-white/48 text-base md:text-[1.05rem] leading-relaxed max-w-xl mb-10 md:mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.62 }}
          >
            <motion.button
              className="btn-primary text-white gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('project')}
            >
              View Projects
              <ArrowRight size={14} />
            </motion.button>
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('contact')}
            >
              Contact
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.button
        className="mx-auto mb-10 flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
      >
        <span className="font-secondary text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={13} />
      </motion.button>
    </section>
  );
}
