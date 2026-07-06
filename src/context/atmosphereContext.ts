import { createContext } from 'react';
import type { SectionId } from '../data/sectionAtmosphere';

export interface CosmicAtmosphereContextValue {
  activeSection: SectionId;
  scrollProgress: number;
}

export const CosmicAtmosphereContext = createContext<CosmicAtmosphereContextValue | null>(null);
