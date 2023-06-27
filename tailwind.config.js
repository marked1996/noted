/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      ultraxs: "10px",
      xs: "14px",
      base: "16px",
      lg: "clamp(16px, 2.5vw, 18px)",
      xl: "clamp(20px, 2.75vw ,22px)",
      heading: "clamp(26px, 3vw, 32px)",
      title: "clamp(52px, 6vw, 76px)",
    },

    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        light: "#FBFBFB",
        gray: "#666666",
        hover: "#B1B1B1",
        dark: "#111111",
        border: "#CFCFCF",
        border_hero: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
