import React from "react";
import MoviesCardSlider from "../Card/MoviesCardSlider";

const MoviesSlider = ({ data, rate }) => {
  return (
    <div className="relative overflow-x-auto whitespace-nowrap">
      <div class="flex space-x-4 pb-8">
        {data.map((list) => (
          <MoviesCardSlider
            key={list.i}
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
