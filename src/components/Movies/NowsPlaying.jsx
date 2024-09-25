import React, { useEffect, useState } from "react";
import { getNowPlayingMovies2 } from "../../utils/api";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import MoviesCard from "../Card/MoviesCard";

const MoviesContainer = ({ title }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    currentPage,
    totalPages,
    setTotalPages,
    handleNextPage,
    handlePreviousPage,
    onSetPage,
  } = usePagination();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true);
      try {
        const { results } = await getNowPlayingMovies2(currentPage);
        setNowPlaying(results);
        setTotalPages(500);
      } catch (error) {
        console.log("there's an error while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, [currentPage]);
  if (loading) {
    <div className="w-full h-44 flex items-center justify-center ">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>;
  }
  return (
    <div>
      <h4 className="text-xl font-bold mb-4 mt-8">{title}</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {nowPlaying.map((movie) => (
          <MoviesCard
            key={movie.id}
            title={movie.title}
            date={movie.release_date}
            poster={movie.poster_path}
            vote_average={movie.vote_average}
            id={movie.id}
            type={'movies'}
          />
        ))}
      </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          onSetPage={onSetPage}
        />
    </div>
  );
};

export default MoviesContainer;
