/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'windy-dark': '#0A0E1A',
        'windy-gray': '#131B2E',
        'windy-amber': '#F59E0B',
        'windy-gold': '#D97706',
        'windy-teal': '#14B8A6',
        'windy-cyan': '#06B6D4',
        'windy-blue': '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
