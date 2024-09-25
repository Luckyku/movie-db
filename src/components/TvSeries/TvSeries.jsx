import React from "react";
import TvSeriesCard from "../Card/TvSeries/TvSeriesCard";
const TvSeries = ({data, sectionTitle}) => {
  return (
    <div>
      <div className="bg-white px-4 py-8">
        <h1 className="text-xl font-bold mb-4">{sectionTitle}</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((series, i) => (
            <TvSeriesCard
              key={i}
              title={series.name}
              date={series.release_date}
              poster={series.poster_path}
              vote_average={series.vote_average}
              id={series.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
