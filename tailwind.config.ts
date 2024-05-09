import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // // white200 for
        // lightMode: "#fafafa",
        // // black200 for
        // darkMode: "#1E1E1E",
        // // black100 for
        // darkMode100: "#121212",
        // // grey100 for
        // veryDarkGray: "#292929",
        // // blue100 for
        // veryBlue: "#005691",
        // // blue200 for
        // darkModeBlue: "#639AB4",
        // // white100 for
        // greyWhite: "#FFFDFD",
        // // blue100 for
        // darkBlue: "#005691",
        // lightGrey: "#e5e5e5",

        // === new naming ===
        black100: "#121212",
        black200: "#1E1E1E",
        grey100: "#292929",
        white100: "#FFFDFD",
        white200: "#fafafa",
        blue100: "#005691",
        blue200: "#639AB4",
        blue300: "#0065AA",
        whiteBlur: "rgba(183, 211, 229, 0.2)",
        blackBlur: "rgba(63, 63, 63, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
export default config;
