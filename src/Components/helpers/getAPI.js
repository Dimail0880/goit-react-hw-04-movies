import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "cddbb5c4a2bce590d3d410561d50007b";

export const  getTrending = (media_type = "all", time_window = "day") => {
	return axios.get(
		`${BASE_URL}/3/trending/${media_type}/${time_window}?api_key=${API_KEY}`
	);
};

export const getMovieByQuery = (query) => {
	return axios.request(
		`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
	);
};

export const getMovieDetails = (movie_id) => {
	return axios.get(`${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}`);
};

export const castRequest = (movie_id) => {
	return axios.request(
		`${BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}`
	);
};

export const reviewRequest = (movie_id) => {
	return axios.request(
		`${BASE_URL}/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
	);
};