import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-80'>
        <div className='animate-spin border-3 border-t-transparent w-7 h-7 scale-200 rounded-full border-purple-600 '></div>
    </div>
  )
}

export default Loading