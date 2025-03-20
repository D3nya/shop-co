import SearchSvg from "@/shared/assets/icons/search.svg";
import { Modal } from "@/shared/ui/Modal";
import { classNames } from "@/shared/utils/classNames";
import React, { useState } from "react";
import { SearchInput } from "./SearchInput";

interface SearchProps {
  className?: string;
}

export const Search: React.FC<SearchProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Mobile */}
      <div className={classNames("flex items-center xl:hidden", className)}>
        <button type="button" title="Open search modal" onClick={openModal} className="hover:opacity-60 transition-opacity">
          <img src={SearchSvg} alt="Search Icon" className="w-6 h-6" />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} position="start">
          <SearchInput placeholder="Search..." className="mt-4" />
        </Modal>
      </div>

      {/* Desktop */}
      <div className={classNames(className, "hidden xl:block")}>
        <SearchInput placeholder="Search for products..." />
      </div>
    </>
  );
};
