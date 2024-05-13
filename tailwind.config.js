/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      sm: { max: "500px" },
    },
    extend: {},
  },
  plugins: [],
};
