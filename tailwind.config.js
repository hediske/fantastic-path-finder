import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        traversedColor:"#E4E4E4",
        startColor:"#9FC011",
        headingColor:"#222222",
        endColor:"#8A0E0E",
        wallColor:"#3C3C3C",
        pathColor:"#D08B07",

        traversedColorDark:"#A58080",
        startColorDark:"#FFCC11",
        headingColorDark:"#222222",
        endColorDark:"#8A0E0E",
        wallColorDark:"#EDE1E1  ",
        pathColorDark:"#D08B07"
      },
      keyframes:{
        wall:{
          "0%":{transform:"scale(0.3)"},
          "100%":{transform:"scale(1)"}
        },
        traversed:{
          "0%":{
            transform:"scale(0.3)",
            backgroundColor:"#ff00ff80",
            borderRadius:"50%"
          },
          "50%":{
            backgroundColor:"#3b82f6bf",
          },
          "75%":{
            transform:"scale(1.3)",
            backgroundColor:"#ff00ffbf"},
          "100%":{
            transform:"scale(1)",
            backgroundColor:"#E4E4E4"
          }
        },
        traversedDark:{
          "0%":{
            transform:"scale(0.3)",
            backgroundColor:"#ff00ff80",
            borderRadius:"50%"
          },
          "50%":{
            backgroundColor:"#3b82f6bf",
          },
          "75%":{
            transform:"scale(1.3)",
            backgroundColor:"#ff00ffbf"},
          "100%":{
            transform:"scale(1)",
            backgroundColor:"#A58080"
          }
        },
        path:{
          "0%":{
            transform:"scale(0.3)",
            backgroundColor:"#e11d48bf",
            borderRadius:"50%"
          },
          "50%":{
            backgroundColor:"#ea580cbf",
          },
          "75%":{
            transform:"scale(1.2)",
            backgroundColor:"#fb953cbf"},
          "90%":{
            transform:"scale(0.8)",
            backgroundColor:"#D08B07"},
          "100%":{
            transform:"scale(1)",
          }
        }
      },
      animation:{
        path:"path 0.5s cubic-bezier(0, 0, 0.2,1) ",
        traversed:"traversed 1.5s cubic-bezier(0, 0, 0.2,1)",
        wall:"wall  0.3s cubic-bezier(0.4, 0, 0.2,1)",
        traversedDark:"traversedDark 1.5s cubic-bezier(0, 0, 0.2,1)",
      }
    },
  },
  plugins: [],
  darkMode:'selector'
}

