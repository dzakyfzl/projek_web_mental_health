/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bluey: "#64CCC5",
        lightbluey: "#DAFFFB",
        ijotaik: "#04364A",
        ijoagakmuda: "#38A3A5",
        greenwhitey: "#CDE0C9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        pito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
