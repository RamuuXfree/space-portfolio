import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/personal';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding container-custom" ref={ref}>
      <SectionHeader label="About" title="Who I am" align="left" />

      <div className="max-w-2xl space-y-6">
        {personalInfo.about.map((paragraph, i) => (
          <motion.p
            key={i}
            className="font-body text-white/55 text-base md:text-lg leading-[1.75]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
