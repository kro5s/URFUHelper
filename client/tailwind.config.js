/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      colors: {
        "primary-black": "#303030",
        "accent": "#FAA300"
      }
    },
  },
  plugins: [],
}