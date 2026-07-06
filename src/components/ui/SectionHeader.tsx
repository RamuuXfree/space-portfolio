import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const centered = align === 'center';

  return (
    <motion.div
      ref={ref}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-label">{label}</p>
      <h2 className={`section-title text-3xl md:text-4xl lg:text-5xl max-w-3xl ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-white/50 text-sm md:text-base leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
      <div className={`divider-line ${centered ? '' : '!mx-0'}`} />
    </motion.div>
  );
}
