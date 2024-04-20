import { twMerge } from "tailwind-merge";
import {
  primary as primaryStyles,
  secondary as secondaryStyles,
} from "./Button.styles";

// import { primary as primaryStyles, secondary as secondaryStyles } from "@/components/button/Button.styles";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const classes = [];
  const mode = primary ? primaryStyles : secondaryStyles;
  classes.push(mode);
  if (size === "small") {
    classes.push("text-sm");
  }
  if (size === "medium") {
    classes.push("text-base");
  }
  if (size === "large") {
    classes.push("text-xl");
  }

  return (
    <button type="button" className={twMerge(classes)} {...props}>
      {primary ? "Primary" : "Secondary"} {label}: {size}
    </button>
  );
};
