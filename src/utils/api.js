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

// Fix the typo here
export const searchMovie = async (q) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: q,
        page: 1
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching movie list:", error);
    return [];
  }
};
