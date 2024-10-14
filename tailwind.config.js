/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./page/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        bluey:"#64CCC5",
        lightbluey:"#DAFFFB"
      },
      fontFamily: {
        inter : ["Inter", "sans-serif"],
        poppins : ["poppins","sans-serif"],
    },
  },
},
  plugins: [],
}

