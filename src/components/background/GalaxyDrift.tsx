import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function GalaxyDrift() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div className="galaxy-drift absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="galaxy-drift-arm" />
      <div className="galaxy-drift-haze" />
    </div>
  );
}
