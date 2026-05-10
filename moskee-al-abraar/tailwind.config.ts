import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#DFC27A",
          dark: "#A8872A",
          premium: "#BF953F",
        },
        emerald: {
          950: "#022c22",
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        arabic: ["var(--font-amiri)", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #DFC27A 0%, #C9A84C 40%, #A8872A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
