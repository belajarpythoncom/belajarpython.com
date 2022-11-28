/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./belajarpython_theme/**/*.{html,js}", "./docs/**/*.{html,js,md}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#3776ab',
          400: '#316997',
          500: '#2a5880',
          700: '#1d3f5b',
          800: '#1c3a55',
          900: '#1e2933'
        },
        secondary: { 
          400: '#ffdf76',
          500: '#fdd03f',
          700: '#e2b215', 
        }
      }
    },
  },
  plugins: [],
}
