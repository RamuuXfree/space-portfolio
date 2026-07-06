import { useEffect, useRef } from 'react';

export function useMousePositionRef() {
  const pos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX / window.innerWidth;
      pos.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return pos;
}
