/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      //   deepMarsRed: '#8B0000',
      // 'rusty-orange': '#A0522D',
      // 'martian-soil-orange': '#FFA500',
      //   indigoBlue: '#2E3842',
        'martian-red': '#FF4500',
        'cosmic-blue': '#000080',
      },
    },
  },
  plugins: [],
}
