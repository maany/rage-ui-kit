import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../lib/tailwind/theme.css";
const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
      dark: { ...themes.dark, appBg: "black" },
      light: { ...themes.normal, appBg: "#f7fafc" },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
