import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../utils/api";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import MoviesCard from "../Card/MoviesCard";
import Loading from "../Loading/Loading";

const TopRatedMovies = ({ title }) => {
  const [topRated, setTopRated] = useState([]);
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
    const fetchTopRatedMovies = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getTopRatedMovies(currentPage);
        setTopRated(results);
        if (totalPages > 500) {
          setTotalPages(500);
        }
        setTotalPages(total_pages);
      } catch (error) {
        console.log("there's an error while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, [currentPage]);

  return (
    <div>
      {!loading ? (
        <>
          <h4 className="text-xl font-bold mb-4 mt-8">{title}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {topRated.map((movie) => (
              <MoviesCard
                key={movie.id}
                title={movie.title}
                date={movie.release_date}
                poster={movie.poster_path}
                vote_average={movie.vote_average}
                id={movie.id}
                movieRating={true}
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

export default TopRatedMovies;
