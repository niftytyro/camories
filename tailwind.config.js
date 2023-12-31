const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs", "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ivory: "#F9F6F3",
        biege: "#A3826C",
        gray: "#666666",
        sacramento: "#001C0E",
        white: "#FCFCFC",
        black: "#090909",
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
};
