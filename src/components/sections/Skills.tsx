import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';
import SectionHeader from '../ui/SectionHeader';
import SkillTag from '../ui/SkillTag';

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding container-custom" ref={ref}>
      <SectionHeader
        label="Skills"
        title="Technologies in practice"
        description="The stack behind my work on HyperLearningTech and ongoing development."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.id}
            className="cosmic-card p-6"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-heading text-base text-white/90 mb-5">{category.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, j) => (
                <SkillTag
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={i * 4 + j}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
