import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchBar/SearchResults";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch, onClearSearch, searchResults }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  const redirect = (url) => {
    navigate(`/${url}`);
  };
  console.log(searchResults);
  return (
    <div className="drop-shadow flex items-center justify-between lg:px-20 px-4 py-2 bg-white mb-8 relative z-10">
      <h2
        onClick={() => redirect("")}
        className="lg:text-xl text-base font-medium text-black hover:cursor-pointer"
      >
        Movies <span className="text-green-500 font-bold">DB</span>
      </h2>
      <div
        className={`lg:static lg:w-auto lg:bg-none lg:translate-y-0 lg:min-h-fit absolute bg-white w-full left-0 bottom-0 ${
          menuOpen ? "translate-y-full" : "-translate-y-full"
        } px-4 min-h-[60vh]  flex items-center transition-transform duration-300`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 w-full lg:w-fit">
          <li>
            <a
              onClick={() => redirect("")}
              className="hover:text-blue-500 hover:cursor-pointer"
            >
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
            <a href="#" className="text-slate-400 cursor-default">
              Tv Lists
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 cursor-default">
              Genres
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 cursor-default">
              Contact
            </a>
          </li>
          <li>
            <SearchBar onSearch={onSearch} onClearSearch={onClearSearch} />
            {searchResults ? (
              <SearchResults results={searchResults} />
            ) : (
              <div className="hidden"></div>
            )}
          </li>
        </ul>
      </div>
      <div className="lg:hidden absolute right-3 cursor-pointer  ">
        <button className="p-2" onClick={onToggleMenu}>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
