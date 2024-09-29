import type { Config } from "tailwindcss";

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
      colors: {
        primary: {
          "600": "#74D6BB",
          "700": "#3FC4C8",
          "800": "#44B7BA",
          "900": "#3AB2B7",
        },
        secondary: {
          "600": "#010748",
          "700": "#292D32",
          "800": "#22253E",
          "900": "#01052D",
        },
        gray: {
          "400": "#999999",
          "500": "#92929D",
          "600": "#BEBEBE",
          "700": "#8C8C8C",
          "800": "#707070",
          "900": "#535353",
        },
        blue: {
          "300": "#EFF6FF",
          "400": "#E2F1F7",
          "500": "#4594ES",
          "600": "#0045FF",
          "700": "#001789",
          "800": "#0266D6",
          "900": "#0466D6",
        },
        black: {
          "100": "#111111",
          "200": "#000000",
          "300": "#0F172A",
        },
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "3440px",
        "7xl": "3840px",
      },
      borderWidth: {
        "0.5": "0.5px",
        "0.2": "0.2px",
      },
      fontSize: {
        xs: [
          "0.5625rem",
          {
            lineHeight: "1.5",
          },
        ],
        sm: [
          "0.75rem",
          {
            lineHeight: "1.5",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
          },
        ],
        lg: [
          "1.333rem",
          {
            lineHeight: "1.5",
          },
        ],
        xl: [
          "1.777rem",
          {
            lineHeight: "1.5",
          },
        ],
        "2xl": [
          "2.369rem",
          {
            lineHeight: "1.15",
          },
        ],
        "2xl1": [
          "2.5rem",
          {
            lineHeight: "1.15",
          },
        ],
        "3xl": [
          "3.157rem",
          {
            lineHeight: "1.15",
          },
        ],
        "4xl": [
          "4.214375rem",
          {
            lineHeight: "1.15",
          },
        ],
        "5xl": [
          "5.61rem",
          {
            lineHeight: "1.15",
          },
        ],
        // "6xl": [
        //   "3.75rem",
        //   {
        //     lineHeight: "1.3",
        //   },
        // ],
        // "7xl": [
        //   "4.75rem",
        //   {
        //     lineHeight: "1.3",
        //   },
        // ],
      },
      boxShadow: {
        "3xl": "1px 2px 27px #CCCCDF66",
      },
    },
  },
  plugins: [],
};
export default config;
