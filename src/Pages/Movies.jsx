import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovies, getSelectedMediaByCateg } from '../utils';
import Loading from '../components/Loading';
import MediaList from '../components/MediaList';
import ErrorMessage from '../components/ErrorMessage';
import Category from '../components/Category';
import Pagination from '../components/Pagination';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([])
  const [page, setPage] = useState(1)

	useEffect(() => {
		setError(null);
		setMovies(null);
		const loadMovies = selectedCategories.length
			? getSelectedMediaByCateg('movies', selectedCategories, page)
			: getMovies(page);

		loadMovies
			.then(setMovies)
			.catch(() => setError("Nem sikerült betölteni a filmeket. Próbáld újra később."));
	}, [selectedCategories, page]);

	return (
		<div>
			<Category
				type="movies"
				selectedCategories={selectedCategories}
				setSelectedCategories={(updater) => {
					setPage(1);
					setSelectedCategories(updater);
				}}
			/>
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
			<Pagination {...{page, setPage}}/>
		</div>
	);
}

export default Movies
