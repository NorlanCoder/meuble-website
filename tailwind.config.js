/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}", "./pages/**/*.html"],
  theme: { 
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
    },
  },
  plugins: [],
}
}