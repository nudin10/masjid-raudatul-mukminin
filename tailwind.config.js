/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/components/*.vue"
  ],
  theme: {
    extend: {
      height: {
        "header-h": "'h-20'"
      },
      padding: {
        "header-p": "pt-20"
      },
      colors:{
        "white-translucent": "rgba(255, 255, 255, 0.6)"
      },
      margin: {
        "main-x": "margin-left: 10px; margin-right: 10px;" 
      },
      backgroundImage: {
        "default-img": "url('/src/assets/images/masjid-pagi.jpg')"
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

