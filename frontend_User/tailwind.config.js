/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xxs': '360px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px'
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
      colors: {
        secondary: '#143642',
        primary: '#0395d0',
        text: '#000',
        custom_white: '#fff',
        white: '#f6f6f6',
        dull: '#fff',
        grayText: 'd1d5db',
        lightPrimary: '#f8f9fa',
        darkPrimary: '#000',
        dullBlack: '#111',
        lightSecondary: '#f2f2f2',
        darkSecondary: '#000',
        darkText: '#000'
      },
      fontFamily: {
        poppins: ['Outfit', 'sans-serif'],
        dahlia: ['Dahlia'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(11, 11, 11, 0) 0%, rgba(10, 10, 10, 0.77) 48%, #0A0A0A 100%)',
        'custom-card-gradient': 'linear-gradient(0deg, rgba(11, 11, 11, 0) 0%, rgba(10, 10, 10, 0.77) 24%, #0A0A0A 100%)',
      },
      borderRadius: {
        '4xl': '40px',
        '5xl': '50px',
      },
    },
  },
  plugins: [],
}