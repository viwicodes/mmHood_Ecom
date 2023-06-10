/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'mont' : ['Montserrat']
    },
    colors: {
      blue : 'var(--color-blue)',
      pink : 'var(--color-pink)',
      yellow : 'var(--color-yellow)',
      green : 'var(--color-green)',
      golden : 'var(--color-golden)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      text_black:'var(--color-text_black)',
      lavender:'var(--color-lavender)'
    }
  },
  plugins: [],
}
