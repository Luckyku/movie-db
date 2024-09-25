import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { getTvSeriesDetails } from "../utils/api";
import ProfileCard from "../components/Card/ProfilesCard";
import MovieRating from "../components/Card/MovieRating";
import Footer from "../components/Footer/Footer";
import moment from "moment";
import useSearch from "../hooks/useSearch";

const TvSeriesDetail = () => {
  const { id } = useParams();
  const BASE_IMG_URL = import.meta.env.VITE_BASEIMG;
  const BASE_BACKDROP_URL = import.meta.env.VITE_BASEIMGLARGE;
  const [series, setSeries] = useState(null);
  const [allCast, setAllCast] = useState(false);
  const initialLimit = 16;
  const handleShowAll = () => {
    setAllCast(!allCast);
  };
  const {
    searchResults,
    searchTvResults,
    isSearch,
    handleSearch,
    handleClearSearch,
  } = useSearch();

  useEffect(() => {
    const fetchPopularSeriesDetail = async () => {
      const details = await getTvSeriesDetails(id);
      setSeries(details);
    };

    fetchPopularSeriesDetail();
  }, [id]);
  console.log(series);
  if (!series) {
    return <p>..Loading</p>;
  }
  const year = series.first_air_date.split("-")[0];
  const displayedCast = allCast
    ? series.credits.cast
    : series.credits.cast.slice(0, initialLimit);

  return (
    <>
      <Navbar
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        searchResults={isSearch ? searchResults : null}
        searchTvResults={isSearch ? searchTvResults : null}
      />
      <div
        className="relative lg:h-[75vh] h-fit bg-cover bg-center flex p-8 gap-3 justify-between flex-col lg:flex-row"
        style={{
          backgroundImage: `url(${BASE_BACKDROP_URL}/${series.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="absolute inset-0 bg-red-950 opacity-20" />

        <div className="relative lg:h-full h-[80ch] lg:w-1/3 w-full mb-4 lg:mb-0">
          <img
            src={`${BASE_IMG_URL}/${series.poster_path}`}
            alt={series.name}
            className="w-full h-full"
          />
        </div>
        <div className="relative lg:w-2/3 w-full">
          <div className=" text-white">
            <h1 className="text-3xl font-bold">
              {series.name}{" "}
              <span className="text-gray-200 font-normal">({year})</span>
            </h1>
            <div className="flex gap-4 items-center mb-4">
              <p>{moment(series.first_air_date).format("MMM D, YYYY")}</p>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="flex gap-1 items-center truncate ">
                {series.genres.map((genre) => (
                  <p key={genre.id}>{genre.name},</p>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mb-4 items-center">
              <MovieRating value={Math.round(series.vote_average * 10)} />
              <h4 className="w-8 text-sm">User Score</h4>
            </div>
            <h4 className="text-lg ">Overview :</h4>
            <p className="text-slate-200">{series.overview}</p>
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

          {series.credits.cast.length > initialLimit && (
            <button
              onClick={() => handleShowAll()}
              className="px-4 py-2 bg-slate-400 opacity-40 text-white rounded"
            >
              {allCast ? "Show Less" : "View More"}
            </button>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TvSeriesDetail;
