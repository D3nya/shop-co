import { classNames } from "@/shared/utils/classNames";
import React from "react";
import { NavLink } from "react-router";

interface NavItem { id: number; to: string; text: string }

interface NavigationLinksProps {
  className?: string;
  onClick?: () => void;
  navItems: NavItem[];
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ className, onClick, navItems }) => {
  return (
    <ul className={classNames(className)}>
      {navItems.map(route => (
        <li key={route.id}>
          <NavLink
            to={route.to}
            className="text-base opacity-100 hover:opacity-60 transition-opacity"
            onClick={onClick}
          >
            {route.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
