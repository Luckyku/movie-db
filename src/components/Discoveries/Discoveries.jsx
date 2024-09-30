import React, { useEffect, useState } from "react";
import { filterTv, filterMovie, getGenres } from "../../utils/api";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import MoviesCard from "../Card/MoviesCard";
import SortBy from "../Discoveries/SortBy";
import DateFilter from "./DateFilter";
import GenreFilter from "../Discoveries/GenreFilter";
import Search from "../Button/FilterSearch";

const Discoveries = ({ type }) => {
  const [data, setData] = useState([]);
  const [dataGenre, setDataGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [country, setCountry] = useState("JP");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    handleNextPage,
    handlePreviousPage,
    onSetPage,
  } = usePagination();

  const fetchData = async () => {
    setLoading(true);
    try {
      const filterFunction = type === "movies" ? filterMovie : filterTv;
      const { results, total_pages } = await filterFunction(
        currentPage,
        country,
        sortBy,
        selectedGenres.join(","),
        fromDate || null,
        toDate || null
      );

      setData(results);
      setTotalPages(total_pages > 500 ? 500 : total_pages);
    } catch (error) {
      console.log("there's an error while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const fetchGenre = async () => {
    try {
      const { genres } = await getGenres();
      setDataGenre(genres);
    } catch (error) {
      console.log("there's an error while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const toggleGenre = (id) => {
    setSelectedGenres((prev) => {
      if (prev.includes(id)) {
        return prev.filter((genreId) => genreId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleCountry = (id) => {
    setCountry(id)
  }
  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  return (
    <div>
      {!loading ? (
        <>
          <div className="flex flex-col gap-y-12 lg:flex-row lg:gap-y-0 ">
            <div className="w-full lg:w-1/4 lg:px-6 px-0 z-10">
              <h4 className="text-xl font-bold mb-8">
                {type == "movies" ? "Popular Movies" : `Popular Tv Show's`}
              </h4>
              <div className="sticky top-4 w-full">
                <SortBy sortBy={sortBy} handleSortBy={handleSortBy} />
                <DateFilter
                  fromDate={fromDate}
                  toDate={toDate}
                  setFromDate={setFromDate}
                  setToDate={setToDate}
                />

                <GenreFilter
                  dataGenre={dataGenre}
                  selectedGenres={selectedGenres}
                  toggleGenre={toggleGenre}
                  country={country}
                  handleCountry={handleCountry}
                />
                <Search handleSearch={handleSearch} />
              </div>
            </div>
            <div className="w-full lg:w-3/4 ">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.length === 0 ? (
                  <p className="text-center w-full">There's nothing found</p>
                ) : (
                  data.map((movies) => (
                    <MoviesCard
                      key={movies.id}
                      type={type}
                      title={type == "movies" ? movies.title : movies.name}
                      date={
                        type == "movies"
                          ? movies.release_date
                          : movies.first_air_date
                      }
                      poster={movies.poster_path}
                      vote_average={movies.vote_average}
                      id={movies.id}
                      movieRating={true}
                    />
                  ))
                )}
              </div>
              {data.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onNextPage={handleNextPage}
                  onPreviousPage={handlePreviousPage}
                  onSetPage={onSetPage}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Discoveries;
