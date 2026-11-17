import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovies } from '../utils';
import Loading from '../components/Loading';
import MediaList from '../components/MediaList';
import ErrorMessage from '../components/ErrorMessage';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

	useEffect(() => {
		getMovies()
			.then(setMovies)
			.catch(() => setError("Nem sikerült betölteni a filmeket. Próbáld újra később."));
	}, []);

	return (
		<div>
			{error ? (
				<ErrorMessage message={error} />
			) : movies ? (
				<MediaList
					data={movies}
					type="movies"
				/>
				) : (   
				<Loading />
			)}
		</div>
	);
}

export default Movies
