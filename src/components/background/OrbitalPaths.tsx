import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface OrbitalPathsProps {
  mouseRef?: React.RefObject<{ x: number; y: number }>;
}

export default function OrbitalPaths({ mouseRef }: OrbitalPathsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current) return;
    const el = containerRef.current;
    let raf = 0;

    const loop = () => {
      const mx = mouseRef?.current.x ?? 0.5;
      const my = mouseRef?.current.y ?? 0.5;
      const tiltX = (mx - 0.5) * 4;
      const tiltY = (my - 0.5) * 3;
      el.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [reduced, mouseRef]);

  if (reduced) return null;

  return (
    <div
      ref={containerRef}
      className="orbital-paths absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="orbital-ring orbital-ring--1" />
      <div className="orbital-ring orbital-ring--2" />
      <div className="orbital-ring orbital-ring--3 hidden md:block" />
    </div>
  );
}
