import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { EducationEntry } from '../../data/education';
import type { MilestoneLayout } from '../../data/educationJourney';

function useMilestoneOpacity(scroll: MotionValue<number>, layout: MilestoneLayout) {
  const { scrollStart: a, scrollPeak: b, scrollEnd: c } = layout;
  const mid1 = a + (b - a) * 0.45;
  const mid2 = b + (c - b) * 0.45;
  return useTransform(scroll, [a, mid1, b, mid2, c], [0, 0.9, 1, 0.9, 0]);
}

interface MilestoneCardProps {
  entry: EducationEntry;
  layout: MilestoneLayout;
  scrollProgress: MotionValue<number>;
  step: number;
}

function MilestoneCard({ entry, layout, scrollProgress, step }: MilestoneCardProps) {
  const opacity = useMilestoneOpacity(scrollProgress, layout);
  const glowOpacity = useTransform(opacity, [0, 1], [0, 0.7]);
  const y = useTransform(
    scrollProgress,
    [layout.scrollStart, layout.scrollPeak, layout.scrollEnd],
    [18, 0, 18],
  );

  const alignClass =
    layout.cardAlign === 'right'
      ? 'education-milestone-card--right'
      : 'education-milestone-card--left';

  return (
    <motion.article
      className={`education-milestone-card education-milestone-card--step-${step} ${alignClass}`}
      style={{
        opacity,
        y,
        top: `${layout.node.y}%`,
        left: layout.cardAlign === 'right' ? `${layout.node.x + 3}%` : undefined,
        right: layout.cardAlign === 'left' ? `${100 - layout.node.x + 3}%` : undefined,
      }}
      aria-label={`${entry.qualification} at ${entry.institution}`}
    >
      <motion.div
        className="education-milestone-card-glow"
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      />

      <div className="education-milestone-card-inner">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="education-milestone-year">{entry.period}</span>
          {entry.status === 'pursuing' && (
            <span className="education-milestone-status">Pursuing</span>
          )}
        </div>

        <h3 className="font-heading text-lg md:text-xl text-white leading-snug mb-2">
          {entry.institution}
        </h3>

        <p className="font-body text-cosmic-blue/85 text-sm md:text-base mb-3 leading-relaxed">
          {entry.qualification}
        </p>

        <p className="font-body text-white/40 text-sm flex items-center gap-1.5">
          <MapPin size={12} className="text-white/25 shrink-0" />
          {entry.location}
        </p>
      </div>
    </motion.article>
  );
}

interface OrbitNodeProps {
  layout: MilestoneLayout;
  scrollProgress: MotionValue<number>;
  index: number;
}

function OrbitNode({ layout, scrollProgress, index }: OrbitNodeProps) {
  const opacity = useMilestoneOpacity(scrollProgress, layout);
  const haloOpacity = useTransform(opacity, [0, 1], [0.2, 0.85]);

  return (
    <motion.div
      className="education-journey-node"
      style={{
        left: `${layout.node.x}%`,
        top: `${layout.node.y}%`,
        opacity,
      }}
      aria-hidden="true"
    >
      <motion.span className="education-journey-node-halo" style={{ opacity: haloOpacity }} />
      <span className="education-journey-node-core" />
      <span className="education-journey-node-ring" />
      <span className="education-journey-node-orbit" />
      <span className="education-journey-node-index">{index + 1}</span>
    </motion.div>
  );
}

interface EducationJourneyProps {
  entries: EducationEntry[];
  layouts: MilestoneLayout[];
  pathD: string;
}

export default function EducationJourney({ entries, layouts, pathD }: EducationJourneyProps) {
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathGlowOpacity = useTransform(pathLength, [0, 0.06, 1], [0, 0.55, 1]);
  const trackOpacity = useTransform(pathLength, [0, 0.05], [0, 0.22]);

  return (
    <div ref={journeyRef} className="education-journey">
      <svg
        className="education-journey-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="edu-path-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(74,123,247,0.55)" />
            <stop offset="50%" stopColor="rgba(124,106,232,0.5)" />
            <stop offset="100%" stopColor="rgba(74,123,247,0.65)" />
          </linearGradient>
        </defs>

        <motion.path
          d={pathD}
          fill="none"
          stroke="rgba(140,170,255,0.08)"
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: trackOpacity }}
        />

        <motion.path
          d={pathD}
          fill="none"
          stroke="rgba(74,123,247,0.3)"
          strokeWidth="1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength, opacity: pathGlowOpacity }}
        />

        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#edu-path-gradient)"
          strokeWidth="0.45"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>

      {layouts.map((layout, i) => (
        <OrbitNode
          key={`node-${entries[i].id}`}
          layout={layout}
          scrollProgress={scrollYProgress}
          index={i}
        />
      ))}

      {entries.map((entry, i) => (
        <MilestoneCard
          key={entry.id}
          entry={entry}
          layout={layouts[i]}
          scrollProgress={scrollYProgress}
          step={i}
        />
      ))}
    </div>
  );
}
