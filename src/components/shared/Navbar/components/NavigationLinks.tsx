import React from "react";
import { NavLink } from "react-router";
import { classNames } from "../../../../utils/classNames";

const routes = [
  { id: 1, to: "/shop", text: "Shop" },
  { id: 2, to: "/on-sale", text: "On Sale" },
  { id: 3, to: "/new-arrivals", text: "New Arrivals" },
  { id: 4, to: "/brands", text: "Brands" },
];

interface NavigationLinksProps {
  className?: string;
  onClick?: () => void;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ className, onClick }) => {
  return (
    <ul className={classNames(className)}>
      {routes.map(route => (
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
