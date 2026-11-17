import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTrending, img_300 } from "../utils";
import MediaList from "../components/MediaList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
	const [trendings, setTrendings] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getTrending()
			.then(setTrendings)
			.catch(() => setError("Nem sikerült betölteni a felkapott tartalmakat. Próbáld újra később."));
	}, []);

	return (
		<div>
			{error ? (
				<ErrorMessage message={error} />
			) : trendings ? (
				<MediaList
					data={trendings}
					type="movie"
				/>
				) : (
				<Loading />
			)}
		</div>
	);
};
export default Home;
