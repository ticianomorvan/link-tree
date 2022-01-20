const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral
      },
      fontFamily: {
        sans: ['Inter']
      }
    },
  },
  plugins: [],
}
