import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Download, ChevronDown } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { personalInfo, stats } from '../../data/personal';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';
import CountUp from 'react-countup';

const ROLES = ['AI Engineer', 'Full Stack Developer', 'ML Engineer', 'Open Source Contributor', 'Creative Technologist'];

function Typewriter({ texts }: { texts: string[] }) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const full = texts[idx];
    const spd = del ? 40 : 85;
    const t = setTimeout(() => {
      if (!del) {
        if (char < full.length) {
          setDisplay(full.slice(0, char + 1));
          setChar(c => c + 1);
        } else {
          setTimeout(() => setDel(true), 1800);
        }
      } else {
        if (char > 0) {
          setDisplay(full.slice(0, char - 1));
          setChar(c => c - 1);
        } else {
          setDel(false);
          setIdx(i => (i + 1) % texts.length);
        }
      }
    }, spd);
    return () => clearTimeout(t);
  }, [char, idx, del, texts]);

  return (
    <span>
      <span className="gradient-text">{display}</span>
      <span className="animate-blink" style={{ color: '#06B6D4' }}>|</span>
    </span>
  );
}

// FIX: Store the actual component, not an object with properties
const SOCIALS = [
  { href: 'https://github.com',   Icon: FiGithub,   color: '#fff',     label: 'GitHub' },
  { href: 'https://linkedin.com', Icon: FiLinkedin,  color: '#0077B5',  label: 'LinkedIn' },
  { href: 'https://twitter.com',  Icon: FiTwitter,   color: '#1DA1F2',  label: 'Twitter' },
  { href: 'mailto:alex@nova.dev', Icon: FiMail,      color: '#06B6D4',  label: 'Email' },
];

const TECH = ['⚛️', '🐍', '🧠', '☁️', '🔥', '▲'];

function Orbit() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
        style={{ width: 240, height: 240 }}
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
          filter: 'blur(30px)', transform: 'scale(1.6)',
        }} />

        {/* Profile sphere */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
          border: '1px solid rgba(6,182,212,0.3)',
          boxShadow: '0 0 60px rgba(6,182,212,0.35), 0 0 120px rgba(139,92,246,0.15), inset 0 0 40px rgba(6,182,212,0.08)',
        }}>
          <div className="text-center">
            <div className="font-signature italic text-6xl leading-none" style={{
              background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>AN</div>
            <div className="font-secondary text-xs text-white/40 tracking-widest mt-1">ALEX NOVA</div>
          </div>
        </div>

        {/* Orbit rings */}
        {[290, 340, 395].map((sz, i) => (
          <motion.div key={i} className="absolute rounded-full" style={{
            width: sz, height: sz,
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            border: `1px solid rgba(${i === 0 ? '6,182,212' : i === 1 ? '59,130,246' : '139,92,246'},${0.25 - i * 0.06})`,
          }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 16 + i * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Orbiting tech icons */}
        {[
          { emoji: TECH[0], r: 145, dur: 8,  delay: 0 },
          { emoji: TECH[1], r: 145, dur: 8,  delay: 2.7 },
          { emoji: TECH[2], r: 145, dur: 8,  delay: 5.4 },
          { emoji: TECH[3], r: 197, dur: 13, delay: 0 },
          { emoji: TECH[4], r: 197, dur: 13, delay: 4.3 },
          { emoji: TECH[5], r: 197, dur: 13, delay: 8.6 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: '50%', top: '50%', width: 0, height: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: item.dur, repeat: Infinity, ease: 'linear', delay: item.delay }}
          >
            <div className="glass-card absolute flex items-center justify-center" style={{
              width: 34, height: 34,
              left: item.r - 17, top: -17,
              borderRadius: 9, fontSize: 14,
            }}>
              {item.emoji}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050816 0%, #0B1120 100%)' }}
    >
      <StarField count={220} speed={0.2} />
      <NebulaBackground variant="hero" />

      {/* Main */}
      <div className="container-custom flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full pt-24 pb-10">

          {/* LEFT */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              className="glass inline-flex items-center gap-2 px-4 py-2 w-fit rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-secondary text-xs text-green-400 tracking-widest uppercase">Available for Hire</span>
            </motion.div>

            {/* Greeting + Name */}
            <div>
              <motion.p
                className="font-signature italic text-2xl text-white/40 mb-1"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              >
                Hello, World! I'm
              </motion.p>
              <motion.h1
                className="font-heading font-bold leading-none mb-3"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              >
                <span style={{ background:'linear-gradient(135deg,#fff,rgba(255,255,255,0.8))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Alex
                </span>{' '}
                <span className="gradient-text">Nova</span>
              </motion.h1>
              <motion.div
                className="font-secondary font-semibold text-xl md:text-2xl h-9 flex items-center"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              >
                <Typewriter texts={ROLES} />
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              className="font-body text-white/55 text-base leading-relaxed max-w-lg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 items-center"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            >
              <motion.button
                className="btn-primary text-white gap-2"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={14} />
                Hire Me
              </motion.button>
              <motion.a
                href="#"
                className="btn-outline gap-2"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              >
                <Download size={14} />
                Resume
              </motion.a>
              <motion.button
                className="font-button text-sm text-white/50 hover:text-white transition-colors"
                whileHover={{ x: 4 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects →
              </motion.button>
            </motion.div>

            {/* Socials - FIX: Render icon components correctly */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            >
              <span className="font-secondary text-xs text-white/30 tracking-widest uppercase">Follow</span>
              <div className="h-px w-8 bg-white/15" />
              {SOCIALS.map((s, i) => {
                // Create the icon component instance
                const IconComponent = s.Icon;
                return (
                  <motion.a 
                    key={i} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={s.label}
                    className="glass p-2 rounded-xl text-white/50 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, boxShadow: `0 0 15px ${s.color}50` }}
                  >
                    <IconComponent size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT: orbit */}
          <motion.div
            className="relative h-80 md:h-[460px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <Orbit />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 border-t border-white/[0.04]" ref={ref}>
        <div className="container-custom py-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="glass-card p-4 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 1.4 }}
                whileHover={{ y: -4, boxShadow: '0 0 30px rgba(6,182,212,0.12)' }}
              >
                <div className="font-heading font-bold text-2xl gradient-text-cyan mb-0.5">
                  {inView ? <CountUp end={s.value} duration={2.5} separator="," suffix={s.suffix} /> : '0'}
                </div>
                <div className="font-secondary text-xs text-white/40 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/30 hover:text-accent-cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-secondary text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={15} />
      </motion.button>
    </section>
  );
}