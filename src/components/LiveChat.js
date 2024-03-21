import React from 'react'

const LiveChat = ({name, message, img}) => {
    
  return (
    <div className='py-2 hover:bg-slate-200'>
        <div className='flex '>
        <img className='h-8 rounded-full' alt='avtar' src={img?img : "https://randomuser.me/api/portraits/men/12.jpg"}/>
        <span className="ml-2"><span className='font-bold px-2'>{name}</span> {message}</span>
        
        </div>
    
      
    </div>
  )
}

export default LiveChat
