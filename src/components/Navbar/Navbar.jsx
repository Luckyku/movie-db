import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = ({ onSearch, onClearSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="drop-shadow flex items-center justify-between lg:px-20 px-4 py-2 bg-white mb-8 relative">
      <h2 className="lg:text-xl text-base font-medium text-black">
        Movies <span className="text-green-500 font-bold">DB</span>
      </h2>
      <div
        className={`lg:static lg:w-auto lg:bg-none lg:translate-y-0 lg:min-h-fit absolute bg-white w-full left-0 bottom-0 ${
          menuOpen ? "-translate-y-full" : "translate-y-full"
        } px-4 min-h-[60vh]  flex items-center transition-transform duration-300`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 w-full lg:w-fit">
          <li>
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Movie Lists
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Tv Lists
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Genres
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <SearchBar onSearch={onSearch} onClearSearch={onClearSearch} />
          </li>
        </ul>
      </div>
      <div className="lg:hidden absolute right-10 cursor-pointer  ">
        <button className="p-2" onClick={onToggleMenu}>
          {menuOpen ? <FaBars /> : <FaXmark />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
