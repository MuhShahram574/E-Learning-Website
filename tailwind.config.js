/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        mainbgColor: "#F7F7F8",
        customWhite: "#F1F1F3",
        darkCustomOrange: "#FF9500",
      },
      colors: {
        customWhite: "#F1F1F3",
        darkCustomGrey: "#262626",
        mediumCustomGrey: "#333",
        lightCustomGrey: "#4C4C4D",
        lightCustomOrange: "#FFF4E5",
        darkCustomOrange: "#FF9500",
      },
      fontFamily: {
        "Be-Vietnam-Pro": "Be Vietnam Pro",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
