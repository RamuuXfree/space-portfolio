import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const quickLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Open Source',  href: '#opensource' },
  { label: 'Contact',      href: '#contact' },
];

const socials = [
  { Icon: FiGithub,   href: 'https://github.com',    label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://linkedin.com',   label: 'LinkedIn' },
  { Icon: FiTwitter,  href: 'https://twitter.com',    label: 'Twitter' },
  { Icon: FiMail,     href: 'mailto:alex@nova.dev',   label: 'Email' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function BlackHoleDecor() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[300, 450, 600, 750].map((sz, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: sz, height: sz,
            border: `1px solid rgba(6,182,212,${0.07 - i * 0.015})`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 25 + i * 10, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      <div style={{
        width: 200, height: 200,
        background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(139,92,246,0.03) 50%, transparent 75%)',
        filter: 'blur(30px)',
      }} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-16"
      style={{
        background: 'linear-gradient(180deg, #050816 0%, #000 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <BlackHoleDecor />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-1">
              <span className="gradient-text">Alex</span>
              <span className="text-white/60"> Nova</span>
            </h3>
            <p className="font-secondary italic text-sm text-white/30 mb-3">AI Engineer & Full Stack Developer</p>
            <p className="font-body text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              Building the future at the intersection of AI and beautiful software. Let's create something extraordinary together.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass p-2.5 rounded-xl text-white/40 hover:text-white transition-all"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 15px rgba(6,182,212,0.35)' }}
                >
                  <s.Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-sm text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-secondary text-sm text-white/40 hover:text-accent-cyan transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-semibold text-sm text-white mb-4">Status</h4>
            <div className="glass-card p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="font-secondary text-sm text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="font-body text-white/40 text-xs leading-relaxed">
                Open to full-time roles, freelance projects & collaborations. Response within 24h.
              </p>
            </div>
            <div className="glass-card p-4">
              <p className="font-secondary text-xs text-white/30 mb-1">Based in</p>
              <p className="font-body text-sm text-white/70">New York, USA 🇺🇸</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-secondary text-xs text-white/30 flex items-center gap-1.5">
            © {new Date().getFullYear()} Alex Nova — Crafted with <Heart size={11} className="text-red-400" fill="currentColor" /> and cosmic energy
          </p>
          <div className="flex items-center gap-4">
            <span className="font-secondary text-xs text-white/20">React + TypeScript + Framer Motion</span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="glass p-2 rounded-xl text-white/40 hover:text-accent-cyan transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              title="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
