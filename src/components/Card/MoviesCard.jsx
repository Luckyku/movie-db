import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import MovieRating from "./MovieRating";

const MoviesCard = ({ title, date, poster, vote_average, id, movieRating, type }) => {
  const BASE_IMG = import.meta.env.VITE_BASEIMG;
  const navigate = useNavigate();
  const onClickDetails = (id) => {
    const baseUrl = type == 'movies' ? 'movies' : 'tv-series'
    navigate(`/${baseUrl}/${id}`);
  };

  return (
    <div className="flex flex-col relative">
      <div className="overflow-hidden w-full lg:h-96 h-64 hover:cursor-pointer bg-slate-200 mb-3 relative">
        <img
          className="w-full h-full transform hover:scale-125 transition-all duration-200"
          src={`${BASE_IMG}${poster}`}
          alt={title}
          onClick={() => onClickDetails(id)}
        />
        <div className="absolute top-1 left-1">
          {movieRating && <MovieRating value={Math.round(vote_average * 10)} />}
        </div>
      </div>
      <h4
        className="text-xl font-bold truncate hover:text-blue-500 hover:cursor-pointer"
        onClick={() => onClickDetails(id)}
      >
        {title}
      </h4>
      <p className="text-sm text-gray-400">
        {moment(date).format("MMM D, YYYY")}
      </p>
    </div>
  );
};

export default MoviesCard;
