import React, { useState } from 'react'
import { BsCamera2 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
//about ,home,contact,Portfolio
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  
  const handleOnClickEntry=()=>{
    setIsOpen(true)
  }
  const handleOnClickExit=()=>{
    setIsOpen(false)
  }
  return (
    <div className=' h-full w-full flex justify-between items-center '>
      <div className=' text-white '>
      <BsCamera2 className='h-[40px] w-[40px]'/>
      </div>
      <div className='hidden sm:flex gap-3'>
        <div className='young-serif-regular text-xl text-white font-light'>Portfolio</div>
        <div className='young-serif-regular text-xl text-white font-light'>Contact</div>
        <div className='young-serif-regular text-xl text-white font-light'>About</div>
      </div>
      <div className='sm:hidden text-slate-600'>
      <GiHamburgerMenu onClick={handleOnClickEntry}/>
      {
        isOpen && <div className='w-[100vw] h-[100vh] left-[-10vw] top-0  absolute backdrop-blur-md z-[110]'>
              
              <div className='h-screen text-3xl font-semibold flex flex-col items-center justify-center '>
                <div><a>Porfolio</a></div>
                <div><a>Contact</a></div>
                <div><a>About</a></div>
                <RxCross2 className='hover' onClick={handleOnClickExit}/>
              </div>
        </div>
      }
      </div>
    </div>
    
  )
}

export default Navbar
