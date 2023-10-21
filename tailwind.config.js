/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        base: '75.625rem',
      },
      screens: {
        xxl: '90rem',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1D212E',
          border: '#ffffff2b',
          black: {
            200: '#EBEBEB',
            300: '#D2D3D6',
            400: '#A0A4AD',
            900: '#171B26',
          },
        },
      },
      spacing: {
        60: '3.75rem',
        120: '7.5rem',
      },
    },
  },
  plugins: [],
};
