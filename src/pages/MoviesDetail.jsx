import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { getMovieDetails, searchMovie } from "../utils/api";
import ProfileCard from "../components/Card/ProfilesCard";
import MovieRating from "../components/Card/MovieRating";
import { formatDate } from "../utils/helper";

const MoviesDetail = () => {
  const { id } = useParams();
  const BASE_IMG_URL = import.meta.env.VITE_BASEIMG;
  const BASE_BACKDROP_URL = import.meta.env.VITE_BASEIMGLARGE;
  const [movie, setMovie] = useState(null);
  const [allCast, setAllCast] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const initialLimit = 16;
  const handleShowAll = () => {
    setAllCast(!allCast);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(id);
      setMovie(details);
    };

    fetchMovieDetails();
  }, [id]);
  console.log(movie);
  if (!movie) {
    return <p>..Loading</p>;
  }
  const year = movie.release_date.split("-")[0];
  const displayedCast = allCast
    ? movie.credits.cast
    : movie.credits.cast.slice(0, initialLimit);
  console.log(displayedCast);
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
    <>
      <Navbar
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        searchResults={isSearch ? searchResults : null}
      />
      <div
        className="relative lg:h-[75vh] h-fit bg-cover bg-center flex p-8 gap-3 justify-between flex-col lg:flex-row"
        style={{
          backgroundImage: `url(${BASE_BACKDROP_URL}/${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute inset-0 bg-red-950 opacity-20" />

        <div className="relative lg:h-full h-[80ch] lg:w-1/3 w-full mb-4 lg:mb-0">
          <img
            src={`${BASE_IMG_URL}/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full"
          />
        </div>
        <div className="relative lg:w-2/3 w-full">
          <div className=" text-white">
            <h1 className="text-3xl font-bold">
              {movie.title}{" "}
              <span className="text-gray-200 font-normal">({year})</span>
            </h1>
            <div className="flex gap-4 items-center mb-4">
              <p>{formatDate(movie.release_date)}</p>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="flex gap-1 items-center truncate ">
                {movie.genres.map((genre) => (
                  <p key={genre.id}>{genre.name},</p>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mb-4 items-center">
              {/* <div className="rounded-full w-12 h-12 text-lg font-bold  flex items-center justify-center bg-slate-800 mb-3">
                <p>{Math.round(movie.vote_average * 10)}%</p>
              </div> */}
              <MovieRating value={Math.round(movie.vote_average * 10)} />
              <h4 className="w-8 text-sm">User Score</h4>
            </div>
            <h4 className="text-lg ">Overview :</h4>
            <p className="text-slate-200">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" lg:w-[92%] w-full flex gap-4  mx-auto overflow-x-auto px-4 mt-8 mb-8 ">
          {displayedCast.map((actor) => (
            <ProfileCard
              key={actor.id}
              name={actor.name}
              avatar={actor.profile_path}
              character={actor.character}
            />
          ))}

          {movie.credits.cast.length > initialLimit && (
            <button
              onClick={() => handleShowAll()}
              className="px-4 py-2 bg-slate-400 opacity-40 text-white rounded"
            >
              {allCast ? "Show Less" : "View More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesDetail;
