import React from "react";
import { classNames } from "../../../utils/classNames";

interface TopSellingProps {
  className?: string;
}

export const TopSelling: React.FC<TopSellingProps> = ({ className }) => {
  return <section className={classNames(className)}></section>;
};
