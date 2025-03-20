import UserSvg from "@/shared/assets/icons/user.svg";
import React from "react";
import { Link } from "react-router";

interface UserPreviewProps {
  className?: string;
}

export const UserPreview: React.FC<UserPreviewProps> = ({ className }) => {
  return (
    <Link className={className} to="/">
      <img src={UserSvg} alt="User Icon" className="w-6 h-6 hover:opacity-60 transition-opacity" />
    </Link>
  );
};
