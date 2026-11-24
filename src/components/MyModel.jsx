import React from "react";
import { GetCreadits, getTrailer, img_500 } from "../utils";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "./Carousel";

const MyModel = ({ isOpen, setIsOpen, media }) => {
  const [trailer, setTrailer] = useState(null);
  const mediaType = media.media_type || (media.title ? "movie" : "tv")
  const [credits, setCredits] = useState(null)

  useEffect(() => {
    if (!isOpen || !media?.id) return

    setTrailer(null)
    getTrailer(mediaType, media.id)
      .then(setTrailer)
      .catch(() => setTrailer([]))
    GetCreadits(mediaType, media.id)
      .then(setCredits)
      .catch(() => setCredits([]))
  }, [isOpen, media?.id, mediaType])

  const trailerItem = trailer?.find((item) => item.site === "YouTube") ?? trailer?.[0]
  

  return (
    <div>
      <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box max-w-3xl overflow-hidden bg-gray-900 p-0 text-gray-100">
          <img
            className="h-72 w-full object-cover"
            src={media.backdrop_path ? img_500 + media.backdrop_path : "/Noimg.png"}
            alt={media.title || media.name}
          />
          <h3 className="mt-4 px-5 text-center text-lg font-bold">
            <span className="mr-2">{media.original_title || media.title || media.name}</span>
            <span className="text-sm font-normal">
              ({media.first_air_date?.slice(0, 4) || media.release_date?.slice(0, 4)})
            </span>
          </h3>
          <p className="px-5 py-4 text-sm">{media.overview}</p>
          {credits?.length > 0 && (
            <div className="w-full px-5 pb-2">
              <Carousel credits={credits.slice(0, 10)} />
            </div>
          )}
          <div className="flex items-center justify-center gap-3 px-5 pb-5">
            {trailerItem && (
              <a
                href={`https://youtube.com/watch?v=${trailerItem.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border rounded-2xl"
              >
                <FaYoutube /> Trailer
              </a>
            )}
            <form method="dialog">
              <button
                className="btn border rounded-2xl"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default MyModel;
