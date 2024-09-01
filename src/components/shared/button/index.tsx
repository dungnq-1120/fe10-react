import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  type?: "primary" | "secondary" | "error" | "warning";
  size?: "md" | "xl";
  fullWidth?: boolean;
};

const variantStyles = cva(["bg-blue-100 border px-5 py-2 text-white"], {
  variants: {
    type: {
      primary: "bg-blue-900 text-white",
      secondary: "bg-white-900 text-black-100",
      error: "bg-red-700 text-white",
      warning: "bg-red-100 text-white",
    },
    size: {
      md: "px-5 py-2",
      xl: "px-6 px-3",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    type: "primary",
    size: "md",
  },
});

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, type = "primary", size = "md", fullWidth, className, ...rest },
    ref
  ) => {
    const classStyles = variantStyles({
      type,
      fullWidth,
      size,
    });

    return (
      <button {...rest} ref={ref} className={classStyles}>
        {children}
      </button>
    );
  }
);

export default Button;
