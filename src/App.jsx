import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import { getMoviesList, searchMovie } from "./utils/api";

function App() {
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
    setSearchResults([])
  };
  return (
    <>
      <Navbar onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <div className="container-sm mx-auto px-5 lg:px-20 mt-10">
        {isSearch ? (
          searchResults.length > 0 ? (
            <Movies listPopularMovie={searchResults} />
          ) : (
            <p>No results found</p>
          )
        ) : (
          <Movies listPopularMovie={popularMovies} />
        )}
      </div>
    </>
  );
}

export default App;
