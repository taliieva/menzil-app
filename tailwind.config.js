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
        boldGray: 'rgba(63, 67, 68, 1)',
        bgColor: 'rgba(241, 253, 246, 1)', 
        textColor: 'rgba(103, 111, 125, 1)',
        hoverGreen: 'rgba(1, 132, 87, 1)',
        textGrayColor: 'rgba(126, 127, 128, 1)',
        dateColor: 'rgba(120, 133, 143, 1)',
        imageBgColor: 'rgba(237, 247, 241, 1)'
      },
    },
  },
  plugins: [],
}

