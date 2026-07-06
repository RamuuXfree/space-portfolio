import type { ReactNode } from 'react';
import { useSectionAtmosphere } from '../hooks/useSectionAtmosphere';
import { CosmicAtmosphereContext } from './atmosphereContext';

export function CosmicAtmosphereProvider({ children }: { children: ReactNode }) {
  const { activeSection, scrollProgress } = useSectionAtmosphere();
  return (
    <CosmicAtmosphereContext.Provider value={{ activeSection, scrollProgress }}>
      {children}
    </CosmicAtmosphereContext.Provider>
  );
}
