import React from "react";

const MoviesCard = ({ title, date, poster, vote_average }) => {
  const BASE_IMG = import.meta.env.VITE_BASEIMG;

  return (
    <div className="flex flex-col">
      <img
        className="w-full lg:h-96 h-64 bg-red-100 mb-3"
        src={`${BASE_IMG}${poster}`}
        alt={title}
      />
      <h4 className="text-xl font-bold truncate hover:text-blue-500 hover:cursor-pointer">
        {title}
      </h4>
      <p className="text-sm text-gray-400">{date}</p>
      <p className="text-sm text-gray-400">{vote_average}</p>
    </div>
  );
};

export default MoviesCard;
