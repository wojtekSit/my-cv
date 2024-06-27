import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00abb6",
          "secondary": "#7b8f00",
          "accent": "#688400",
          "neutral": "#1b0b00",
          "base-100": "#272a25",
          "info": "#00c5ff",
          "success": "#39ed56",
          "warning": "#e79700",
          "error": "#ff4b75",
        },
      }
    ]
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
