import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StarFieldProps {
  count?: number;
  mouseRef?: React.RefObject<{ x: number; y: number }>;
}

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  opacity: number;
  phase: number;
  driftX: number;
}

export default function StarField({ count = 160, mouseRef }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let t = 0;
    let raf = 0;
    let visible = true;

    const buildStars = () => {
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.85 + 0.15,
        r: Math.random() * 1.2 + 0.25,
        opacity: Math.random() * 0.55 + 0.2,
        phase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.04,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
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
      if (!visible || width === 0) return;

      const driftMult = parseFloat(
        getComputedStyle(document.querySelector('.global-cosmos') || document.body).getPropertyValue('--star-drift'),
      ) || 1;

      t += reduced ? 0.004 : 0.012;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef?.current.x ?? 0.5;
      const my = mouseRef?.current.y ?? 0.5;
      const parallaxX = (mx - 0.5) * 14;
      const parallaxY = (my - 0.5) * 10;
      const driftSpeed = 0.045 * driftMult;

      for (const star of stars) {
        if (!reduced) {
          star.y -= driftSpeed * star.z;
          star.x += star.driftX * star.z;
          if (star.y < -6) {
            star.y = height + 6;
            star.x = Math.random() * width;
          }
          if (star.x < -4) star.x = width + 4;
          if (star.x > width + 4) star.x = -4;
        }

        const twinkle = Math.sin(t * 1.2 + star.phase) * 0.15 + 0.85;
        const px = star.x + parallaxX * star.z;
        const py = star.y + parallaxY * star.z;
        const radius = star.r * star.z;
        const alpha = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235,245,255,${alpha})`;
        ctx.fill();
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
      className="absolute inset-0 w-full h-full pointer-events-none starfield-canvas"
      aria-hidden="true"
    />
  );
}
