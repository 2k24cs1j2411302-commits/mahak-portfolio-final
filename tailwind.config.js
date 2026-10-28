/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf6f1',
        blush: '#f8e6ea',
        lavender: '#ece6f6',
        rose: { DEFAULT: '#b8677f', dark: '#9f5068', soft: '#f3dfe6' },
        ink: '#3f3648',
        muted: '#6e6478',
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -10px rgba(120, 85, 110, 0.18)',
      },
    },
  },
  plugins: [],
};
