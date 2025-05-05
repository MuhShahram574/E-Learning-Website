/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        customWhite: "#F1F1F3",
        darkCustomGrey: "#262626",
        mediumCustomGrey: "#333",
        lightCustomGrey: "#4C4C4D",
        lightCustomOrange: "#FFF4E5",
        darkCustomOrange: "#FF9500",
      },
    },
  },
  plugins: [],
};
