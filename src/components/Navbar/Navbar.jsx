import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch, onClearSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(`/${url}`);
  };
  return (
    <div className="drop-shadow flex items-center justify-between lg:px-20 px-4 py-2 bg-white mb-8 relative z-10">
      <h2 onClick={() => redirect('')} className="lg:text-xl text-base font-medium text-black hover:cursor-pointer">
        Movies <span className="text-green-500 font-bold">DB</span>
      </h2>
      <div
        className={`lg:static lg:w-auto lg:bg-none lg:translate-y-0 lg:min-h-fit absolute bg-white w-full left-0 bottom-0 ${
          menuOpen ? "translate-y-full" : "-translate-y-full"
        } px-4 min-h-[60vh]  flex items-center transition-transform duration-300`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 w-full lg:w-fit">
          <li>
            <a onClick={() => redirect("")} className="hover:text-blue-500 hover:cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => redirect("movies")}
              className="hover:text-blue-500 hover:cursor-pointer"
            >
              Movie Lists
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 hover:cursor-pointer">
              Tv Lists
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 hover:cursor-pointer">
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
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
