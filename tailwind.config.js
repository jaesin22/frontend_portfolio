/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      ms: '600px',
      sm: '980px',
      md: '1024px',
      lg: '1280px',
      xl: '1600px',
    },
    fontFamily: {
      display: ['Oswald'],
      body: ['Open Sans'],
      main: ['AppleSDGothic'],
    },
  },
  plugins: [],
};
