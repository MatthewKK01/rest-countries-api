/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        alabaster: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#fefefe",
          300: "#fdfdfd",
          400: "#fcfcfc",
          500: "#FAFAFA",
          600: "#e1e1e1",
          700: "#bcbcbc",
          800: "#969696",
          900: "#717171",
          950: "#3f3f3f",
        },
        tuna: {
          50: "#F0F4F5",
          100: "#E4EBED",
          200: "#BECBD1",
          300: "#9AACB5",
          400: "#5C6F7D",
          500: "#2B3844",
          600: "#23303D",
          700: "#182433",
          800: "#101A29",
          900: "#09111F",
          950: "#040914",
        },
      },
      boxShadow: {
        alabama: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        backButton: " 0px 0px 7px 0px rgba(0, 0, 0, 0.29)",
        dark_mode: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
