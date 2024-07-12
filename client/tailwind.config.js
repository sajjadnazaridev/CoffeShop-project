/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#221518",
        secondary: "#54372B",
        accent: '#F7E1BC',
        bgDark: "#252525",
      },
      fontFamily: {
        DancingScript: ["Dancing Script", "sans-serif"],
        Leiko: ["Leiko", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};