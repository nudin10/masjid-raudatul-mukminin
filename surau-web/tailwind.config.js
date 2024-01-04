/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "default-bg-img" : "./src/assets/mosque_default.jpg"
      }
    },
  },
  plugins: [],
}

