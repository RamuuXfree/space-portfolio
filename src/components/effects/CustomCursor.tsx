import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      hoverRef.current = !!el.closest('a, button, [role="button"], input, textarea');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    const animate = () => {
      const hover = hoverRef.current;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 3}px, ${pos.current.y - 3}px, 0)`;
        dotRef.current.style.background = hover ? '#7C6AE8' : 'rgba(255,255,255,0.9)';
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.14;
      ring.current.y += (pos.current.y - ring.current.y) * 0.14;
      if (ringRef.current) {
        const sz = hover ? 40 : 28;
        ringRef.current.style.transform = `translate3d(${ring.current.x - sz / 2}px, ${ring.current.y - sz / 2}px, 0)`;
        ringRef.current.style.width = `${sz}px`;
        ringRef.current.style.height = `${sz}px`;
        ringRef.current.style.borderColor = hover ? 'rgba(124,106,232,0.5)' : 'rgba(255,255,255,0.2)';
      }
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[99999]"
        style={{ boxShadow: '0 0 6px rgba(255,255,255,0.4)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998]"
        style={{ border: '1px solid rgba(255,255,255,0.2)' }}
      />
    </>
  );
}
