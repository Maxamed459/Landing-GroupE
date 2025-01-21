/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': "#3238f2",
        'secendary': "#6b7280",
      },
      fontFamily:{
        sans:["poppins"]
      }
    },
  },
  plugins: [],
}

