/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        30: "repeat(30, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        18: "repeat(18, minmax(0, 1fr))",
      },
      fontFamily: {
        slabo: ['"Slabo 27px"', "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
