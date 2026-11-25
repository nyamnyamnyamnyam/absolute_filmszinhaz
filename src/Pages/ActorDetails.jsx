import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { getActorDetails, img_500, img_300 } from "../utils";

const ActorDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getActorDetails(id)
      .then((actor) => setData({ id, actor }))
      .catch(() => {
        setError({
          id,
          message:
            "Nem sikerült betölteni a színész adatlapját. Próbáld újra később.",
        });
      });
  }, [id]);

  if (error?.id === id) {
    return <ErrorMessage message={error.message} />;
  }

  const actor = data?.id === id ? data.actor : null;

  if (!actor) {
    return <Loading />;
  }

  const known_for = [...(actor.movie_credits?.cast ?? [])]
    .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))
    .slice(0, 8);

  return (
		<section className="min-h-screen px-4 py-10 text-white sm:px-8">
			<div className="mx-auto max-w-5xl">
				<Link to="/actors" className="mb-6 inline-flex text-sm text-red-400 hover:text-red-300">
					← Vissza a színészekhez
				</Link>
				<div className="grid gap-8 rounded-2xl border border-white/10 bg-gray-900 p-5 shadow-xl sm:grid-cols-[260px_1fr] sm:p-8">
					<img
						className="mx-auto aspect-3/4 w-full max-w-260px rounded-xl bg-gray-800 object-cover"
						src={actor.profile_path ? `${img_500}${actor.profile_path}` : "/Noimg.png"}
						alt={actor.name}
					/>
					<div>
						<p className="text-sm font-bold uppercase tracking-widest text-red-400">
							{actor.known_for_department || "Színész"}
						</p>
						<h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{actor.name}</h1>
						{(actor.birthday || actor.place_of_birth) && (
							<p className="mt-3 text-sm text-gray-400">
								{[actor.birthday, actor.place_of_birth].filter(Boolean).join(" · ")}
							</p>
						)}
						<h2 className="mt-8 text-xl font-bold">Életrajz</h2>
						<p className="mt-3 whitespace-pre-line leading-7 text-gray-300">
							{actor.biography || "Ehhez a színészhez nem érhető el életrajz."}
						</p>
					</div>
				</div>

				{known_for.length > 0 && (
					<section className="mt-10">
						<h2 className="mb-4 text-2xl font-bold">Ismertebb filmjei</h2>
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
							{known_for.map((movie) => (
								<div key={movie.id} className="rounded-lg border border-white/10 bg-gray-900 p-4">
									<p className="font-semibold">{movie.title || movie.name}</p>
									<p className="mt-1 text-sm text-gray-400">
										{movie.release_date?.slice(0, 4) || "Év nélkül"}
									</p>
								</div>
							))}
						</div>
					</section>
				)}
			</div>
		</section>
	);

};

export default ActorDetails;
