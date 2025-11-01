/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c1445',
        accent: '#d90074',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
