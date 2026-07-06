import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/personal';

interface Props {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 2 + 1.2;
        if (next >= 100 && !doneRef.current) {
          doneRef.current = true;
          clearInterval(iv);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 400);
          }, 250);
          return 100;
        }
        return Math.min(next, 100);
      });
    }, 36);
    return () => clearInterval(iv);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center cosmic-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-16 h-16 rounded-full border border-white/10 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            style={{ boxShadow: '0 0 32px rgba(74,123,247,0.1)' }}
          />
          <p className="font-heading text-lg text-white/70 mb-6">{personalInfo.firstName}</p>
          <div className="w-40 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div className="h-full bg-cosmic-blue/60" animate={{ width: `${progress}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
