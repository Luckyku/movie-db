import React, { useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const SearchBar = ({ onSearch, onClearSearch, closeMenu }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(query);
    } else {
      console.error("onSearch prop is not a function");
    }
  };
  const handleClear = () => {
    onClearSearch(),
    setQuery(''),
    closeMenu()
    
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="lg:w-80 w-full flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search here"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {query && (
        <FaXmark
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={handleClear}
        />
      )}
      <FaMagnifyingGlass
        className="text-xl text-slate-500 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />      
    </div>
  );
};

export default SearchBar;
