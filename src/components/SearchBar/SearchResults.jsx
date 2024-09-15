import React from "react";
import { useNavigate } from "react-router-dom";


const SearchResults = ({ results }) => {
    const BASE_IMG = import.meta.env.VITE_BASEIMG;
    const navigate = useNavigate();

    const onClickDetails = (id) => {
      navigate(`/movies/${id}`);
    };
  return (
    <div className=" lg:right-4 lg:-bottom-2 lg:translate-y-full  w-full max-h-96 bg-white shadow-sm  overflow-y-scroll lg:w-80 lg:absolute">
      {results.map((result) => (
        <div
          key={result.id}
          className="w-full h-20 border-b-2 flex gap-2 hover:bg-slate-200 hover:cursor-pointer"
          onClick={() => onClickDetails(result.id)}
        >
          <div className="min-w-16 max-w-16 h-full">
            <img
              className="w-full h-full"
              src={`${BASE_IMG}/${result.poster_path}`}
              alt={result.title}
            />
          </div>
          <div className="flex flex-col">
            <h1>{result.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
