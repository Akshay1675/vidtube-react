import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex dark:bg-[#0f0f0f] transition-bg'>
      <div>
      <Sidebar />
      </div>
      <Outlet />
    </div>
  )
}

export default Body
