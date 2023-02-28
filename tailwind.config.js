const colors = require('tailwindcss/colors')

const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
      },
      fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
