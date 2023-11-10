const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';
const API_TOKEN = '8qlOkxz4wq'
const requests = {
	fetchTrending: (page, limit) => `/movies/trending?page=${page}&token=${API_TOKEN}&limit=${limit}`,
	fetchNetflixOriginals: (page) => `/movies/discover/?page=${page}&genre=TV Movie&token=${API_TOKEN}`,
	fetchTopRated: (page, limit) => `/movies/top-rate?page=${page}&token=${API_TOKEN}&limit=${limit}`,
	fetchActionMovies: (page) => `/movies/discover?page=${page}&genre=Action&token=${API_TOKEN}`,
	fetchComedyMovies: (page) => `/movies/discover?page=${page}&genre=Comedy&token=${API_TOKEN}`,
	fetchHorrorMovies: (page) => `/movies/discover?page=${page}&genre=Horror&token=${API_TOKEN}`,
	fetchRomanceMovies: (page) => `/movies/discover?page=${page}&genre=Romance&token=${API_TOKEN}`,
	fetchDocumentaries: `/movies/discover?genre=Documentary&token=${API_TOKEN}`,
	fetchSearch: `/movies/search?token=${API_TOKEN}`,
};

export default requests;
