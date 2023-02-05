/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx}", "./src/**/*.{html,js,jsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors:{
        'primary': '#4f46e5'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
