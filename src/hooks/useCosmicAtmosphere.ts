import { useContext } from 'react';
import { CosmicAtmosphereContext } from '../context/atmosphereContext';

export function useCosmicAtmosphere() {
  const ctx = useContext(CosmicAtmosphereContext);
  if (!ctx) throw new Error('useCosmicAtmosphere must be used within CosmicAtmosphereProvider');
  return ctx;
}
