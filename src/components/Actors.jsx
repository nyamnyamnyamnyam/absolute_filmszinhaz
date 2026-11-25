import { useEffect, useState } from "react";
import { Link } from "react-router";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { getActors, getMedia, img_300 } from "../utils";

const Actors = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(1);
	const [searchText, setSearchText] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const request = searchQuery
			? getMedia("person", searchQuery, page)
			: getActors(page);

		request
			.then((response) => setData({ ...response, page, searchQuery }))
			.catch(() => setError({
				page,
				searchQuery,
				message: "Nem sikerült betölteni a színészeket."
			}));
	}, [page, searchQuery]);

	const actors = data?.page === page && data.searchQuery === searchQuery
		? data.results
		: null;
	const pageError = error?.page === page && error.searchQuery === searchQuery
		? error.message
		: null;

	const handleSearch = () => {
		setPage(1);
		setSearchQuery(searchText.trim());
	};

	return (
		<section className="mx-auto min-h-screen max-w-7xl px-4 py-8 text-white">
			<h1 className="mb-2 p-4 text-center text-3xl font-bold">Színészek</h1>
			<SearchBar
				searchText={searchText}
				setSearchText={setSearchText}
				handleSearch={handleSearch}
			/>

			{pageError ? (
				<ErrorMessage message={pageError} />
			) : actors ? (
				<>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{actors.map((actor) => (
							<Link
								key={actor.id}
								to={`/actors/${actor.id}`}
								className="overflow-hidden rounded-xl bg-gray-900 shadow transition hover:scale-[1.02]"
							>
								<img
									className="aspect-3/4 w-full object-cover"
									src={actor.profile_path ? `${img_300}${actor.profile_path}` : "/Noimg.png"}
									alt={actor.name}
									loading="lazy"
								/>
								<div className="p-3">
									<h2 className="font-bold">{actor.name}</h2>
									<p className="mt-2 text-sm text-gray-300">
										{actor.known_for?.map((work) => work.title || work.name).filter(Boolean).join(", ")}
									</p>
								</div>
							</Link>
						))}
					</div>
					<Pagination page={page} setPage={setPage} maxPage={data.totalPages} />
				</>
			) : (
				<Loading />
			)}
		</section>
	);
};

export default Actors;
