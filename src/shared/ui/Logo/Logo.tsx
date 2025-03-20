import { ROUTES } from "@/shared/config/router/routes";
import { classNames } from "@/shared/utils/classNames";
import React from "react";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={classNames(className, "block")} to={ROUTES.appRoute}>
      <h1 className="font-bold font-integral text-2xl xl:text-4xl uppercase">Shop.co</h1>
    </Link>
  );
};
