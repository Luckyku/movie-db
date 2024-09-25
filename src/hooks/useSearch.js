import { useState } from "react";
import { searchMovie, searchTv } from "../utils/api";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTvResults, setSearchTvResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = async (query) => {
    if (query.trim()) {
      const results = await searchMovie(query);
      const tvResults = await searchTv(query);
      setSearchTvResults(tvResults);
      setSearchResults(results);
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
    setSearchResults([]);
    setSearchTvResults([]);
  };

  return {
    searchResults,
    searchTvResults,
    isSearch,
    handleSearch,
    handleClearSearch,
  };
};

export default useSearch;
