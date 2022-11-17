/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/main/resources/templates/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
  "@tailwindcss/forms",
  "@tailwindcss/typography",
  "@tailwindcss/aspect-ratio"
  ],
}