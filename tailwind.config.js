/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/js//Pages/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '440px', // Custom breakpoint for 440px
      },
    },
  },
  plugins: [],
}