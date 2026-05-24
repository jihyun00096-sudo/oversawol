import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color system - High-end minimal aesthetic
        "bg-primary": "#F5F5EF",
        "bg-secondary": "#EFEDE7",
        "bg-tertiary": "#F8F8F2",
        "text-primary": "#111111",
        "text-secondary": "#1B1B1B",
        "text-muted": "#6B6B6B",
        "charcoal": "#2B2F2A",
        "lime-primary": "#D8FF3E",
        "lime-secondary": "#CFFF3A",
        "lime-soft": "#B7F500",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        mono: ["Space Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["36px", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-xl": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-md": ["24px", { lineHeight: "1.3", letterSpacing: "0em" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0.005em" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0.005em" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "caption": ["12px", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      transitionDuration: {
        "400": "400ms",
        "700": "700ms",
      },
      backdropBlur: {
        "2xl": "24px",
        "3xl": "32px",
      },
    },
  },
  plugins: [],
};

export default config;
