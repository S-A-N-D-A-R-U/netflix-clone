import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-56 px-14 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-extrabold'>{title}</h1>
      <p className='p-3 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-slate-300 text-black rounded-sm px-10 py-2 text-sm mr-6 cursor-pointer hover:bg-slate-400'>  Play</button>
        <button className='bg-gray-600 opacity-80 text-white rounded-sm px-7 py-2 text-sm cursor-pointer hover:opacity-35'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
