import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PopularMovies from "../components/Movies/PopularMovies";
import UpcomingMovies from "../components/Movies/UpcomingMovies";
import TopRatedMovies from "../components/Movies/TopRatedMovies";
import TopRatedSeries from "../components/TvSeries/TopRatedSeries";
import PopularSeries from "../components/TvSeries/PopularSeries";
import Footer from "../components/Footer/Footer";
import useSearch from "../hooks/useSearch";
import NowPlayingMovies from "../components/Movies/NowsPlaying";

const Home = () => {
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
        <UpcomingMovies title="Upcoming Movies" />
        <NowPlayingMovies title={"Now's Playing"} />
        <TopRatedMovies title="Top Rated Movies" />
        <PopularMovies title={"Popular Movies"} />
        <TopRatedSeries title="Top Rated Series" />
        <PopularSeries title="Popular Series" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
