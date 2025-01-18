/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#F8F9FC',
          light: '#FFFFFF',
          dark: '#E8ECF5',
        },
        primary: {
          light: '#432770',
          DEFAULT: '#2D1949',
          dark: '#1A0F2E',
        },
        accent: {
          coral: '#FF5A6E',
          teal: '#2DD4BF',
          gold: '#FBC264'
        },
      }
    },
  },
  plugins: [],
}