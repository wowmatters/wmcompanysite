import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wowred: "#f20a0d",
        wowblue: "#049bfb",
        wowlavender: "#66629a",
        wowtwilight: "#964269",
        "bg-night": "#0d3c5c",
        "font-night": "#F2F8F7",
        "bg-light": "#F2F8F7",
        "font-light": "#0d3c5c",
      },
    },
  },
  plugins: [],
} satisfies Config;
