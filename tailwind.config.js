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
        'martian-soil-orange': '#FFA500',
        'martian-red': '#FF4500',
        'cosmic-blue': '#000080',
      },
    },
  },
  plugins: [],
}
