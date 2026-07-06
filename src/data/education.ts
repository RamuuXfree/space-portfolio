export interface EducationEntry {
  id: string;
  institution: string;
  location: string;
  qualification: string;
  period: string;
  status?: 'completed' | 'pursuing';
}

export const educationEntries: EducationEntry[] = [
  {
    id: 'rps-10th',
    institution: 'Royal Public School',
    location: 'Unchehara, Satna, Madhya Pradesh',
    qualification: 'Secondary Education (10th)',
    period: '2022',
    status: 'completed',
  },
  {
    id: 'rps-12th',
    institution: 'Royal Public School',
    location: 'Unchehara, Satna, Madhya Pradesh',
    qualification: 'Higher Secondary (12th — PCM)',
    period: '2024',
    status: 'completed',
  },
  {
    id: 'sirt-btech',
    institution: 'Sagar Institute of Research & Technology (SIRT)',
    location: 'Bhopal, Madhya Pradesh',
    qualification: 'B.Tech in Artificial Intelligence & Machine Learning',
    period: '2024 — 2028',
    status: 'pursuing',
  },
];
