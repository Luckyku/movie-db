import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASEURL;
const API_KEY = import.meta.env.VITE_APIKEY;

export const getMoviesList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
export const getPopularMovie = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return { results: [], total_pages: 0 };
  }
};
export const getNowPlayingMovies2 = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: { api_key: API_KEY, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return { results: [], total_pages: 0 };
  }
};

// get movie details by id
export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY, append_to_response: "credits" },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
// Get Upcoming Movie Lists
export const getNowPlayingMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: { api_key: API_KEY, page },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};

// Get Now's playing Lists
export const getUpcomingMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: { api_key: API_KEY, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
// Get Top Rated Movie Lists
export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: { api_key: API_KEY, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};

// search movies
export const searchMovie = async (q) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: q,
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};

//  TV SERIES LISTS
// Get airing today Lists
export const getAiringToday = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/airing_today`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
export const getOnTheAir = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/on_the_air`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
export const getPopularTvSeries = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular`, {
      params: { api_key: API_KEY, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
export const getTopRatedTvSeries = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/top_rated`, {
      params: { api_key: API_KEY, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
// Discover movie
export const filterMovie = async (
  page = 1,
  with_origin_country = null,
  sort_by = "popularity.desc",
  with_genres = null,
  fromDate,
  toDate
) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        page,
        with_origin_country,
        sort_by,
        with_genres,
        "primary_release_date.gte": fromDate,
        "primary_release_date.lte": toDate,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching data: ", error);
  }
};
//Discover Tv
export const filterTv = async (
  page = 1,
  with_origin_country = null,
  sort_by = "popularity.desc",
  with_genres = null,
  fromDate,
  toDate
) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        page,
        with_origin_country,
        sort_by,
        with_genres,
        "first_air_date.gte": fromDate,
        "first_air_date.lte": toDate,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error while fetching data: ", error);
  }
};
// get series details by id
export const getTvSeriesDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${id}`, {
      params: { api_key: API_KEY, append_to_response: "credits" },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
// // search tv series
export const searchTv = async (q) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        query: q,
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};

// Get Genres for tv series
export const getGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/tv/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
