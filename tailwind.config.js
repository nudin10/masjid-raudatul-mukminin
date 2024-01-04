/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "default-img": "url('./src/assets/default-wp.jpg')"
      },
      fontFamily: {
        "default": ["Montserrat", "sans-serif"]
      },
      keyframes: {
        "text-glow": {
          "text-shadow": "0 0 10px white",
        }
      },
      animation: {
        "text-glow": "text-glow .5s infinite alternate",
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover']
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

