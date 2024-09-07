import React from "react";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ title, date, poster, vote_average, id }) => {
  const BASE_IMG = import.meta.env.VITE_BASEIMG;
  const navigate = useNavigate()
  const onClickDetails = (id) => {
    navigate(`/movies/${id}`)
  }


  return (
    <div className="flex flex-col ">
      <img
        className="w-full lg:h-96 h-64 bg-red-100 mb-3 hover:cursor-pointer "
        src={`${BASE_IMG}${poster}`}
        alt={title}
        onClick={() => onClickDetails(id)}
      />
      <h4 className="text-xl font-bold truncate hover:text-blue-500 hover:cursor-pointer" onClick={() => onClickDetails(id)}>
        {title}
      </h4>
      <p className="text-sm text-gray-400">{date}</p>
      <p className="text-sm text-gray-400">{vote_average}</p>
    </div>
  );
};

export default MoviesCard;
