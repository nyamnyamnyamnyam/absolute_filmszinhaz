import React from 'react'
import MediaCard from './MediaCard'
import { getTitle } from '../utils'

const MediaList = ({data, type}) => {
  return (
    <section className='mt-5'>
      <h2 className='text-center font-bold text-white p-3 text-2xl'>{getTitle(type)}</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-4 justify-center'>
        {data && data.map(obj => (
          <MediaCard key={obj.id} media={obj}/>
        ))}
      </div>
    </section>
  )
}

export default MediaList
