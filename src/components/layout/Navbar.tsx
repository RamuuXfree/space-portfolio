import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const NAV = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Certificates',href: '#certificates' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Contact',     href: '#contact' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [active, setActive]       = useState('home');
  const [open, setOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(pct * 100);
      setScrolled(h.scrollTop > 30);

      // detect active section
      NAV.forEach(({ href }) => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120) setActive(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[9999]">
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #06B6D4, #3B82F6, #8B5CF6, #A855F7)',
            boxShadow: '0 0 8px rgba(6,182,212,0.8)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      <motion.header
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,8,22,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          paddingTop: '2px',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="container-custom flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl gradient-text">Alex</span>
            <span className="font-heading font-bold text-xl text-white/60">Nova</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.slice(0, 7).map(link => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-3 py-2 font-secondary text-xs tracking-wide transition-colors duration-200"
                  style={{ color: isActive ? '#06B6D4' : 'rgba(226,232,240,0.65)' }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(6,182,212,0.08)' }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <FiGithub size={17} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#0077B5] transition-colors">
              <FiLinkedin size={17} />
            </a>
            <a href="mailto:alex@nova.dev" className="text-white/40 hover:text-accent-cyan transition-colors">
              <FiMail size={17} />
            </a>
            <div className="w-px h-4 bg-white/10 mx-1" />
            <motion.a
              href="#"
              className="btn-primary text-white gap-2 text-xs"
              style={{ padding: '7px 18px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={12} />
              Resume
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ background: 'rgba(5,8,22,0.98)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              className="overflow-hidden lg:hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {NAV.map(link => (
                  <button
                    key={link.href}
                    onClick={() => { scrollTo(link.href); setOpen(false); }}
                    className="text-left py-2 px-3 font-secondary text-sm text-white/70 hover:text-accent-cyan hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-white/10 mt-2 flex gap-3 items-center">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white"><FiGithub size={18} /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#0077B5]"><FiLinkedin size={18} /></a>
                  <a href="mailto:alex@nova.dev" className="text-white/50 hover:text-accent-cyan"><FiMail size={18} /></a>
                  <a href="#" className="btn-primary text-white text-xs ml-auto gap-1" style={{ padding: '6px 14px' }}>
                    <Download size={11} /> Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
