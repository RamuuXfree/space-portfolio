import { createContext, useContext, type ReactNode } from 'react';
import { useSectionAtmosphere } from '../hooks/useSectionAtmosphere';
import type { SectionId } from '../data/sectionAtmosphere';

interface CosmicAtmosphereContextValue {
  activeSection: SectionId;
  scrollProgress: number;
}

const CosmicAtmosphereContext = createContext<CosmicAtmosphereContextValue | null>(null);

export function CosmicAtmosphereProvider({ children }: { children: ReactNode }) {
  const { activeSection, scrollProgress } = useSectionAtmosphere();
  return (
    <CosmicAtmosphereContext.Provider value={{ activeSection, scrollProgress }}>
      {children}
    </CosmicAtmosphereContext.Provider>
  );
}

export function useCosmicAtmosphere() {
  const ctx = useContext(CosmicAtmosphereContext);
  if (!ctx) throw new Error('useCosmicAtmosphere must be used within CosmicAtmosphereProvider');
  return ctx;
}
