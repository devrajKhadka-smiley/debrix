/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1b1e',
          secondary: '#2c2d31',
          accent: '#3b82f6',
          text: {
            primary: '#ffffff',
            secondary: '#a1a1aa',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
} 