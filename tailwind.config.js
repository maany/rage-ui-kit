/** @type {import('tailwindcss').Config} */
import {
  defaultTheme,
  defaultContent,
  defaultPlugins,
} from "./lib/tailwind/config";
module.exports = {
  darkMode: ["class"],
  content: [...defaultContent],
  prefix: "",

  theme: {
    ...defaultTheme,
  },
  plugins: [defaultPlugins.map((plugin) => require(plugin))],
};
