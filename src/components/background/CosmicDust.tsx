import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CosmicDustProps {
  count?: number;
  mouseRef?: React.RefObject<{ x: number; y: number }>;
}

export default function CosmicDust({ count = 50, mouseRef }: CosmicDustProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const particles = Array.from({ length: count }, () => ({
      x: 0,
      y: 0,
      z: Math.random() * 0.6 + 0.4,
      size: Math.random() * 0.7 + 0.2,
      drift: (Math.random() - 0.5) * 0.06,
      rise: Math.random() * 0.03 + 0.015,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      if (w === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles.forEach((p) => {
        p.x = Math.random() * w;
        p.y = Math.random() * h;
      });
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibility);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || w === 0) return;

      const speed =
        parseFloat(
          getComputedStyle(document.querySelector('.global-cosmos') || document.body).getPropertyValue(
            '--dust-speed',
          ),
        ) || 1;

      ctx.clearRect(0, 0, w, h);
      const px = ((mouseRef?.current.x ?? 0.5) - 0.5) * 10;
      const py = ((mouseRef?.current.y ?? 0.5) - 0.5) * 6;

      for (const p of particles) {
        const alpha = 0.06 + p.z * 0.1;
        const x = p.x + px * p.z;
        const y = p.y + py * p.z;

        ctx.beginPath();
        ctx.arc(x, y, p.size * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,195,230,${alpha})`;
        ctx.fill();

        if (!reduced) {
          p.x += p.drift * speed;
          p.y -= p.rise * p.z * speed;
          if (p.y < 0) {
            p.y = h;
            p.x = Math.random() * w;
          }
          if (p.x < 0 || p.x > w) p.drift *= -1;
        }
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [count, reduced, mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      aria-hidden="true"
    />
  );
}
