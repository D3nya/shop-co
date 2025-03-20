import CartSvg from "@/shared/assets/icons/cart.svg";
import UserSvg from "@/shared/assets/icons/user.svg";
import { classNames } from "@/shared/utils/classNames";
import React from "react";
import { Link } from "react-router";

interface ActionsProps {
  className?: string;
}

export const Actions: React.FC<ActionsProps> = ({ className }) => {
  return (
    <div className={classNames(className, "flex gap-3.5")}>
      <Link to="/">
        <img src={CartSvg} alt="Cart Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
      </Link>
      <Link to="/">
        <img src={UserSvg} alt="User Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
      </Link>
    </div>
  );
};
