import React from 'react'
import Loading from '../components/Loading';
import MediaList from '../components/MediaList';
import { getTvShows } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';

const Tvshows = () => {
   const [tvshows, setTvshows] = useState(null);
   const [error, setError] = useState(null);

	useEffect(() => {
		getTvShows()
			.then(setTvshows)
			.catch(() => setError("Nem sikerült betölteni a sorozatokat. Próbáld újra később."));
	}, []);

	return (
		<div>
			{error ? (
				<ErrorMessage message={error} />
			) : tvshows ? (
				<MediaList
					data={tvshows}
					type="tv"
				/>
				) : (   
				<Loading />
			)}
		</div>
	);
}

export default Tvshows
