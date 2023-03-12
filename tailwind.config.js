module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "658px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        softOrange: "hsl(35, 77%, 62%)",
        softRed: "hsl(5, 85% ,63%)",
        offWhite: "hsl(36, 100%, 99%)",
        grayishBlue: "hsl(233, 8%, 79%)",
        darkGrayishBlue: "hsl(236, 13%, 42%)",
        veryDarkBlue: "hsl(240, 100%, 5%)",
      },
      keyframes: {
        left: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)" },
        },
        right: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        rightToLeft: "left .4s ease-out",
        leftToRight: "right .5s ease-in",
      },
    },
  },
  plugins: [],
};
