import React from 'react'
import MediaCard from './MediaCard'

const MediaList = ({data, type}) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center mt-[20px]'>
      {data &&
        data.map(obj => 
        <MediaCard key={obj.id} media={obj}/>
        )
      }
    </div>
  )
}

export default MediaList
