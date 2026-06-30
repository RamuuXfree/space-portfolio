/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cosmic-900': '#050816',
        'cosmic-800': '#0B1120',
        'cosmic-700': '#111827',
        'cosmic-600': '#1E293B',
        'accent-cyan':   '#06B6D4',
        'accent-blue':   '#3B82F6',
        'accent-violet': '#8B5CF6',
        'accent-purple': '#A855F7',
        'accent-glow':   '#22D3EE',
      },
      fontFamily: {
        heading:   ['"Space Grotesk"', 'sans-serif'],
        secondary: ['Sora', 'sans-serif'],
        body:      ['Inter', 'sans-serif'],
        signature: ['"Cormorant Garamond"', 'serif'],
        button:    ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-cyan':   '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)',
        'glow-blue':   '0 0 20px rgba(59,130,246,0.5)',
        'glow-purple': '0 0 20px rgba(139,92,246,0.5)',
      },
    },
  },
  plugins: [],
}
