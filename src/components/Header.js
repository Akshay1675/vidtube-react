import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {toggleSideBar} from "../utils/appSlice"
import { LOGO_URL, YOUTUBE_SEARCH_API } from "../utils/constants"
import { addCache } from '../utils/searchSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toHaveFormValues } from '@testing-library/jest-dom/matchers'
import { ListVideo, Menu, Search, Upload, UserRound, Video } from 'lucide-react'

const Header = () => {
  const [searchText, setSearchText] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cache = useSelector(store => store.search)
 
  useEffect(() => {
    const timer = setTimeout(() => {

      (cache[searchText]) ? setSuggestions(cache[searchText]) : getSearchSuggestions()}, 300)

    return () => {
      clearTimeout(timer)
    }
    
  }, [searchText])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText)
    const json = await data.json()
    setSuggestions(json[1])
    dispatch(addCache({ [searchText]: json[1]}))
  }

  const handleListClick = (s) => {
    navigate("results?search_query=" + s)
    setSearchText(s)
    setShowSuggestions(false)
  }
  const toggleHandler = () => {
    dispatch(toggleSideBar())
  }
  return (
    <div className='p-2 md:p-5 shadow-lg grid grid-flow-col'>
      <div className='flex col-span-1 items-center'>
        
      <Menu onClick={toggleHandler} className='md:mr-4 '/>
        <Link to={"/"}><img className='w-12 md:w-32  ml-2 ' alt='logo' src={LOGO_URL}/></Link>
      </div>
      
      <div className='col-span-10 ml-6 md:ml-28'>
      <div className="w-[78%]  flex items-center">
        <input className='flex h-10 md:w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-800/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} onClick={() => setShowSuggestions(true)} />
        <button className=' p-2 '>{<Search />}</button>
        <Upload size={42} className='mx-4 hidden md:block bg-slate-100 rounded-full p-2 hover:bg-pink-800  hover:rounded-full hover:text-white'/>
        <Video size={42}  className=' hidden md:block hover:bg-pink-800 bg-slate-100 rounded-full p-2 hover:rounded-full hover:text-white'/>
      </div>
        {showSuggestions && <ul className='absolute bg-white w-[11rem] md:w-[35rem] rounded-lg shadow-xl'>
          {suggestions.map((s, index) => <li  key={index} className='px-6 py-3 font-semibold hover:bg-pink-800 hover:text-white hover:cursor-default ' onClick={() => handleListClick(s)}>{s}</li>)}
        </ul>}
      </div>
      <div className='col-span-1 flex items-center'>
      <UserRound  />
      </div>
    </div>
  )
}

export default Header
