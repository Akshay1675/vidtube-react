import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants'
import VideoList from './VideoList'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSideBar, openSidebar } from '../utils/appSlice'

const SearchContainer = () => {
    const dispatch = useDispatch()
    const [searchResults, setSearchResults] = useState([])
    const [search] = useSearchParams()
    const query = search.get("search_query")
    useEffect(() => {
        getSearchList()
        dispatch(openSidebar())
    }, [query])

    const getSearchList = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + query + "&type=video&key=" + YOUTUBE_API_KEY)
        const json = await data.json()
        setSearchResults(json.items)
    }
  return (
    <div>
      {searchResults?.map((result) => <VideoList data={result}/>)}
      
    </div>
  )
}

export default SearchContainer
