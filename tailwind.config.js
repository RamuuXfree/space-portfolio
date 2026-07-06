/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#030508',
        'space-deep': '#050816',
        'cosmic-blue': '#4A7BF7',
        'cosmic-violet': '#7C6AE8',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        secondary: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cosmic': '0 0 40px rgba(74, 123, 247, 0.12)',
        'cosmic-lg': '0 0 80px rgba(74, 123, 247, 0.15)',
      },
    },
  },
  plugins: [],
};
