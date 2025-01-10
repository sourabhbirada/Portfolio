/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"LeagueSpartan"', 'sans-serif'],
        merriweather: ['"Merriweather"', 'serif'],
        dmSerif: ['DM Serif Text', 'serif'],
      },
    },
  },
  plugins: [],
}

