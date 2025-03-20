import type { Ref } from "react";
import CrossSvg from "@/shared/assets/icons/x.svg";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref?: Ref<HTMLInputElement>;
  disabled?: boolean;
  icon?: string;
  onClear?: () => void;
  variant?: "white" | "accent";
}

export const Input: React.FC<InputProps> = ({
  icon,
  variant = "white",
  disabled = false,
  value,
  onClear,
  type = "text",
  className,
  ref,
  ...props
}) => {
  const baseStyles
    = "placeholder:opacity-60 placeholder:text-base py-3 rounded-3xl w-full focus:outline-none focus:ring-1";

  const variantStyles = {
    white: "bg-white",
    accent: "bg-accent-gray",
  };

  return (
    <div className={classNames(className, "relative")}>
      <input
        type={type}
        value={value}
        ref={ref}
        className={classNames(
          baseStyles,
          onClear ? "pr-10" : "pr-4",
          icon ? "pl-12" : "pl-4",
          variantStyles[variant],
          disabled ? "cursor-not-allowed" : "",
        )}
        {...props}
      />
      {icon && (
        <img
          src={icon}
          alt="Search Icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-6 h-6 opacity-40"
        />
      )}
      {onClear && value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-100 hover:opacity-60 transition-opacity"
        >
          <img src={CrossSvg} alt="Cross Icon" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
