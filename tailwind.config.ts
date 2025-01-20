import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0E16", 
        white: "#FFFFFF",
        gray: "#B9B9B9",
        dimWhite: "#E1E5E5",
        blue: "#5FB2F7",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
