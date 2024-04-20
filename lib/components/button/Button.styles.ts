import { twMerge } from "tailwind-merge";

const commonStyles = twMerge(`py-2 px-4 rounded-md`);
export const primary = twMerge(
  commonStyles,
  `bg-brand-500 text-text-primary font-bold`,
  `hover:bg-blue-700`,
);

export const secondary = twMerge(
  commonStyles,
  `bg-gray-500 text-white`,
  `hover:bg-gray-700`,
);
