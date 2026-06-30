import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onDown = () => setClick(true);
    const onUp = () => setClick(false);
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHover(!!el.closest('a, button, [role="button"], input, textarea, [data-hover]'));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        const sz = hover ? 44 : click ? 20 : 32;
        ringRef.current.style.transform = `translate(${ring.current.x - sz / 2}px, ${ring.current.y - sz / 2}px)`;
        ringRef.current.style.width = `${sz}px`;
        ringRef.current.style.height = `${sz}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [hover, click]);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 8, height: 8, borderRadius: '50%',
          background: hover ? '#A855F7' : '#06B6D4',
          boxShadow: hover ? '0 0 10px #A855F7' : '0 0 10px #06B6D4',
          zIndex: 99999, pointerEvents: 'none',
          transition: 'background 0.2s, box-shadow 0.2s',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          border: hover ? '1.5px solid #A855F7' : '1.5px solid rgba(6,182,212,0.7)',
          borderRadius: '50%',
          zIndex: 99998, pointerEvents: 'none',
          boxShadow: hover ? '0 0 15px rgba(168,85,247,0.5)' : '0 0 10px rgba(6,182,212,0.3)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      />
    </>
  );
}
