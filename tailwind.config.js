/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      margin: {
        "main-x": "margin-left: 10px; margin-right: 10px;" 
      },
      backgroundImage: {
        "default-img": "url('./src/assets/images/default-wp.jpg')"
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

