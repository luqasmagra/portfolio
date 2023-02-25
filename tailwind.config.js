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
      },
      animation: {
        scale: "scale 4s ease-in-out infinite",
        transform: "transform 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
