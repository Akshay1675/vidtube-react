import { Book, CableCar, CircleUserRound, Computer, Gamepad, Heart, History, Home, MoveIcon, Music, Star, Sword, TimerIcon, Video } from 'lucide-react'
import React from 'react'
import {useSelector} from "react-redux"

const Sidebar = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen)
  return !menuOpen ? null : (
    <div className='md:w-56 border-r border-r-gray-400  my-4 mx-4'>
      <div>
        <ul className=''>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Home className='mr-2'/><p className='hidden md:block'>Home</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Heart size={24} className='mr-2'/><p className='hidden md:block'>Following</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><CircleUserRound className='mr-2'/><p className='hidden md:block'>Premium</p></li>
        </ul>
      </div>
      <div>
        <h1 className='hidden md:block font-extralight p-2 mt-2 border-b border-b-gray-300'>Lists</h1>
        <ul className=''>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><TimerIcon className='mr-2'/><p className='hidden md:block'>Watch Later</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Star size={24} className='mr-2'/><p className='hidden md:block'>Favorites</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Video className='mr-2'/><p className='hidden md:block'>Playlists</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><History className='mr-2'/><p className='hidden md:block'>History</p></li>
        </ul>
      </div>
      <div>
        <h1 className='hidden md:block font-extralight p-2 mt-2 border-b border-b-gray-300'>Categories</h1>
        <ul className=''>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Star className='mr-2'/><p className='hidden md:block'>Featured</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Book size={24} className='mr-2'/><p className='hidden md:block'>Education</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><CableCar className='mr-2'/><p className='hidden md:block'>Lifestyle</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Computer className='mr-2'/><p className='hidden md:block'>Tech</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Gamepad className='mr-2'/><p className='hidden md:block'>Gaming</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><MoveIcon className='mr-2'/><p className='hidden md:block'>Comedy</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg'><Music className='mr-2'/><p className='hidden md:block'>Music</p></li>
          <li className='flex my-1 p-2 hover:bg-slate-300 hover:rounded-lg  border-b border-b-gray-300'><Sword className='mr-2 'Sports/><p className='hidden md:block'>Sports</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
