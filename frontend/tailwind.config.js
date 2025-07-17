/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        29:"7.25rem",
        30:"8rem"
      }
    },
  },
  plugins: [],
}

