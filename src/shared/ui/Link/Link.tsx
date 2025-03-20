import { classNames } from "@/shared/utils/classNames";
import React from "react";
import { Link as RouterLink } from "react-router";

interface LinkProps {
  className?: string;
  to: string;
  children: React.ReactNode;
  theme?: "white" | "black";
}

export const Link: React.FC<LinkProps> = ({ className, to, children, theme = "white" }) => {
  return (
    <RouterLink
      to={to}
      className={classNames(
        className,
        "block text-center py-3 rounded-3xl text-base border border-black/10 hover:opacity-60 transition-opacity",
        theme === "white" ? "text-black bg-white" : "text-white bg-black",
      )}
    >
      {children}
    </RouterLink>
  );
};
