/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.html"],
  theme: { 
    extend: {
      colors: {
        'orange' : '#FB923C',
      },
      backgroundImage: {
        'gallery1': "url('/src/assets/img-gallery1.svg')",
        'gallery2': "url('/src/assets/img-gallery2.svg')",
        'gallery3': "url('/src/assets/img-gallery3.svg')",
        'gallery4': "url('/src/assets/img-gallery4.svg')",
        'gallery5': "url('/src/assets/img-gallery5.svg')",
        'gallery6': "url('/src/assets/img-gallery6.svg')",
        
      }
    },
    
  },
  plugins: [],
}