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
        background: "#0a0e27",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#00d4ff",
          dark: "#00a8cc",
        },
        secondary: {
          DEFAULT: "#00ff88",
          dark: "#00cc6a",
        },
        dark: {
          DEFAULT: "#0a0e27",
          lighter: "#151b3d",
          darker: "#050711",
        },
      },
    },
  },
  plugins: [],
};
export default config;
