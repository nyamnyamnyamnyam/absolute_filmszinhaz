import React from 'react'
import Loading from '../components/Loading';
import MediaList from '../components/MediaList';
import { getSelectedMediaByCateg, getTvShows } from '../utils';
import { useState } from 'react';
import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Category from '../components/Category';
import Pagination from '../components/Pagination';

const Tvshows = () => {
   const [tvshows, setTvshows] = useState(null);
   const [error, setError] = useState(null);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [page, setPage] = useState(1)

	useEffect(() => {
		setError(null);
		setTvshows(null);
		const loadTvShows = selectedCategories.length
			? getSelectedMediaByCateg('tv', selectedCategories, page)
			: getTvShows(page);

		loadTvShows
			.then(setTvshows)
			.catch(() => setError("Nem sikerült betölteni a sorozatokat. Próbáld újra később."));
	}, [selectedCategories, page]);

	return (
		<div>
			<Category
				type="tv"
				selectedCategories={selectedCategories}
				setSelectedCategories={(updater) => {
					setPage(1);
					setSelectedCategories(updater);
				}}
			/>
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
			<Pagination {...{page, setPage}}/>
		</div>
	);
}

export default Tvshows
