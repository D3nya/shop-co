import { CartPreview } from "@/entities/cart";
import { UserPreview } from "@/entities/user";
import { classNames } from "@/shared/utils/classNames";
import React from "react";

interface ActionsProps {
  className?: string;
}

export const Actions: React.FC<ActionsProps> = ({ className }) => {
  return (
    <div className={classNames(className, "flex gap-3.5")}>
      <CartPreview />
      <UserPreview />
    </div>
  );
};
