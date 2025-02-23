/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{jsx}'
  ],
  screens: {
    sm: '640px',
    md: '768px',
    tablet: '1024px',
    laptop: '1366px',
  },
  colors: {
    brand: {
      primary: '#8C5B3F',
      secondary: '#BF907E',
    },
    neutral: {
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#828282',
      600: '#4F4F4F',
      900: '#333333',
    },
    system: {
      300: '#00B031',
      warning: '#EBC812',
      danger:  '#FB3939',
    },
  },
  fontFamily: {
    sans: ['맑은 고딕', 'sans-serif'],
  },
}
