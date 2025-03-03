/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
    "./node_modules/primeng/**/*.{js,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};