import React from "react";
import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { Actions } from "../Actions";

export const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="container py-6 flex justify-between items-center gap-10">
        <div className="flex items-center gap-x-4 xl:gap-x-10">
          <Navbar className="xl:order-2" />
          <Logo className="xl:order-1" />
        </div>
        <div className="flex items-center gap-x-3 xl:grow">
          <Search className="xl:mr-7 xl:grow" />
          <Actions />
        </div>
      </div>
    </header>
  );
};
