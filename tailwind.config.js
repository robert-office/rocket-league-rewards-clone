const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rl: ["rl", "sans-serif"],
        fa: ["fa", "sans-serif"],
      },

      colors: {
        ...colors,
        primary: '#f88510',
        secundaryfont: '#f49155',
        hovered: '#1779ba',
        header: "#000b28",
        footer: '#000',
        faq: '#1f2033',
        reward: '#f49155'
      }
    },
  },
  plugins: [],
}
