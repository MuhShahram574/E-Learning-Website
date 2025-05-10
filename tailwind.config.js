/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    keyframes: {
      "slide-left": {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      "slide-right": {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      "slide-left": "slide-left 2s forwards", // Adjust duration as needed
      "slide-right": "slide-right 10s forwards", // Adjust duration as needed
    },
    extend: {
      backgroundColor: {
        mainbgColor: "#F7F7F8",
        customWhite: "#F1F1F3",
        CustomOrange: "#FF9500",
        CustomOrangesecondary: "#eb9233",
        lightCustomOrange: "#FFF4E5",
      },
      colors: {
        customWhite: "#F1F1F3",
        darkCustomGrey: "#262626",
        mediumCustomGrey: "#333",
        lightCustomGrey: "#4C4C4D",
        lightCustomOrange: "#FFF4E5",
        CustomOrange: "#FF9500",
      },

      fontFamily: {
        "Be-Vietnam-Pro": "Be Vietnam Pro",
      },
      screens: {
        "3xl": "1920px",
      },
      grid: {
        "custom-col-3": "repeat(3,1fr)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scroll-animate": {
          animationTimeline: "view()",
          animationRange: "entry 0% cover 40%",
        },
      };

      // Add utilities with responsive and hover variants
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
