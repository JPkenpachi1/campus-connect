/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#221e22",
        "primary-dark": "#3730A3",
        dark: "#0A0A1A",
        brand: "#221e22", // ← added color
      },
      fontFamily: {
        sans: ["Syne", "Inter", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};