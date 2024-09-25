import React from "react";
import TvSeriesSliderCard from "../Card/TvSeries/TvSeriesSliderCard";

const TvSeriesSlider = ({ data, rate }) => {
  return (
    <div className="relative overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-4 pb-8">
        {data.map((list, i) => (
          <TvSeriesSliderCard
            key={i}
            title={list.name}
            date={list.first_airing_Date}
            poster={list.poster_path}
            show={rate ? true : false}
            vote_average={list.vote_average}
            id={list.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TvSeriesSlider;
