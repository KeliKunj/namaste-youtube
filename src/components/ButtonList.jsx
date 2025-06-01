import React from 'react'

const ButtonList = ({name}) => {
  return (
    <div>
      <button className='bg-gray-100 text-sm py-1 px-3 rounded-md hover:bg-black hover:text-white'>{name}</button>
    </div>
  )
}

export default ButtonList