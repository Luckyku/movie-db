import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import MovieRating from "../MovieRating";


const TvSeriesCard = ({ title, date, poster, vote_average, id, movieRating }) => {
  const BASE_IMG = import.meta.env.VITE_BASEIMG;
  const navigate = useNavigate();
  const onClickDetails = (id) => {
    navigate(`/tv-series/${id}`);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden w-full lg:h-96 h-64 hover:cursor-pointer bg-red-50 mb-3 relative">
        <img
          className="w-full h-full transform hover:scale-125 transition-all duration-200"
          src={`${BASE_IMG}${poster}`}
          alt={title}
          onClick={() => onClickDetails(id)}
        />
        <div className="absolute top-1 left-1">
          {movieRating && (<MovieRating value={Math.round(vote_average * 10)} />)}
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

export default TvSeriesCard;
