/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#c084fc' }, // morado
        },
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        typewriter: 'typewriter 3.5s steps(40) 1s 1 normal both',
        blink: 'blink 0.7s steps(1) infinite',
      },
      boxShadow: {
        glow: '0 0 10px #c084fc, 0 0 20px #c084fc',
      },
    },
  },
  plugins: [],
}
