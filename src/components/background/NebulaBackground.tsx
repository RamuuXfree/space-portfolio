import { useReducedMotion } from '../../hooks/useReducedMotion';

const BLOBS = [
  { x: '12%', y: '10%', size: 680, delay: 0, dur: 32 },
  { x: '78%', y: '6%', size: 540, delay: -8, dur: 36 },
  { x: '48%', y: '32%', size: 620, delay: -16, dur: 40 },
  { x: '90%', y: '48%', size: 480, delay: -6, dur: 34 },
  { x: '6%', y: '68%', size: 520, delay: -12, dur: 38 },
  { x: '58%', y: '82%', size: 580, delay: -20, dur: 42 },
];

export default function NebulaBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="nebula-field absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ transform: 'translate3d(0, var(--nebula-parallax, 0px), 0)' }}
    >
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className={`nebula-blob ${reduced ? 'nebula-blob--static' : ''}`}
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
