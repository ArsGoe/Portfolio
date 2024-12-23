import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#283b48",
        footer: "#222831",
        text: "#6d86a0",
        box: "#1d2c3f"
      },
    },
  },
  plugins: [],
} satisfies Config;
