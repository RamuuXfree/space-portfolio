import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function AmbientLighting() {
  const reduced = useReducedMotion();

  return (
    <div
      className={`ambient-lighting absolute inset-0 pointer-events-none overflow-hidden ${reduced ? '' : 'ambient-lighting--live'}`}
      aria-hidden="true"
    />
  );
}
