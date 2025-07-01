import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#017D03",
        secondary: "#053506",
        accent: "#6BD89F",
        light: "#E7FDE5",
        dark: "#001524",
        info: "#5fd9f2",
        success: "#20a788",
        warning: "#f5b14d",
        error: "#f62851",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use a popular sans-serif font
        serif: ["Merriweather", "serif"], // Use a popular serif font
        mono: ["Inconsolata", "monospace"], // Use a popular monospace font
      },
      fontSize: {
        base: "1rem", // Set a base font size for consistency
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
        p: "0.9rem",
      },
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3rem",
      },
      width: {
        fill: "fill-available",
      },
      animation: {
        "pulse-low": "pulse 2s cubic-bezier(0.8, 0.7, 0.9, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;


