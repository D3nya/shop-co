import React from "react";
import { classNames } from "../../../utils/classNames";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5";
  position?: "left" | "center";
}

export const Title: React.FC<TitleProps> = ({ className, type = "h1", children, position = "left" }) => {
  const Tag = type;

  return (
    <Tag
      className={classNames(
        className,
        "uppercase font-bold font-integral text-4xl/[34px] xl:text-6xl/[64px]",
        position === "center" ? "text-center" : "text-left"
      )}
    >
      {children}
    </Tag>
  );
};
