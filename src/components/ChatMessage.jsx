import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='p-1 flex items-center mx-3'>
    <img src='https://yt4.ggpht.com/ytc/AIdro_nsrz_SX8vDDIfbqE8THpPpyDzk3P6NyRuS0rJ9TNg6Esk=s64-c-k-c0x00ffffff-no-rj' alt='user' className='rounded-full h-6 w-6 mr-2' />
    <h5 className='font-bold text-xs text-gray-400'>{name}</h5>
    <p className='mx-4 text-xs'>{message}</p>
    </div>
  )
}

export default ChatMessage