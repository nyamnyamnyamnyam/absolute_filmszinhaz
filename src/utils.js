import axios from "axios";

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: import.meta.env.VITE_TMDB_API_KEY,
		language: "hu-HU",
		include_adult: false,
		sort_by: "popularity.desc",
	},
});

export const getTrending = async () => {
	const response = await api.get("/trending/all/week");
	return response.data.results;
};

export const getMovies = async () => {
	const response = await api.get("/discover/movie");
	return response.data.results;
};

export const getTvShows = async () => {
	const response = await api.get("/discover/tv");
	return response.data.results;
};

export const getMedia = async (type, searchText) => {
	const response = await api.get(`/search/${type}?query=${searchText}`);
	return response.data.results;
};

const pageTitle = [
	{type: 'trending', title: 'Popular this week'},
	{type: 'movies', title: 'Movies'},
	{type: 'tv', title: 'Tv Series'},
	{type: 'search', title: 'Search Media'},
]

export const getTitle = (type) => {
	return pageTitle.find(obj => obj.type === type)?.title ?? ''
}
