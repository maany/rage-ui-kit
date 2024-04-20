/** @type {import('tailwindcss').Config} */
import tailwindDefaults from "tailwindcss/defaultConfig";
import {
  defaultContent,
  defaultTheme,
  defaultPlugins,
} from "./lib/tailwind/config";
export default {
  content: [...defaultContent],
  theme: {
    ...tailwindDefaults.theme,
    ...defaultTheme,
  },
  plugins: [...defaultPlugins],
};
