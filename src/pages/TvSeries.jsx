import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useSearch from "../hooks/useSearch";
import Discoveries from "../components/Discoveries/Discoveries";

const TvSeries = () => {
  const {
    searchResults,
    searchTvResults,
    isSearch,
    handleSearch,
    handleClearSearch,
  } = useSearch();

  return (
    <div>
      <Navbar
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        searchResults={isSearch ? searchResults : null}
        searchTvResults={isSearch ? searchTvResults : null}
      />
      <div className="container-sm mx-auto px-5  mt-10 flex flex-col space-y-8">
        <Discoveries type={"tv"} />
      </div>
      <Footer />
    </div>
  );
};
export default TvSeries;
