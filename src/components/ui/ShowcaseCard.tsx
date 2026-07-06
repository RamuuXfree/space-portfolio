import type { ReactNode } from 'react';

interface ShowcaseCardProps {
  children: ReactNode;
  className?: string;
  glow?: string;
  featured?: boolean;
}

export default function ShowcaseCard({
  children,
  className = '',
  glow = '#4A7BF7',
  featured = false,
}: ShowcaseCardProps) {
  return (
    <div
      className={`showcase-card ${featured ? 'showcase-card--featured' : ''} ${className}`}
      style={{ '--card-glow': glow } as React.CSSProperties}
    >
      <div className="showcase-card-ambient" aria-hidden="true" />
      <div className="showcase-card-sheen" aria-hidden="true" />
      {children}
    </div>
  );
}
