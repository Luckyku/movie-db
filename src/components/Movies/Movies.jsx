import React from "react";
import MoviesCard from "../Card/MoviesCard";

const Movies = ({listPopularMovie}) => {
  return (
    <div className="bg-white px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {listPopularMovie.map((movie, i)=>(
          <MoviesCard key={i} title={movie.title} date={movie.release_date} poster={movie.poster_path} vote_average={movie.vote_average} id={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
