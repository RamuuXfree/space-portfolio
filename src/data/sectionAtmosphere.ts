export const SECTION_IDS = [
  'home',
  'about',
  'education',
  'project',
  'skills',
  'experience',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export interface SectionAtmosphere {
  nebulaPrimary: [number, number, number];
  nebulaSecondary: [number, number, number];
  nebulaIntensity: number;
  nebulaSpeed: number;
  starDrift: number;
  orbitSpeed: number;
  dustSpeed: number;
  ambientPrimary: string;
  ambientSecondary: string;
  voidTint: string;
  galaxyHue: number;
}

export const sectionAtmospheres: Record<SectionId, SectionAtmosphere> = {
  home: {
    nebulaPrimary: [74, 123, 247],
    nebulaSecondary: [124, 106, 232],
    nebulaIntensity: 1,
    nebulaSpeed: 1,
    starDrift: 1,
    orbitSpeed: 1,
    dustSpeed: 1,
    ambientPrimary: 'rgba(74,123,247,0.08)',
    ambientSecondary: 'rgba(124,106,232,0.06)',
    voidTint: 'rgba(74,123,247,0.06)',
    galaxyHue: 220,
  },
  about: {
    nebulaPrimary: [90, 110, 220],
    nebulaSecondary: [110, 95, 210],
    nebulaIntensity: 0.92,
    nebulaSpeed: 1.05,
    starDrift: 1.1,
    orbitSpeed: 1.08,
    dustSpeed: 1.05,
    ambientPrimary: 'rgba(90,110,220,0.07)',
    ambientSecondary: 'rgba(110,95,210,0.05)',
    voidTint: 'rgba(90,110,220,0.05)',
    galaxyHue: 230,
  },
  education: {
    nebulaPrimary: [100, 95, 230],
    nebulaSecondary: [130, 100, 220],
    nebulaIntensity: 0.95,
    nebulaSpeed: 1.12,
    starDrift: 1.15,
    orbitSpeed: 1.15,
    dustSpeed: 1.1,
    ambientPrimary: 'rgba(100,95,230,0.075)',
    ambientSecondary: 'rgba(130,100,220,0.055)',
    voidTint: 'rgba(100,95,230,0.055)',
    galaxyHue: 245,
  },
  project: {
    nebulaPrimary: [60, 130, 255],
    nebulaSecondary: [80, 115, 240],
    nebulaIntensity: 1.08,
    nebulaSpeed: 1.2,
    starDrift: 1.25,
    orbitSpeed: 1.22,
    dustSpeed: 1.18,
    ambientPrimary: 'rgba(60,130,255,0.085)',
    ambientSecondary: 'rgba(80,115,240,0.06)',
    voidTint: 'rgba(60,130,255,0.065)',
    galaxyHue: 215,
  },
  skills: {
    nebulaPrimary: [70, 140, 230],
    nebulaSecondary: [95, 120, 215],
    nebulaIntensity: 1,
    nebulaSpeed: 1.15,
    starDrift: 1.2,
    orbitSpeed: 1.18,
    dustSpeed: 1.12,
    ambientPrimary: 'rgba(70,140,230,0.075)',
    ambientSecondary: 'rgba(95,120,215,0.05)',
    voidTint: 'rgba(70,140,230,0.05)',
    galaxyHue: 210,
  },
  experience: {
    nebulaPrimary: [85, 105, 235],
    nebulaSecondary: [140, 95, 225],
    nebulaIntensity: 0.98,
    nebulaSpeed: 1.1,
    starDrift: 1.12,
    orbitSpeed: 1.12,
    dustSpeed: 1.08,
    ambientPrimary: 'rgba(85,105,235,0.08)',
    ambientSecondary: 'rgba(140,95,225,0.055)',
    voidTint: 'rgba(85,105,235,0.055)',
    galaxyHue: 238,
  },
  contact: {
    nebulaPrimary: [95, 115, 250],
    nebulaSecondary: [150, 100, 235],
    nebulaIntensity: 1.05,
    nebulaSpeed: 1.08,
    starDrift: 1.08,
    orbitSpeed: 1.05,
    dustSpeed: 1.06,
    ambientPrimary: 'rgba(95,115,250,0.09)',
    ambientSecondary: 'rgba(150,100,235,0.065)',
    voidTint: 'rgba(95,115,250,0.06)',
    galaxyHue: 250,
  },
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpRgb(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

export function blendAtmospheres(from: SectionAtmosphere, to: SectionAtmosphere, t: number): SectionAtmosphere {
  const ease = t * t * (3 - 2 * t);
  return {
    nebulaPrimary: lerpRgb(from.nebulaPrimary, to.nebulaPrimary, ease),
    nebulaSecondary: lerpRgb(from.nebulaSecondary, to.nebulaSecondary, ease),
    nebulaIntensity: lerp(from.nebulaIntensity, to.nebulaIntensity, ease),
    nebulaSpeed: lerp(from.nebulaSpeed, to.nebulaSpeed, ease),
    starDrift: lerp(from.starDrift, to.starDrift, ease),
    orbitSpeed: lerp(from.orbitSpeed, to.orbitSpeed, ease),
    dustSpeed: lerp(from.dustSpeed, to.dustSpeed, ease),
    ambientPrimary: from.ambientPrimary,
    ambientSecondary: from.ambientSecondary,
    voidTint: from.voidTint,
    galaxyHue: lerp(from.galaxyHue, to.galaxyHue, ease),
  };
}

export function rgbaFromRgb([r, g, b]: [number, number, number], alpha: number) {
  return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${alpha})`;
}
