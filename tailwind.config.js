/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'krinkesdecor': ['KrinkesDecor','serif'],
        'krinkesregular': ['KrinkesRegular','serif'],
        'fira': ['Fira', 'sans'],
        'athletic':['Athletic', 'serif'],
        'amazon': ['Amazon','sans'],
        'bebasneue' : ['BebasNeue', 'sans'],
        'bebasneuebold' : ['BebasNeueBold', 'sans']
      }
    },
  },
  plugins: [],
}

