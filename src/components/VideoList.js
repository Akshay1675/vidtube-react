import { Clock } from 'lucide-react'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const VideoList = ({data}) => {
  return (
    <Link to={"/watch?v=" + data.id.videoId}>
    <div className='md:flex m-4 p-2 hover:cursor-pointer'>
      <img className='md:w-[450px] md:h-[250px] rounded-lg mr-4 object-cover ' src={data?.snippet.thumbnails.medium.url} alt='thumbnail'/>
      <div>
        <h2 className='font-bold  md:text-xl mt-3'>{data.snippet.title}</h2>
        {/* <p>{data.snippet}</p> */}
        <div>
            {/* <img src=''/> */}
            <p className='mt-3 font-semibold'>{data.snippet.channelTitle}</p>
            
          <p className='font-light flex mt-2 '><Clock className='mr-2 font-light w-6'/>{moment(data?.snippet?.publishedAt).fromNow()}</p>
          
        </div>
      </div>
    </div>
    </Link>
  )
}

export default VideoList
