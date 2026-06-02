import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08111F",
          900: "#101B2D",
          800: "#172538",
          700: "#26364C"
        },
        denim: {
          900: "#102947",
          800: "#173A63",
          700: "#1E4D7D",
          600: "#2B6498",
          100: "#E8F1F8"
        },
        stone: {
          950: "#151515",
          800: "#2D3136",
          700: "#424852",
          600: "#626A75",
          500: "#818995",
          300: "#CBD0D6",
          200: "#E4E7EA",
          100: "#F2F3F4",
          50: "#FAFAF8"
        },
        steel: "#73808F",
        cotton: "#F7F5F0",
        brass: "#B8A46E"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-display)", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(8, 17, 31, 0.08)",
        line: "0 0 0 1px rgba(16, 27, 45, 0.08)"
      },
      borderRadius: {
        panel: "8px"
      },
      maxWidth: {
        content: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
