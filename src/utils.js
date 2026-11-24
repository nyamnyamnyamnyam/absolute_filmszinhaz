import axios from "axios";

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";
const baseUrl = "https://api.themoviedb.org/3"

const api = axios.create({
	baseURL: baseUrl,
	params: {
		api_key: import.meta.env.VITE_TMDB_API_KEY,
		language: "hu-HU",
		include_adult: false,
		sort_by: "popularity.desc",
	},
});

export const getTrending = async (page = 1) => {
	const response = await api.get("/trending/all/week", { params: { page } });
	return response.data.results;
};
/*
export const getMovies = async () => {
	const response = await api.get("/discover/movie");
	return response.data.results;
};
*/
export const getTvShows = async (page = 1) => {
	const response = await api.get("/discover/tv", { params: { page } });
	return response.data.results;
};

export const getMovies = async (page = 1) => {
	const response = await api.get("/discover/movie", { params: { page } });
	return response.data.results;
};

export const getMedia = async (type, searchText, page = 1) => {
	const response = await api.get(`/search/${type}`, {
		params: { query: searchText, page }
	});
	return {
		results: response.data.results,
		totalPages: response.data.total_pages
	};
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

export const getCategory = async(type) =>{
	const mediaType = type === "movies" ? "movie" : type;
	const url = `${baseUrl}/genre/${mediaType}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`

	const response = await axios.get(url)
	return response.data.genres
}

export const getSelectedMediaByCateg = async(type, selectedCtg, page = 1) =>{
	const mediaType = type === "movies" ? "movie" : type;
	const categoryIds = Array.isArray(selectedCtg)
		? selectedCtg
		: (typeof selectedCtg === "string" ? selectedCtg.split(",").filter(Boolean) : []);
		
	const response = await api.get(`/discover/${mediaType}`, {
		params: {
			with_genres: categoryIds.join(','),
			page
		}
	})

	return response.data.results
}


export const getTrailer = async(type, id) => {
	const response = await api.get(`/${type}/${id}/videos`)
	return response.data.results ?? []
}

export const GetCreadits = async(type, id) => {
	const response = await api.get(`/${type}/${id}/credits`)
	return response.data.cast
}