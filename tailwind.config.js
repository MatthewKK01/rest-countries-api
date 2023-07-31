/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
      boxShadow: {
        alabama: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        backButton: " 0px 0px 7px 0px rgba(0, 0, 0, 0.29)",
      },
    },
  },
  plugins: [],
};
