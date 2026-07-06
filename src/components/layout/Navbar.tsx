import { memo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { useCosmicAtmosphere } from '../../context/CosmicAtmosphereContext';

function scrollTo(href: string) {
  document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
}

function Navbar() {
  const { activeSection, scrollProgress } = useCosmicAtmosphere();
  const [open, setOpen] = useState(false);
  const navSolid = scrollProgress > 0.015 || activeSection !== 'home';
  const activeLabel = navLinks.find((l) => l.href === `#${activeSection}`)?.label ?? 'Home';

  return (
    <>
      <div className="nav-scroll-track fixed top-0 left-0 right-0 h-[2px] z-[10000] pointer-events-none">
        <div
          className="nav-scroll-fill h-full"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-[9999] px-4 pt-3 md:pt-4 pointer-events-none">
        <div className="mx-auto max-w-4xl pointer-events-auto nav-shell">
          <div className={`floating-nav nav-glass ${navSolid ? 'nav-glass--scrolled' : ''}`}>
            <div className="flex items-center justify-between h-12 md:h-14 px-4 md:px-6">
              <button
                onClick={() => scrollTo('#home')}
                className="flex items-center gap-3 group text-left"
              >
                <span className="nav-logo-mark" aria-hidden="true" />
                <span className="flex flex-col min-w-0">
                  <span className="font-heading text-sm text-white/90 group-hover:text-white transition-colors">
                    Ramoo
                  </span>
                  <span className="hidden sm:block font-secondary text-[9px] tracking-[0.18em] uppercase text-white/30 truncate">
                    {activeLabel}
                  </span>
                </span>
              </button>

              <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                {navLinks.map((link) => {
                  const id = link.href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 lg:hidden">
                <span className="font-secondary text-[9px] tracking-widest uppercase text-white/35">
                  {activeLabel}
                </span>
                <button
                  className="nav-menu-btn"
                  onClick={() => setOpen(!open)}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  aria-expanded={open}
                >
                  {open ? <X size={17} /> : <Menu size={17} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:hidden overflow-hidden border-t border-white/[0.06]"
                >
                  <div className="px-3 py-3 grid grid-cols-2 gap-1">
                    {navLinks.map((link) => {
                      const id = link.href.replace('#', '');
                      const isActive = activeSection === id;
                      return (
                        <button
                          key={link.href}
                          onClick={() => {
                            scrollTo(link.href);
                            setOpen(false);
                          }}
                          className={`text-left py-2.5 px-3 font-secondary text-xs rounded-xl transition-colors ${
                            isActive
                              ? 'text-white bg-white/[0.07] border border-white/[0.08]'
                              : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                          }`}
                        >
                          {link.label}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
}

export default memo(Navbar);
