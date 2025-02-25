import React from 'react'
//about ,home,contact,Portfolio
const Navbar = () => {
  return (
    <div className=' h-full w-full flex justify-between items-center '>
      <div className='dm-serif-text-regular-italic text-2xl font-medium '>Home</div>
      <div className=' flex gap-3'>
        <div className='dm-serif-text-regular-italic text-xl font-medium'>Portfolio</div>
        <div className='dm-serif-text-regular-italic text-xl font-medium'>contact</div>
        <div className='dm-serif-text-regular-italic text-xl font-medium'>about</div>
      </div>
    </div>
    
  )
}

export default Navbar
