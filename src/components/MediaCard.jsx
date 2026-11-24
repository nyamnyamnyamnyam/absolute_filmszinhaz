import React from 'react'
import { img_300 } from '../utils'
import { Rating } from './Rating'
import MyModel from './MyModel'
import { useState } from 'react'

const MediaCard = ({ media }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className="card bg-gray-300 text-gray-800 w-full shadow-sm">
      <figure  onClick={() => setIsOpen(true)}>
        <img 
          src={media.poster_path ? img_300 + media.poster_path : "Noimg.png"} 
          alt={media.title || media.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{media.title || media.name}</h2>
        <p className='flex justify-between'>
          <span>{media.media_type}</span>
          <span>{media.release_date || media.firs_air_date}</span>
          <Rating vote={media.vote_average}/>
        </p>
      </div>
    </div>
    {isOpen && <MyModel {...{isOpen, setIsOpen, media}} />}  </>
  )
}

export default MediaCard
