import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import MoviesSlider from "../components/Movies/MoviesSlider";
import Footer from "../components/Footer/Footer";
import {
  getMoviesList,
  getUpcomingMovies,
  getTopRatedMovies,
  searchMovie,
} from "../utils/api";

const MovieLists = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const results = await getMoviesList();
      setPopularMovies(results);
    };
    const fetchUpcomingMovies = async () => {
      const results = await getUpcomingMovies();
      setUpcomingMovies(results);
    };
    const fetchTopRated = async () => {
      const results = await getTopRatedMovies();
      setTopRated(results);
    };
    fetchTopRated();
    fetchUpcomingMovies();
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
  console.log(upcomingMovies);
  return (
    <div>
      <Navbar
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        searchResults={isSearch ? searchResults : null}
      />
      <div className="container-sm mx-auto px-5 lg:px-20 mt-10 flex flex-col space-y-8">
        <h1 className="text-xl font-bold mb-4">Top Rated Movies</h1>
        <MoviesSlider data={topRated} rate={true} />
        <h1 className="text-xl font-bold mb-4">Upcoming Movies</h1>
        <MoviesSlider data={upcomingMovies} />
        <Movies listPopularMovie={popularMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default MovieLists;
