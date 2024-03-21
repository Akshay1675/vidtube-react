import React from 'react'

const Shimmer = () => {
  return (
    <>
    <div className='flex flex-wrap ml-2' >
      {Array(12)
        .fill([])
        .map((e, index) => (
          <div key={index} className=' m-4 p-3 w-80 h-80'>
            <div className='w-80 h-1/2 border rounded-xl bg-gray-200'></div>
            <div
              className='w-[90%] h-[10%] mt-3 border rounded-full
             bg-slate-200 '
            ></div>
            <div className='w-[70%] h-[7%]  mt-3 border rounded-full bg-slate-200'></div>
          </div>
        ))}
    </div>
  </>
  )
}

export default Shimmer
