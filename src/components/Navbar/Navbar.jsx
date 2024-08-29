import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ onSearch, onClearSearch }) => {
  return (
    <div className="drop-shadow flex items-center justify-between px-20 py-2 bg-white mb-8">
      <h2 className="text-xl font-medium text-black">Movies DB</h2>
      <SearchBar onSearch={onSearch} onClearSearch={onClearSearch} />
    </div>
  );
};

export default Navbar;
