/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
        display: ["Oswald", "sans-serif"],
        cursive: ["Brush Script MT", "Comic Sans MS", "Apple Chancery", "cursive"],
      },
      colors: {
        brand: {
          red: "#FF0000",
          darkRed: "#B22222",
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
