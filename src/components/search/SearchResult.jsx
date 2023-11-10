import React, { useState, useEffect } from 'react';

import axios from '../../utils/axios';
import requests from '../../utils/requests';

import './SearchResult.css';
import { toast } from 'react-toastify';

const base_url = 'https://image.tmdb.org/t/p/original';

const SearchResult = ({ query }) => {
	const [movies, setMovies] = useState([]);
	const url = `${requests.fetchSearch}&query=${query}`;

	useEffect(() => {
		async function fetchData() {
			try {
				const request = await axios.post(url);
				if (!request.data || request.data.EC !== 0 || !request.data.DT.results) {
					return toast.error(request.data.EM);
				}
				setMovies(request.data.DT.results);
				return request;
			} catch (error) {
				console.error(error);
			}
		}

		if (query) {
			fetchData();
		} else {
			setMovies([]);
		}
	}, [url, query]);

	return (
		<div className='row'>
			<h2>Search Result</h2>
			<div className='row_posters search-resul-container sc2'>
				{query && movies.length > 0 ? (
					movies.map((movie) => (
						<img
							key={movie.id}
							className={`row_poster row_posterLarge`}
							src={`${base_url}${movie.poster_path}`}
							alt={movie.name}
						/>
					))
				) : query && movies.length === 0 ? (
					<p>No search results found.</p>
				) : null}
			</div>
		</div>
	);
};

export default SearchResult;
