/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6371AA",
        secondary: "#E6E7EF",
        accent: {
          DEFAULT: "#deb948",
          light: "#e5c76d",
        },
        "item-bg": "#CCCFE0",
        "item-darker": "#b8baca",
        "item-focus": "#8f919d",
      },
    },
  },
  plugins: [],
};
