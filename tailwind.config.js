/** @type {import('tailwindcss').Config} */

// To not lint this file, add to '.eslintignore'
// **/*.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.5)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      boxShadow: {
        green: '0px 2px 10px rgba(46,204,113,.5)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
