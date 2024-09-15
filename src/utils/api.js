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
export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
// Get Top Rated Movie Lists
export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: { api_key: API_KEY, page: 1 },
    });
    return response.data.results;
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
