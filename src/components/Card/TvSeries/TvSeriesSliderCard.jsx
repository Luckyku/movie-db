import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import MovieRating from "../MovieRating";
const TvSeriesSlider = ({ title, date, poster, vote_average, id, show }) => {
  const BASE_IMG = import.meta.env.VITE_BASEIMG;
  const navigate = useNavigate();
  const onClickDetails = (id) => {
    navigate(`/tv-series/${id}`);
  };

  return (
    <div className="lg:w-64 lg:min-w-64 min-w-48 h-80 rounded-md bg-slate-600 relative cursor-pointer overflow-hidden">
      <img
        src={`${BASE_IMG}/${poster}`}
        className="w-full h-full rounded-md transition-all duration-200 transform hover:scale-110"
        alt={title}
        onClick={() => onClickDetails(id)}
      />
      {show ? (
        <div className="absolute top-2 left-2">
          <MovieRating value={Math.round(vote_average * 10)} />
        </div>
      ) : (
        <div></div>
      )}
      <div className="card-description ">
        <p
          className="font-bold hover:text-blue-400"
          onClick={() => onClickDetails(id)}
        >
          {title}
        </p>
        <p className="text-sm text-slate-200">
          {moment(date).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default TvSeriesSlider;
