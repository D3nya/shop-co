import React from "react";
import { Link } from "react-router";
import CartSvg from "../../../assets/icons/cart.svg";
import UserSvg from "../../../assets/icons/user.svg";
import { classNames } from "../../../utils/classNames";

interface ActionsProps {
  className?: string;
}

export const Actions: React.FC<ActionsProps> = ({ className }) => {
  return (
    <div className={classNames(className, "flex gap-3.5")}>
      <Link to="/cart">
        <img src={CartSvg} alt="Cart Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
      </Link>
      <Link to="/user">
        <img src={UserSvg} alt="User Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
      </Link>
    </div>
  );
};
