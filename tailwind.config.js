/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        transform: {
          "0%, 100%": { transform: "scale(0.7)" },
          "50%": { transform: "scale(1.1)" },
        },
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        }
      },
      animation: {
        scale: "scale 4s ease-in-out infinite",
        transform: "transform 2s ease-in-out infinite",
        slide: 'slide 10s linear infinite'
      },
    },
  },
  plugins: [],
};
