import React from 'react'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[17%] px-14 absolute text-white bg-gradient-to-r from-black'>
      <h1 className=' max-w-[500px] text-6xl font-extrabold'>{title}</h1>
      <p className=' max-w-[600px] p-3 text-lg '>{overview}</p>
      <div className='flex gap-2 '>
        <button className=' inline-flex items-center gap-2.5 bg-white text-black rounded-sm px-5 py-2 text-sm mr-6 cursor-pointer hover:bg-[#ffffffbf]'> <img className="w-6"art="play" src={play_icon}/> Play</button>
        <button className='inline-flex items-center gap-2.5 bg-[#6d6d6eb3] opacity-80 text-white rounded-sm px-7 py-2 text-sm cursor-pointer hover:opacity-60'><img className="w-6" art="info" src={info_icon}/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
