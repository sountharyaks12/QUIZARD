/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik']
      },
      backgroundColor: {
        darkpurple: ['#1A0033']
      },
      textColor:{
        darkpurple:['#1A0033']
      }
    },
    screens: {
      "xs": "100px",
      'sm': "500px",
      'md': "600px",
      'lg': "1024px",
      'xl': "1280px"
    }
  },
  plugins: [],
}

