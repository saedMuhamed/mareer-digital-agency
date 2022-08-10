const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      fontFamily: {
        LoveFebruary: ["LoveFebruary", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
        },
      },
      backgroundImage: {
        "bg-pattern": "url('/src/Assets/img/bg.png')",
        "bg-pattern2": "url('/src/Assets/img/dmb.jpg')",
        "bg-pattern3": "url('/src/Assets/img/100.png')",
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: [],
};
