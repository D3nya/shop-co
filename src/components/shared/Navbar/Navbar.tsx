import React, { useCallback, useRef, useState } from "react";
import { classNames } from "../../../utils/classNames";
import { NavigationLinks } from "./components/NavigationLinks";
import useClickOutside from "../../../hooks/useClickOutside";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [burger, setBurger] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleBurger = useCallback(() => {
    setBurger((prev) => !prev);
  }, []);

  useClickOutside(ref, () => setBurger(false));

  return (
    <>
      {/* Mobile */}
      <div className={classNames(className, "xl:hidden relative flex items-center")} ref={ref}>
        <button
          onClick={toggleBurger}
          type="button"
          title="Open navigation bar"
          className="inline-flex flex-col justify-center gap-y-1 group focus:outline-none"
        >
          <span
            className={classNames(
              "w-5 h-[2px] bg-black opacity-100 group-hover:opacity-60 transition-all rounded-full",
              burger && "rotate-45 translate-y-1.5"
            )}
          ></span>
          <span
            className={classNames(
              "w-5 h-[2px] bg-black transition-all rounded-full",
              burger ? "opacity-0" : "group-hover:opacity-60"
            )}
          ></span>
          <span
            className={classNames(
              "w-5 h-[2px] bg-black opacity-100 group-hover:opacity-60 transition-all rounded-full",
              burger && "-rotate-45 -translate-y-1.5"
            )}
          ></span>
        </button>

        <nav
          className={classNames(
            "absolute mt-1 top-full w-32 bg-white rounded-lg shadow-lg",
            burger ? "block" : "hidden"
          )}
        >
          <NavigationLinks className="flex flex-col items-center space-y-4 py-2" onClick={toggleBurger} />
        </nav>
      </div>

      {/* Desktop */}
      <nav className={classNames(className, "hidden xl:block")}>
        <NavigationLinks className="flex gap-6" />
      </nav>
    </>
  );
};
