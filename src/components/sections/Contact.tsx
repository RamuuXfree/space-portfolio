import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Download } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import SectionHeader from '../ui/SectionHeader';
import ContactForm from './ContactForm';

const channels = [
  { label: 'GitHub', value: 'RamuuXfree', href: socialLinks.github, Icon: FiGithub },
  { label: 'LinkedIn', value: personalInfo.fullName, href: socialLinks.linkedin, Icon: FiLinkedin },
  { label: 'Email', value: personalInfo.email, href: socialLinks.email, Icon: FiMail },
];

const entrySpring = { type: 'spring' as const, stiffness: 90, damping: 22, mass: 0.85 };

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const hasResume = Boolean(socialLinks.resume);

  return (
    <section id="contact" className="section-padding container-custom" ref={ref}>
        <SectionHeader
          label="Contact"
          title="Start a conversation"
          description="Open to collaboration, feedback, and thoughtful conversations about product and code."
        />

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={entrySpring}
        >
          <div className="contact-glow-card p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...entrySpring, delay: 0.1 }}
              >
                <p className="section-label !mb-5">Reach Out</p>
                <div className="space-y-2">
                  {channels.map((channel, i) => (
                    <motion.a
                      key={channel.label}
                      href={channel.href}
                      target={channel.label === 'Email' ? undefined : '_blank'}
                      rel={channel.label === 'Email' ? undefined : 'noopener noreferrer'}
                      className="contact-channel group"
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <channel.Icon size={17} className="text-white/40 group-hover:text-cosmic-blue transition-colors" />
                      <div className="min-w-0">
                        <p className="font-secondary text-[10px] tracking-widest uppercase text-white/30">
                          {channel.label}
                        </p>
                        <p className="font-body text-sm text-white/80 group-hover:text-white transition-colors truncate">
                          {channel.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {hasResume && (
                  <a href={socialLinks.resume} className="btn-outline w-full justify-center gap-2 mt-6 text-sm">
                    <Download size={14} />
                    Resume
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...entrySpring, delay: 0.2 }}
              >
                <p className="section-label !mb-5">Connect With Me</p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
