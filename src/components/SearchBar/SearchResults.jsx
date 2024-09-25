import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineImageNotSupported } from "react-icons/md"; // Import the icon

const SearchResults = ({ results, tvResults, closeMenu }) => {
  const BASE_IMG = import.meta.env.VITE_BASEIMG;
  const navigate = useNavigate();

  const onClickDetails = (type, id) => {
    navigate(`/${type}/${id}`), closeMenu();
  };

  // Function to handle image loading errors
  const handleImageError = (event) => {
    event.target.style.display = "none"; // Hide the broken image
    event.target.nextSibling.style.display = "flex"; // Show the default div
  };
  console.log(results);
  console.log(tvResults);

  return (
    <div className="lg:right-4 lg:-bottom-2 lg:translate-y-full w-full max-h-96 bg-white shadow-sm overflow-y-scroll lg:w-80 lg:absolute lg:my-0 my-8 px-0 lg:px-4 py-2">
      <div className={results.length > 0 ? "container mb-4" : "hidden"}>
        <h4 className="mb-4 text-slate-400">Movies</h4>
        {results.map((result) => (
          <div
            key={result.id}
            className="w-full h-20 border-b-2 flex gap-2 hover:bg-slate-200 hover:cursor-pointer"
            onClick={() => onClickDetails("movies",result.id)}
          >
            <div className="min-w-16 max-w-16 h-full relative">
              <img
                className="w-full h-full object-cover"
                src={`${BASE_IMG}/${result.poster_path}`}
                alt={result.title}
                onError={handleImageError}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-slate-400  items-center justify-center hidden">
                <MdOutlineImageNotSupported size={24} color="white" />{" "}

              </div>
            </div>
            <div className="flex flex-col overflow-hidden">
              <h1>{result.title}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className={tvResults.length > 0 ? "container" : "hidden"}>
        <h4
          className={
            results.length > 0
              ? "mt-8 mb-4 text-slate-400"
              : "mb-4 text-slate-400"
          }
        >
          Tv Series
        </h4>
        {tvResults.map((result) => (
          <div
            key={result.id}
            className="w-full h-20 border-b-2 flex gap-2 hover:bg-slate-200 hover:cursor-pointer"
            onClick={() => onClickDetails("tv-series",result.id)}
          >
            <div className="min-w-16 max-w-16 h-full relative">
              <img
                className="w-full h-full object-cover"
                src={`${BASE_IMG}/${result.poster_path}`}
                alt={result.name}
                onError={handleImageError}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-slate-400  items-center justify-center hidden">
                <MdOutlineImageNotSupported size={24} color="white" />{" "}
              </div>
            </div>
            <div className="flex flex-col overflow-hidden">
              <h1>{result.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
