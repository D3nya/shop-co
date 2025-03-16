import type { ButtonHTMLAttributes } from "react";
import React from "react";
import { classNames } from "../../../utils/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "white" | "black";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  children,
  variant = "white",
  disabled = false,
  ...props
}) => {
  const baseStyles = "w-full py-3 rounded-3xl text-base font-medium border hover:opacity-60 transition-opacity";
  const variantStyles = {
    white: "bg-white text-black border-black/10",
    black: "bg-black text-white",
  };

  return (
    <button
      disabled={disabled}
      type={type}
      className={classNames(className, baseStyles, variantStyles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};
