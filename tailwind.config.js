/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(50%)" },
          "90%": { transform: "translateX(100%)" },
        },
        flotar: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "70%": { filter: "brightness(1.5)" },
        },
        rotarrr: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fn1: {
          "0%": {
            opacity: 0.1,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        fn2: {
          "0%": {
            opacity: 0.9,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 9,
          },
        },
        colorChange: {
          "0%": {
            background: "#3b82f6",
          },
          "50%": {
            background: "linear-gradient(to top, #ffffff, #3b82f6, #3b82f6)",
          },
          "100%": {
            background: "#3b82f6",
          },
        },
        colorChange2: {
          "0%": {
            background: "#3b82f6",
          },
          "30%": {
            background: "linear-gradient(to top, #ffffff, #3b82f6, #3b82f6)",
          },
          "100%": {
            background: "#3b82f6",
          },
        },
        colorChange3: {
          "0%": {
            background: "#3b82f6",
          },
          "75%": {
            background: "linear-gradient(to top, #ffffff, #3b82f6, #3b82f6)",
          },
          "100%": {
            background: "#3b82f6",
          },
        },
      },
      animation: {
        moveRight: "moveRight 8s infinite linear",
        flotar: "flotar 8s infinite linear",
        rotarrr: "rotarrr 16s infinite linear",
        fn1: "fn1 1s infinite linear",
        fn2: "fn2 1s infinite linear",
        colorChange: "colorChange 4s infinite linear",
        colorChange2: "colorChange2 2s infinite linear",
        colorChange3: "colorChange3 3s infinite linear",
      },
    },
  },
  plugins: [],
};
