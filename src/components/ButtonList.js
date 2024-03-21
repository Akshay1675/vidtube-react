import React from 'react'
import Button from './Button'
import { buttons } from '../utils/constants'



const ButtonList = () => {
 
  return (
    <div className='m-2 md:flex md:block mx-2 hidden '>
      {buttons.map((button, index) => <Button key={index} name={button} />)}
    </div>
  )
}

export default ButtonList
