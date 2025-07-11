/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#002DA5',
          0: '#FFFFFF',
          20: '#ccd5ed',
          40: '#99abdb',
          60: '#6681c9',
          70: '#4d6cc0',
          80: '#3357b7',
          90: '#1a42ae',
          100: '#002DA5',
        },
        'secondary': {
          DEFAULT: '#F5C545',
          0: '#FFFFFF',
          20: '#fdf3da',
          40: '#fbe8b5',
          60: '#f9dc8f',
          80: '#f7d16a',
          'dark-80': '#ffa66b',
          'dark-90': '#ff9b59',
          'dark': '#ff8046',
          'main': '#F5C545',
        },
        'neutral': {
          0: '#ffffff',
          20: '#f8f9fa',
          40: '#D4DAE2',
          60: '#A9B5C6',
          70: '#94A3B8',
          80: '#5E6977',
          90: '#292E36',
          100: '#0E1116',
          500: '#222B45',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}