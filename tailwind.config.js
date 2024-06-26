/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
     'olive': '#808000',
     'orange-soft': '#FFCC99',
     'rose-pale': '#FFE6E6',
    },
  },
  plugins: [],
};