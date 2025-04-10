import { Loader } from "@/shared/ui/Loader/ui/Loader";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface LoaderBlockProps {
  className?: string;
}

export const LoaderBlock: React.FC<LoaderBlockProps> = ({ className }) => {
  return (
    <div className={classNames(className, "flex justify-center items-center")}>
      <Loader className="w-full h-full block" />
    </div>
  );
};
