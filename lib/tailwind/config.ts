const content = [
  "./index.html",
  "./lib/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

const theme = {
  extend: {
    colors: {
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
    },
  },
};

const plugins: never[] = [];

export {
  content as defaultContent,
  theme as defaultTheme,
  plugins as defaultPlugins,
};
