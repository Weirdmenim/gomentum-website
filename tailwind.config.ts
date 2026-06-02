import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1C1C2E",
        offblack: "#14141F",
        amber: "#F5A623",
        amberHover: "#FFB93D",
        amberActive: "#D88C13",
        teal: "#00C8A0",
        warm: "#FFF8EC",
        cream: "#FFF3D8",
        softgray: "#E6E6EE",
        textgray: "#BFC0CF",
        carddark: "#222235",
        cardmuted: "#2B2B3F",
        error: "#FFB4AB"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(245, 166, 35, 0.18), 0 24px 80px rgba(0,0,0,0.35)",
        teal: "0 0 0 1px rgba(0, 200, 160, 0.22), 0 16px 54px rgba(0, 200, 160, 0.08)"
      },
      borderRadius: {
        button: "14px",
        card: "24px",
        panel: "32px"
      },
      maxWidth: {
        site: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
