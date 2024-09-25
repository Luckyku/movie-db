import React, { useEffect, useState } from "react";
import { getPopularMovie } from "../../utils/api";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import MoviesCard from "../Card/MoviesCard";
import Loading from "../Loading/Loading";

const PopularMovies = ({ title }) => {
  const [popularMovie, setPopularMovie] = useState([]);
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
        const { results } = await getPopularMovie(currentPage);
        setPopularMovie(results);
        setTotalPages(500);
      } catch (error) {
        console.log("there's an error while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, [currentPage]);

  return (
    <div>
      {!loading ? (
        <>
          <h4 className="text-xl font-bold mb-4 mt-8">{title}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {popularMovie.map((movie) => (
              <MoviesCard
                key={movie.id}
                title={movie.title}
                date={movie.release_date}
                poster={movie.poster_path}
                vote_average={movie.vote_average}
                id={movie.id}
                type={"movies"}
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
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PopularMovies;
