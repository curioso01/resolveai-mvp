import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        panel: "var(--color-panel)",
        panelSoft: "var(--color-panel-soft)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)"
      },
      borderRadius: {
        xl2: "1rem"
      },
      boxShadow: {
        premium: "0 10px 40px rgba(30,118,255,0.15)"
      }
    }
  },
  plugins: []
};

export default config;
