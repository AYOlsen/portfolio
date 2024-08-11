/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['YourSansFont', 'Arial', 'sans-serif'],
        serif: ['YourSerifFont', 'Times New Roman', 'serif'],
        mono: ['YourMonoFont', 'Courier New', 'monospace'],
      },
      colors: {
        // Voeg hier je aangepaste kleuren toe
        primary: '#FF5733',
        secondary: '#3399FF',
        lightGreen: '#606C38',
        background: '#f7f0e7',

        green: {
          200: '#3E4532',
          300: '#586247',
          400: '#727F5C',
          500: '#8C9A74',
          600: '#A5B092',
          700: '#BDC5AF',
          800: '#D5DBCD',
          900: '#EEF0EA',
        },

        brown: {
          200: '#5C411F',
          300: '#865F2D',
          400: '#A87738',
          500: '#C4914F',
          600: '#D1A975',
          700: '#DEC19C',
          800: '#EBD9C2',
          900: '#F7F0E7',
        },
      },
    },
  },
  plugins: [],
}