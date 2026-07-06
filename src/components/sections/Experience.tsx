import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { hyperLearning } from '../../data/hyperlearning';
import SectionHeader from '../ui/SectionHeader';

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding container-custom" ref={ref}>
      <SectionHeader
        label="Experience"
        title="Where I contribute"
        description="Hands-on collaboration on products that matter."
      />

      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px timeline-path"
          aria-hidden="true"
        />

        <motion.article
          className="relative pl-10 md:pl-14"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="timeline-node absolute left-0 top-6" aria-hidden="true">
            <span className="timeline-node-core" />
            <span className="timeline-node-orbit" />
          </div>

          <div className="cosmic-card p-7 md:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-white">
                  {hyperLearning.name}
                </h3>
                <p className="font-secondary text-cosmic-blue/90 text-sm mt-1">
                  {hyperLearning.role}
                </p>
              </div>
              <span className="font-mono text-[11px] text-white/30 tracking-wide">
                {hyperLearning.period}
              </span>
            </div>

            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
              {hyperLearning.overview}
            </p>

            <ul className="space-y-2.5 mb-6">
              {hyperLearning.experienceFocus.map((item) => (
                <li key={item} className="font-body text-white/45 text-sm flex gap-3 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-cosmic-violet/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {hyperLearning.technologies.map((t) => (
                <span key={t} className="skill-tag text-xs py-1 px-2.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
