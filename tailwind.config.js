/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"',  ...defaultTheme.fontFamily.sans],
        'button': ['Chewy', ...defaultTheme.fontFamily.sans],
        },
      colors: {
        "btn-color-1": "#E4813A",
        "btn-color-1-hover": "#c76a2f",
        "btn-color-1-focus": "#c76a2f",
"header-color": "#F2F2F2",
        "btn-color-2": "#FBE2AC",
        "btn-color-2-hover": "#f8d3a0",
        "btn-color-2-focus": "#f8d3a0",

        "txt-1": "#F2F2F2",
        "txt-2": "#3C3C3C",
      },
    },
  },
};
