import React from "react";

const GenreFilter = ({ dataGenre, selectedGenres, toggleGenre }) => {
  return (
    <div className="w-full shadow-lg px-4 py-2 border mb-8">
      <p className="text-lg font-bold p-2">Genres</p>
      <div className="w-full flex flex-wrap items-center gap-2 py-4">
        {dataGenre.map((genre) => (
          <button
            key={genre.id}
            onClick={() => toggleGenre(genre.id)}
            className={`border p-2 rounded-md ${
              selectedGenres.includes(genre.id)
                ? "bg-blue-400 text-white"
                : "bg-white text-black"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
