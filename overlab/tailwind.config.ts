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
        'brand-black': '#111111',
        'brand-offwhite': '#D8D4CE',
        'brand-sage': '#7D8C7A',
        'brand-accent': '#c8d4a0',
        'brand-grey': '#888480',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
