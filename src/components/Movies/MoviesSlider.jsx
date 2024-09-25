import React from "react";
import MoviesCardSlider from "../Card/MoviesCardSlider";

const MoviesSlider = ({ title, data, rate }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <h4 className="mb-4 font-bold text-xl">{title}</h4>
      <div className="flex space-x-4 pb-4">
        {data.map((list) => (
          <MoviesCardSlider
            key={list.id}
            title={list.title}
            date={list.release_date}
            poster={list.poster_path}
            show = {rate ? true : false}
            vote_average={list.vote_average}
            id={list.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesSlider;
