const content = [
  "./index.html",
  "./lib/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

const theme = {
  extend: {
    colors: {
      brand: {
        100: "#E1F5FE",
        200: "#B3E5FC",
        300: "#81D4FA",
        400: "#4FC3F7",
        500: "#29B6F6",
        600: "#03A9F4",
        700: "#039BE5",
        800: "#0288D1",
        900: "#01579B",
      },
      accent: {
        100: "#FF80AB",
        200: "#FF4081",
        300: "#F50057",
        400: "#C51162",
        500: "#880E4F",
        600: "#AD1457",
        700: "#C2185B",
        800: "#D81B60",
        900: "#E91E63",
      },
      text: {
        primary: "#FFF",
        secondary: "#757575",
        disabled: "#BDBDBD",
        hint: "#9E9E9E",
        inverted: "#000000", // Changed from white to black
      },
      supporting: {
        success: "#4CAF50", // Green
        error: "#F44336", // Red
        warning: "#FFC107", // Yellow
        info: "#2196F3", // Blue
      },
      neutral: {
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
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
