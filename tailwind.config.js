/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%' : {opacity: '0'},
          '100%' : {opacity : '1'}
        },
      },
      screens: {
        'table-sm': '640px',
        'table-md': '768px',
        'table-lg': '1024px'
      }
    },
    fontFamily:{
      PixelSans: ["Pixelify Sans", "Sans"]
    }
  },
  plugins: [],
}

