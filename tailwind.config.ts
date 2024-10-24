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
        main: '#5ae9e4'
      },
      fontSize: {
        sm: '12px',
        base: '16px',
        lg: '24px',
        xl: '32px',
      }
    },
  },
  plugins: [],
};
export default config;
