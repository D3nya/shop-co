import CartSvg from "@/shared/assets/icons/cart.svg";
import React from "react";
import { Link } from "react-router";

interface CartPreviewProps {
  className?: string;
}

export const CartPreview: React.FC<CartPreviewProps> = ({ className }) => {
  return (
    <Link className={className} to="/">
      <img src={CartSvg} alt="Cart Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
    </Link>
  );
};
