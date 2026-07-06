export const EDUCATION_JOURNEY_PATH =
  'M 18 7 C 18 22, 82 17, 82 36 C 82 54, 18 49, 18 66 C 18 83, 82 78, 82 93';

export interface MilestoneLayout {
  node: { x: number; y: number };
  cardAlign: 'left' | 'right';
  scrollPeak: number;
  scrollStart: number;
  scrollEnd: number;
}

export const milestoneLayouts: MilestoneLayout[] = [
  { node: { x: 18, y: 7 }, cardAlign: 'right', scrollStart: 0, scrollPeak: 0.22, scrollEnd: 0.42 },
  { node: { x: 82, y: 36 }, cardAlign: 'left', scrollStart: 0.28, scrollPeak: 0.52, scrollEnd: 0.72 },
  { node: { x: 82, y: 93 }, cardAlign: 'left', scrollStart: 0.58, scrollPeak: 0.82, scrollEnd: 1 },
];
