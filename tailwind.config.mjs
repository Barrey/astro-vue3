/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'neo-yellow': '#FFFF00',
        'neo-pink': '#FF69B4',
        'neo-blue': '#1E90FF',
      },
    },
  },
  plugins: [],
}