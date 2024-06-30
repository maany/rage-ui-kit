const content = [
  "./index.html",
  "./lib/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

const theme = {
  extend: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      fadeInUp: {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "carla-spin": "spin 3s linear",
      fadeInUp: "fadeInUp 2s ease-in-out forwards",
    },
    fontFamily: {
      gluten: "Gluten",
    },
    colors: {
      black: "#000",
      white: "#fff",
      brand: {
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
      accent: {
        primary: "#f8fafc",
        secondary: "#757575",
        inverted: "#000000",
        success: "#065f46", // Green
        error: "#991b1b", // Red
        warning: "#ca8a04", // Yellow
        info: "#075985", // Blue
      },
      neutral: {
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      error: {
        100: "#ffe5e5",
        200: "#ffcccc",
        300: "#ff9999",
        400: "#ff6666",
        500: "#ef4444",
        600: "#e62626",
        700: "#cc1f1f",
        800: "#b31919",
        900: "#991313",
      },
    },
    spacing: {
      smallest: "0.125rem",
      smaller: "0.25rem",
      small: "0.5rem",
      medium: "1rem",
      large: "1.5rem",
      larger: "2rem",
      largest: "3rem",
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const plugins: any = ["tailwindcss-animate"];

export {
  content as defaultContent,
  theme as defaultTheme,
  plugins as defaultPlugins,
};
