import React, { useEffect, useState } from 'react'
import { TAB_VIDEO_URL, YOUTUBE_API_KEY, YOUTUBE_VIDEO_URL } from '../utils/constants'
import VideoCard from "./VideoCard"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'


const VideoContainer = () => {

  const currentTab = useSelector(store => store.app.mainContainerStatus)
  const [videoList, setVideoList] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (currentTab === "All") ? getVideos() : tabVideos()
  },[currentTab]) 
   const getVideos = async () => {
     setLoading(true)
      const data = await fetch(YOUTUBE_VIDEO_URL)
      const json = await data.json()
      setVideoList(json.items)
      setLoading(false)
   }

   const tabVideos = async () => {
    setLoading(true)
      const data = await fetch(TAB_VIDEO_URL + currentTab +  " &type=video&key=" + YOUTUBE_API_KEY)
      const json = await data.json()
      setVideoList(json.items)
      setLoading(false)

      
   }


   
  return loading ? <Shimmer /> : (
    <div className=" md:ml-2 md:flex md:flex-wrap ">
      {videoList?.map((video,i) => <Link key={video.id} to={(currentTab === "All") ? "/watch?v=" +video.id : "/watch?v=" +video.id.videoId}><VideoCard  info={video} /></Link>)}
    </div>
  )
}

export default VideoContainer
       