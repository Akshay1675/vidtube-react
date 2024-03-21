import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../utils/appSlice'

const MainContainer = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(openSidebar())
  })
  return (
    <div>
      <ButtonList />
      <VideoContainer />

    </div>
  )
}

export default MainContainer
