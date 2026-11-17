import React from 'react'
import { getVote, img_300 } from '../utils'

const MediaCard = ({ media }) => {
  return (
    <div className="card bg-gray-300 text-gray-800 w-full shadow-sm">
      <figure>
        <img 
          src={img_300+media.poster_path} 
          alt={media.title || media.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{media.title || media.name}</h2>
        <p className='flex justify-between'>
          <span>{media.media_type}</span>
          <span>{media.release_date || media.firs_air_date}</span>
          <span>{getVote(media.vote_average)}</span>
        </p>
      </div>
    </div>
  )
}

export default MediaCard
