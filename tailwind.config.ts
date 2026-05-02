import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#24302f",
        muted: "#687575",
        line: "#dfe8e4",
        paper: "#fffdfa",
        soft: "#f5f0e8",
        mint: "#cfe7dc",
        "mint-dark": "#326b5b",
        coral: "#e9856f",
        "coral-dark": "#bd5c49",
        gold: "#f4c56f"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(38, 54, 50, 0.13)",
        card: "0 12px 30px rgba(38, 54, 50, 0.07)"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "\"Microsoft YaHei\"",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
