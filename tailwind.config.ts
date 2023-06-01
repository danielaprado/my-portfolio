import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#1D1918",
        primary: { DEFAULT: "#FEF08A" },
        secondary: { DEFAULT: "#DD5E32" },
        tertiary: { DEFAULT: "#DADADA" },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".custom-tertiary-stroke": {
          "-webkit-text-stroke": " 1px #dadada",
        },
        ".custom-secondary-stroke": {
          "-webkit-text-stroke": " 1px #dd5e32",
        },
      });
    }),
  ],
} satisfies Config;
