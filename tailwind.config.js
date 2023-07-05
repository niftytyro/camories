const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ivory: "#F9F6F3",
        biege: "#A3826C",
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
};
