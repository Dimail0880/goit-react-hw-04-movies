import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "cddbb5c4a2bce590d3d410561d50007b";

export const getTrending = async (media_type = "all", time_window = "day") => {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    return console.log(error);
  }
};

export const getMovieByQuery = async (query) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return res.data.results;
  } catch (err) {
    return console.log(err);
  }
};

export const getMovieDetails = async (movie_id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export const castRequest = async (movie_id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
    );
    return res.data.cast;
  } catch (err) {
    return console.log(err);
  }
};

export const reviewRequest = async (movie_id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return res.data.results;
  } catch (err) {
    return console.log(err);
  }
};
export const posterImgLink = "https://image.tmdb.org/t/p/w500/";
export const avatarImgLink = "https://image.tmdb.org/t/p/w138_and_h175_face/";
