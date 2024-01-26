/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d3557",
        secondary: "#5175fb",
      },
      backgroundColor: {
        primary: "#1d3557",
        secondary: "#5175fb",
        hoverPrimary: "#1d3557",
        hoverSecondary: "#2c53dc",
      },
      borderColor: {
        primary: "#5175fb",
      },
    },
  },
  plugins: [],
};
