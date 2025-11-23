import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1B4B8C",
          light: "#EAF3FF",
          dark: "#0F2F5C",
          green: "#2BB673"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"]
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(27, 75, 140, 0.1) 1px, transparent 0)",
      }
    }
  },
  plugins: [],
};

export default config;
