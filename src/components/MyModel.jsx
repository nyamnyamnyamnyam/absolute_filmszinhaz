import React from "react";
import { getTrailer, img_500 } from "../utils";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";

const MyModel = ({ isOpen, setIsOpen, media }) => {
  const [trailer, setTrailer] = useState(null);
  const mediaType = media.media_type || (media.title ? "movie" : "tv")

  useEffect(() => {
    if (!isOpen || !media?.id) return

    setTrailer(null)
    getTrailer(mediaType, media.id)
      .then(setTrailer)
      .catch(() => setTrailer([]))
  }, [isOpen, media?.id, mediaType])

 /* const getytTrailer = () => {
    if(trailer && trailer.lenght > 0){
        const trailerYoutube = trailer.find((obj) => obj.site == "Youtube")
        return trailerYoutube ? trailerYoutube :  null
    }
  }
*/
  const trailerItem = trailer?.find((item) => item.site === "YouTube") ?? trailer?.[0]
    

  return (
    <div>
      <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box text-gray-100 flex flex-col items-center max-w-200 w-fit ">
          <img
            className="w-full"
            src={img_500 + media.backdrop_path}
            alt={media.title}
          />
          <h3 className="font-bold text-lg mt-3">
            <span className="mr-4">{media.original_title}</span>
            <span>{media.first_air_date || media.release_date}</span>
          </h3>
          <p className="py-4">{media.overview}</p>
          <div className="modal-action p-4 flex justify-between">
            {trailerItem && (
              <a
                href={`https://youtube.com/watch?v=${trailerItem.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn  border rounded-2xl"
              >
                <FaYoutube /> Trailer
              </a>
            )}
            <form method="dialog" className="">
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
