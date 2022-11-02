/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        'gradiant-cyan': '#8ce8e0',
        'gradiant-purple': '#a77bf3'
      },
    },
  },
  plugins: [],
}
