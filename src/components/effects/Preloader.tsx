import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { onComplete: () => void; }

const messages = [
  'Initializing Portfolio...',
  'Loading Cosmic Data...',
  'Calibrating AI Systems...',
  'Mapping the Universe...',
  'Launching Experience...',
];

export default function Preloader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 2.5 + 1;
        if (next >= 100 && !doneRef.current) {
          doneRef.current = true;
          clearInterval(iv);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return Math.min(next, 100);
      });
    }, 40);
    return () => clearInterval(iv);
  }, [onComplete]);

  useEffect(() => {
    const iv = setInterval(() => setMsgIdx(i => (i + 1) % messages.length), 900);
    return () => clearInterval(iv);
  }, []);

  /* random stars */
  const stars = useRef(
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 3}s`,
    }))
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050816' }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5 }}
        >
          {/* Stars */}
          {stars.current.map(s => (
            <span
              key={s.id}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, opacity: 0.5 }}
            />
          ))}

          {/* Black hole */}
          <div className="relative flex items-center justify-center mb-10" style={{ width: 200, height: 200 }}>
            {/* Accretion glow */}
            <div className="absolute inset-0 rounded-full" style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 75%)',
              filter: 'blur(20px)',
            }} />

            {/* Rings */}
            {[160, 130, 105].map((sz, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: sz, height: sz,
                  border: `1px solid rgba(6,182,212,${0.35 - i * 0.08})`,
                  boxShadow: `0 0 ${15 + i * 8}px rgba(6,182,212,${0.25 - i * 0.06})`,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 5 + i * 2, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            {/* Orbiting dots */}
            {[
              { color: '#06B6D4', r: 80, dur: 3 },
              { color: '#8B5CF6', r: 65, dur: 4.5 },
              { color: '#A855F7', r: 50, dur: 6 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: '50%', top: '50%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: p.dur, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 8, height: 8,
                    left: p.r, top: -4,
                    background: p.color,
                    boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
                  }}
                />
              </motion.div>
            ))}

            {/* Core */}
            <div className="relative z-10 w-14 h-14 rounded-full" style={{
              background: 'radial-gradient(circle, #000 40%, rgba(6,182,212,0.1) 100%)',
              boxShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(139,92,246,0.2)',
            }} />
          </div>

          {/* Brand name */}
          <motion.h1
            className="font-heading font-bold text-4xl gradient-text mb-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Alex Nova
          </motion.h1>

          {/* Cycling message */}
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIdx}
              className="font-secondary text-xs tracking-widest uppercase mb-8"
              style={{ color: 'rgba(6,182,212,0.7)' }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {messages[msgIdx]}
            </motion.p>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="w-60 h-px rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #06B6D4, #3B82F6, #8B5CF6, #A855F7)', boxShadow: '0 0 10px rgba(6,182,212,0.8)' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
          <p className="font-button text-white/30 text-xs mt-2 tabular-nums">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
