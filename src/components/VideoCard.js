import React from 'react'
import { useSelector } from 'react-redux'
import { valueConvertor } from '../utils/constants'
import moment from 'moment'
import { Clock } from 'lucide-react'

const VideoCard = ({info}) => {

  const {snippet, statistics} = info
  const Sidebar = useSelector(store => store.app.isMenuOpen)


  return  (
    <div className={`m-${Sidebar ? '4' : '2'} w-80`}>
      <img className="rounded-lg " alt="thumbnail" src={snippet.thumbnails.medium.url}/>
      <div className="m-2 ">
      <h1 className="font-bold my-2 h-12 overflow-hidden">{snippet.title}</h1>
      <p classname="mt-1 font-bold">{snippet.channelTitle}</p>
      {statistics ? <p classname="mb-1 font-bold">{valueConvertor(statistics.viewCount) } views &bull; {moment(snippet.publishedAt).fromNow()} </p> : <p classname="mb-1 font-bold">125K views &bull; {moment(snippet?.publishedAt).fromNow()}</p>} 
      </div> 
    </div>
  )
}

export default VideoCard

export const LiveVideoCard = ({VideoCard}) => {
  <div>
    <h1 className='bg-red-700 text-black w-10 h-6'>Live</h1>
    <VideoCard />
  </div>
}
