/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: '640px',
        md: '724px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {

      fontFamily: {
        sans: ['IBM Plex Sans'
        ],
      },
      colors: {
        'primary': {
          100: '#0b66c1',
          200: '#a64aff',
          300: '#ffb1ff',
        },
        'accent': {
          100: '#00E5FF',
          200: '#00829b',
        },
        'text': {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        'bg': {
          100: '#1A1A1A',
          200: '#292929',
          300: '#404040',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}