/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        traversedColor:"#40E0D0",
        startColor:"#FFCC11",
        headingColor:"#222222",
        endColor:"#8A0E0E",
        wallColor:"#7D8890",
        pathColor:"E6CC00"
      }
    },
  },
  plugins: [],
}

