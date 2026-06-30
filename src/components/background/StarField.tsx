import { useEffect, useRef } from 'react';

interface StarFieldProps {
  count?: number;
  speed?: number;
}

export default function StarField({ count = 180, speed = 0.25 }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      drift: Math.random() * speed + 0.05,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    let t = 0;

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        const twinkle = Math.sin(t * 2 + s.phase) * 0.25 + 0.75;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity * twinkle})`;
        ctx.fill();

        if (s.r > 1) {
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          g.addColorStop(0, `rgba(180,220,255,${0.3 * twinkle})`);
          g.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        s.y -= s.drift;
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
      });

      frame = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
