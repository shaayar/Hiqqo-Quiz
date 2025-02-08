/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#DD88CF",
        secondary: "#FFD95F",
        btnColor: "#6E8E59",
        btnHover: "#CAE0BC",
      },
    },
  },
  plugins: [],
};
