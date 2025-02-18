/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-dark': '#212121',
        'gray-medium': '#2F2F2F',
        'gray-light-1': '#B4B4B4',
        'gray-light-2': '#B2B2B2',
        'black-muted': '#0D0D0D',
        'gray-light-muted': '#262931',
        'gray-dark-muted': '#212429',
        'neon-purple': '#9461fd',
        'neon-green': '#2cff05',
        'theme-dark-bg': '#121212',
      },
      screens: {
        xs: '320px',
      },
      fontFamily: {
        sans: [
          'Inter', // System font, widely available on most systems
          'Segoe UI', // Windows
          'Roboto', // Android & Google products
          'Helvetica Neue', // macOS
          'Arial', // Fallback for older systems
          'sans-serif', // Generic sans-serif
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
  ],
};
