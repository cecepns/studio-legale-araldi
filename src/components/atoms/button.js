import React from "react";
import clsx from "clsx";

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer";

  const variantStyles = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline:
      "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
