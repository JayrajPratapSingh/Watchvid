import React from 'react'
import logo from "../assets/logo-transparent-png.png"
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className='w-full grid grid-flow-col p-2 m-2'>
      <div>
      <img className='w-10' src="https://cdn0.iconfinder.com/data/icons/essentials-line/100/Menu-512.png" alt="menu" />
      </div>
      <div>
        <img className='w-20' src={logo} alt="logo" />
      </div>

      <div className='flex text-center'>
        <input type="text" placeholder='search a video' className='text-xl rounded-l-lg border-[1px] border-black border-r-0'/>
        <button className=' bg-black  rounded-r-lg p-[8px] border-[1px] border-black'><CiSearch className='text-2xl text-white' /></button>
      </div>

     <div>
     <FaUserCircle className='text-3xl'/>
     </div>
    </div>
  )
}

export default Header