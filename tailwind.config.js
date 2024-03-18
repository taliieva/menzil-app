/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(34, 187, 135, 1)',
        customGray: 'rgba(153, 153, 153, 1)',
        boldGray: 'rgba(63, 67, 68, 1)'
      },
    },
  },
  plugins: [],
}

