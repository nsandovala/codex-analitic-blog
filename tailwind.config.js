/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A1E", // Fondo oscuro elegante
        primary: "#FFAC15", // Amarillo vibrante
        secondary: "#3B80FF", // Azul para detalles
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
