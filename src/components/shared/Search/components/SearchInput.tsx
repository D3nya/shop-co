import React, { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../../../../hooks/useDebounce";
import { Input } from "../../../ui/Input";

import SearchSvg from "../../../../assets/icons/search.svg";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className, placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearch = useCallback(() => {
    console.log(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (debouncedSearchValue) {
      handleSearch();
    }
  }, [debouncedSearchValue, handleSearch]);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Input
      className={className}
      ref={inputRef}
      variant="accent"
      icon={SearchSvg}
      onClear={handleClear}
      value={searchValue}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};
