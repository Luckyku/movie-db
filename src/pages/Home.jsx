import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import { getMoviesList, searchMovie } from "../utils/api";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const results = await getMoviesList();
      setPopularMovies(results);
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = async (query) => {
    if (query.trim()) {
      const results = await searchMovie(query);
      setSearchResults(results);
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
    setSearchResults([]);
  };
  return (
    <div>
      <Navbar
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        searchResults={isSearch ? searchResults : null}
      />

      <div className="container-sm mx-auto px-5 lg:px-20 mt-10">
        <Movies listPopularMovie={popularMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
