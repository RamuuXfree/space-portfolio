import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socials = [
  { Icon: FiGithub, href: socialLinks.github, label: 'GitHub' },
  { Icon: FiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { Icon: FiMail, href: socialLinks.email, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.04] py-10">
      <div className="container-custom relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-secondary text-xs text-white/25">
          © {new Date().getFullYear()} {personalInfo.fullName}
        </p>

        <div className="flex gap-2">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 rounded-lg text-white/30 hover:text-white/70 transition-colors"
              whileHover={{ y: -2 }}
            >
              <s.Icon size={15} />
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 rounded-lg text-white/25 hover:text-white/60 transition-colors"
          whileHover={{ y: -2 }}
          aria-label="Back to top"
        >
          <ArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  );
}
