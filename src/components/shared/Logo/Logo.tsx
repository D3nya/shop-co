import React from "react";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={className} to="/">
      <h1 className="font-bold font-integral text-2xl xl:text-4xl inline-flex">SHOP.CO</h1>
    </Link>
  );
};
