import { Search } from "@/features/Search";
import { Logo } from "@/shared/ui/Logo";
import React from "react";
import { Actions } from "./Actions";
import { Navbar } from "./Navbar/Navbar";

export const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-100">
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
