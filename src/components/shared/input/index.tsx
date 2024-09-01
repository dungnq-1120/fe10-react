import { cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";

interface PropsInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xl" | "xxl";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  trimOnBlur?: boolean;
  fullWidth?: boolean;
  isValid?: boolean;
}

const variantsStylesInput = cva(
  [
    // normal
    "outline-none border-2 border-solid pl-2",
    // placeholder
    "",
    // hover
    "",
    // disabled
    "",
  ],
  {
    variants: {
      size: {
        xl: "w-24 h-8",
        xxl: "w-40 h-10",
        large: "w-56 h-12",
      },
      fullWidth: {
        true: "w-full",
      },
      isValid: {
        true: "",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  }
);

export const Input = forwardRef<HTMLInputElement, PropsInput>(
  (
    { fullWidth, className: classNameProps, trimOnBlur, onBlur, size, ...rest },
    ref
  ) => {
    const classStyles = variantsStylesInput({
      fullWidth,
      size,
      className: classNameProps,
    });

    // const handleBlur = () => {
    //   if (trimOnBlur) {
    //     e.target.value = (e.target.value || "").trim();
    //   }

    //   onBlur?.(e);
    // };

    return (
      <div>
        {/* {startIcon} */}
        <input
          {...rest}
          ref={ref}
          // onBlur={handleBlur}
          className={`${classStyles} ${classNameProps}`}
        />
        {/* {startIcon} */}
      </div>
    );
  }
);
