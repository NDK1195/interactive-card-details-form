/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-desktop": "url('/src/images/bg-main-desktop.png')",
        "main-mobile": "url('/src/images/bg-main-mobile.png')",
        "card-back": "url('/src/images/bg-card-back.png')",
        "card-front": "url('/src/images/bg-card-front.png')",
      },
      colors: {
        red: "hsl(0, 100%, 66%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
};
