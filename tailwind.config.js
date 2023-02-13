/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        indigo: '#6366f1',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}