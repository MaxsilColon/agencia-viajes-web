import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#e7fbff",
          100: "#c8f4fb",
          300: "#6edce9",
          500: "#12b9d0",
          700: "#05758f",
          900: "#06304a",
        },
        palm: {
          50: "#edfbea",
          100: "#d7f5d0",
          500: "#16a34a",
          700: "#047333",
          900: "#073f24",
        },
        sun: {
          100: "#fff4bf",
          300: "#ffd233",
          500: "#ff9f0a",
          600: "#f97316",
        },
        ink: "#061a2f",
        sand: "#fff8ea",
      },
      boxShadow: {
        tropical: "0 18px 45px rgba(6, 48, 74, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
