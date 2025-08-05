/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#6366F1",
        neonverde: "#00ff88",
        vermelhão: "#ff0000"
      },
    },
  },
  plugins: [],
}