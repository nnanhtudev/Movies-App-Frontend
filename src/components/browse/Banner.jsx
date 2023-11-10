import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css';

function Banner() {
	const [movie, setMovie] = useState([]);
	const [page, setPage] = useState(1);
	useEffect(() => {
		async function fetchData() {
			try {
				const request = await axios.get(requests.fetchNetflixOriginals(page));
				console.log(request.data)
				const results = request.data.DT.results;
				const randomIndex = Math.floor(Math.random() * results.length);
				const randomMovie = results[randomIndex];
				setMovie(randomMovie);

				// console.log(setMovie())
				return request;
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, [page]);


	// console.log(movie)

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
				"https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
				)`,
				backgroundPosition: 'center center',
			}}>
			<div className='banner_contents'>
				<h1 className='banner_title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className='banner_buttons'>
					<button className='banner_button'>Play</button>
					<button className='banner_button'>My List</button>
				</div>
				<h1 className='banner_description'>
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className='banner--fadeBottom' />
		</header>
	);
}

export default Banner;
