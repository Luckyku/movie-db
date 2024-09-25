import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/About/Hero"
import AboutThisPage from "../components/About/AboutThisPage";
import useSearch from "../hooks/useSearch";
const About = () => {
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
      <div className="container-sm mx-auto px-5 lg:px-20 mt-10 flex flex-col gap-y-8">
        <Hero />
        <AboutThisPage />
      </div>
    </div>
  );
};

export default About;
