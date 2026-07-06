import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function SectionVoidOverlay() {
  const reduced = useReducedMotion();

  return (
    <div
      className={`section-void-overlay absolute inset-0 pointer-events-none ${reduced ? '' : 'section-void-overlay--live'}`}
      aria-hidden="true"
    />
  );
}
