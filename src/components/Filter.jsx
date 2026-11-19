import React from 'react'

const Filter = ({type, setType}) => {
  return (
    <div className='flex justify-center gap-4 p-4'>
      <label>
        <input
          type="radio"
          name="media-type"
          value="movie"
          className="radio radio-warning"
          checked={type === 'movie'}
          onChange={(e) => setType(e.target.value)}
        />
        &nbsp; Movies
      </label>
      <label>
        <input
          type="radio"
          name="media-type"
          value="tv"
          className="radio radio-warning"
          checked={type === 'tv'}
          onChange={(e) => setType(e.target.value)}
        />
        &nbsp; Tv Shows
      </label>
    </div>
  )
}

export default Filter
