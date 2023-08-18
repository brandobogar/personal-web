/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        instagram:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        glass:
          "linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        "my-bg-light": "#F8F4EA",
        "my-bg-dark": "#232321",
        "my-text-light": "#1F271B",
        "my-text-dark": "#F8F4EA",
        myBlack: "#232321",
        twitter: "#00acee",
        linkedin: "#0072b1",
        "my-primary-100": "#3D5A80",
        "my-primary-200": "#6b87b0",
        "my-primary-300": "#cee8ff",
        "my-accent-100": "#EE6C4D",
        "my-accent-200": "#7f0000",
        "my-text-100": "#1F271B",
        "my-text-200": "#464f42",
        "my-bg-100": "#F8F4EA",
        "my-bg-200": "#eeeae0",
        "my-bg-300": "#c5c1b8",
      },
      "3xl": "0 4px 30px rgba(0, 0, 0, 0.1)",
    },

    keyframes: {
      openNav: {
        "0%": { boxShadow: "0 12px 20px -12px rgba(0, 0, 0, 0)" },
        // "50%": { boxShadow: "0 12px 20px -12px rgba(0, 0, 0, 0.25)" },
        "100%": {
          boxShadow: "0 12px 20px -12px rgba(0, 0, 0, 0.35)",
        },
      },
      icon: {
        "0%": { transform: "rotate(0deg)" },
        "25%": { transform: "rotate(20deg)" },
        "50%": { transform: "rotate(-20deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
      float: {
        "0%": {
          dropShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
          transform: "translatey(0px)",
        },
        "50%": {
          dropShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
          transform: "translatey(-20px)",
        },
        "100%": {
          dropShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",

          transform: "translatey(0px)",
        },
      },
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "100%",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
    },
    animation: {
      opennav: "openNav 1s ease 0s 1 normal forwards",
      icon: "icon 3s ease  infinite  ",
      float: "float 3s ease-in-out infinite",
      typing: "typing 2s steps(30) infinite alternate, blink .7s infinite",
    },
    dropShadow: {
      "3xl": "5px 5px 4px #232323",
    },
    screens: {
      phone: { max: "479px" },
      tablet: { min: "480px", max: "1023px" },
      // => @media (min-width: 640px) { ... }

      laptop: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      // desktop: { min: "1025px" },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
