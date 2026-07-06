import { useEffect, useRef, useState, useCallback } from 'react';
import {
  SECTION_IDS,
  type SectionId,
  type SectionAtmosphere,
  sectionAtmospheres,
  blendAtmospheres,
} from '../data/sectionAtmosphere';

function applyCosmicCssVars(atmosphere: SectionAtmosphere, scrollProgress: number) {
  const root = document.querySelector('.global-cosmos');
  if (!root) return;
  const el = root as HTMLElement;
  const [pr, pg, pb] = atmosphere.nebulaPrimary;
  const [sr, sg, sb] = atmosphere.nebulaSecondary;
  el.style.setProperty('--nebula-pr', String(pr));
  el.style.setProperty('--nebula-pg', String(pg));
  el.style.setProperty('--nebula-pb', String(pb));
  el.style.setProperty('--nebula-sr', String(sr));
  el.style.setProperty('--nebula-sg', String(sg));
  el.style.setProperty('--nebula-sb', String(sb));
  el.style.setProperty('--nebula-intensity', String(atmosphere.nebulaIntensity));
  el.style.setProperty('--galaxy-hue', String(atmosphere.galaxyHue));
  el.style.setProperty('--orbit-speed', String(atmosphere.orbitSpeed));
  el.style.setProperty('--star-drift', String(atmosphere.starDrift));
  el.style.setProperty('--dust-speed', String(atmosphere.dustSpeed));
  el.style.setProperty('--nebula-parallax', `${scrollProgress * -55}px`);
}

export function useSectionAtmosphere() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const ratiosRef = useRef<Partial<Record<SectionId, number>>>({});
  const activeRef = useRef<SectionId>('home');
  const lastProgressRef = useRef(0);
  const rafRef = useRef(0);

  const computeBlend = useCallback((scrollTop: number, viewportH: number) => {
    const anchor = scrollTop + viewportH * 0.38;
    let idx = 0;
    let progress = 0;

    for (let i = 0; i < SECTION_IDS.length; i++) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (!el) continue;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (anchor >= top && anchor < top + height) {
        idx = i;
        progress = (anchor - top) / height;
        break;
      }
      if (anchor >= top + height) idx = i;
    }

    const currentId = SECTION_IDS[idx];
    const nextId = SECTION_IDS[Math.min(idx + 1, SECTION_IDS.length - 1)];
    return blendAtmospheres(sectionAtmospheres[currentId], sectionAtmospheres[nextId], progress);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let retryId = 0;
    let ticking = false;

    const runUpdate = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const docHeight = doc.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      const atmosphere = computeBlend(scrollTop, window.innerHeight);
      applyCosmicCssVars(atmosphere, progress);

      if (Math.abs(progress - lastProgressRef.current) > 0.002) {
        lastProgressRef.current = progress;
        setScrollProgress(progress);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(runUpdate);
    };

    const setupObserver = () => {
      const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      if (elements.length === 0) {
        retryId = window.setTimeout(setupObserver, 150);
        return;
      }

      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratiosRef.current[entry.target.id as SectionId] = entry.intersectionRatio;
          });

          let best: SectionId = 'home';
          let bestRatio = 0;
          for (const id of SECTION_IDS) {
            const ratio = ratiosRef.current[id] ?? 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = id;
            }
          }
          if (bestRatio > 0 && best !== activeRef.current) {
            activeRef.current = best;
            setActiveSection(best);
          }
        },
        { threshold: [0, 0.25, 0.5, 0.75], rootMargin: '-18% 0px -32% 0px' },
      );

      elements.forEach((el) => observer!.observe(el));
      runUpdate();
    };

    setupObserver();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      clearTimeout(retryId);
      cancelAnimationFrame(rafRef.current);
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [computeBlend]);

  return { activeSection, scrollProgress };
}
