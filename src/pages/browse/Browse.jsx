import React, { useState } from 'react';
import MovieList from '../../components/browse/MovieList';
import requests from '../../utils/requests';
import Banner from '../../components/browse/Banner';
import Nav from '../../components/browse/Nav';

import './Browse.css';

function Browse() {
	const [page, setPage] = useState(5);
	const [limit, setLimit] = useState(10)
	return (
		<div className="app">
			<Nav />
			<Banner />
			<MovieList title="" isLargeRow fetchUrl={requests.fetchNetflixOriginals(page, limit)} />
			<MovieList title="Xu hướng" fetchUrl={requests.fetchTrending(page, limit)} />
			<MovieList title="Xếp hạng cao" fetchUrl={requests.fetchTopRated(page, limit)} />
			<MovieList title="Hành động" fetchUrl={requests.fetchActionMovies(page)} />
			<MovieList title="Hài" fetchUrl={requests.fetchComedyMovies(page)} />
			<MovieList title="Kinh dị" fetchUrl={requests.fetchHorrorMovies(page)} />
			<MovieList title="Lãng mạn" fetchUrl={requests.fetchRomanceMovies(page)} />
			<MovieList title="Tài liệu" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default Browse;

