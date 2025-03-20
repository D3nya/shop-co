import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <span className={classNames(className, "loader")}></span>
  );
};
