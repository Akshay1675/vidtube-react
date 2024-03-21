import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import LiveChatContainer from './LiveChatContainer'
import { YOUTUBE_API_KEY, YOUTUBE_SINGLE_VIDEO_URL, valueConvertor } from '../utils/constants'
import moment from 'moment'
import { Clock, CopyPlus, Save, Share2, ThumbsDown, ThumbsUp, Timer, Users, Watch } from 'lucide-react'

const WatchVideo = () => {
    const [videoDetails, setVideoDetails] = useState(null)
    const dispatch = useDispatch()
    const [search] = useSearchParams()
    const videoKey = search.get("v")
    useEffect(() => {
        dispatch(closeSideBar())
        window.scrollTo(0, 0);
        getVideoDetails()
    }, [])

    const getVideoDetails = async () => {
      const data = await fetch(YOUTUBE_SINGLE_VIDEO_URL + videoKey + "&key=" + YOUTUBE_API_KEY )
      const json = await data.json()
      setVideoDetails(json?.items[0])
    }

  return (
    <div className='w-full'>
      <div className='md:flex w-full'>
        <div className='rounded-lg'>
         <iframe className='w-[410px] h-[250px] md:w-[910px] md:h-[520px] p-2 m-2 rounded-lg'  src={"https://www.youtube.com/embed/" + videoKey + "?autoplay=1"} title="YouTube video player" autoPlay="1" mute="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
         <h3 className='w-[410px] md:w-auto font-bold text-xl m-2 ml-2 p-2'>{videoDetails?.snippet?.title}</h3>
         <div className='md:mx-4'>
          <p className='font-light flex '><Users className='mx-2'/>{valueConvertor(videoDetails?.statistics?.viewCount)} views &bull; <Clock className='mx-2 font-light w-6'/>{moment(videoDetails?.snippet?.publishedAt).fromNow()}</p>
          <div className='flex md:float-end items-center mt-8 -ml-4 md:m-2'>
            <span className='mx-4 flex'><ThumbsUp className='mx-2'/>{valueConvertor(videoDetails?.statistics?.likeCount)}</span>
            <span className='mx-4 '><ThumbsDown className=''/></span>
            <span className='mx-4'><Share2 /></span>
            <span className='mx-4'><CopyPlus /></span> 
          </div>
          <div className='m-2 md:mt-12 py-2 w-[410px] md:w-[900px]'>
            <p className='font-light'>{videoDetails?.snippet?.description.slice(0,250)}</p>
          </div>
          <hr />
         </div>
        </div>
        <div className='w-96 ml-5 md:w-full md:-ml-2'>
          <LiveChatContainer />
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchVideo
