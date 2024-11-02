/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        formula: ['Formula1', 'sans-serif'],
      },
      colors: {
        'f1-red': '#e10600',
      },
    },
  },
  plugins: [],
};