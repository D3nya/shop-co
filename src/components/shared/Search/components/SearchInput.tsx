import React, { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../../../../hooks/useDebounce";
import { classNames } from "../../../../utils/classNames";

import CrossSvg from "../../../../assets/icons/x.svg";
import SearchSvg from "../../../../assets/icons/search.svg";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className, placeholder }) => {
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 500);

  const handleSearch = useCallback(() => {
    console.log(query);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch();
    }
  }, [debouncedQuery, handleSearch]);

  const clearInput = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={classNames(className, "relative")}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="bg-accent-gray placeholder:opacity-60 placeholder:text-base py-3 pl-12 pr-10 rounded-3xl w-full focus:outline-none focus:ring-1"
      />
      <img
        src={SearchSvg}
        alt="Search Icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-6 h-6 opacity-60"
      />
      {query && (
        <button
          onClick={clearInput}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-100 hover:opacity-60 transition-opacity"
        >
          <img src={CrossSvg} alt="Cross Icon" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
