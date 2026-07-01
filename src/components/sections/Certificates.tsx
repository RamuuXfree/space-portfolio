import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certificates, achievements } from '../../data/certificates';
import StarField from '../background/StarField';
import NebulaBackground from '../background/NebulaBackground';
import { ExternalLink } from 'lucide-react';

function StatCounter({ end, duration = 2.5, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <>{value.toLocaleString()}{suffix}</>;
}

function OrbitDecoration() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
      {[120, 180, 240].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            right: -size / 2,
            top: '50%',
            transform: 'translateY(-50%)',
            border: `1px solid rgba(6,182,212,${0.4 - i * 0.1})`,
          }}
        />
      ))}
    </div>
  );
}

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="certificates"
      className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1120 0%, #111827 100%)' }}
    >
      <StarField count={120} speed={0.2} />
      <NebulaBackground variant="about" />
      <OrbitDecoration />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-secondary text-sm text-accent-cyan tracking-widest uppercase mb-4">Credentials</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: 'linear-gradient(90deg,transparent,#06B6D4,transparent)' }} />
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              {/* Glow bg on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}10, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{cert.logo}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-secondary"
                    style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-white text-sm mb-1 leading-snug">{cert.title}</h3>
                <p className="font-secondary text-xs text-white/40 mb-4">{cert.issuer} · {cert.date}</p>

                <div
                  className="flex items-center justify-between p-3 rounded-xl mb-4"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div>
                    <p className="font-secondary text-xs text-white/30 mb-0.5">Credential ID</p>
                    <p className="font-button text-xs text-white/60">{cert.credentialId}</p>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 rounded-xl justify-center font-button text-xs font-semibold transition-all duration-200 w-full"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    color: cert.color,
                  }}
                >
                  <ExternalLink size={12} />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements counters */}
        <div id="achievements">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-white">
              Numbers That <span className="gradient-text">Define</span> Me
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="glass-card p-6 text-center group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${ach.color}08, transparent 70%)` }}
                />

                <div className="text-3xl mb-2">{ach.icon}</div>
                <div
                  className="font-heading font-bold text-2xl md:text-3xl mb-1"
                  style={{ color: ach.color }}
                >
                  {inView ? (
                    <StatCounter end={ach.value} duration={2.5} suffix={ach.suffix} />
                  ) : '0'}
                </div>
                <p className="font-heading font-semibold text-white text-xs mb-1">{ach.title}</p>
                <p className="font-secondary text-xs text-white/30">{ach.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}