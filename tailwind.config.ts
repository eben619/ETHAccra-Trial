import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        altone: ['var(--altone-font)', ...fontFamily.sans],
        altoneBold: ['var(--altone-bold-font)', ...fontFamily.sans],
        gilroy: ['var(--gilroy-font)', ...fontFamily.sans],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
