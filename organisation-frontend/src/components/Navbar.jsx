import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"


function Navbar() {
  const[navbarOpen, setNavbarOpen]= useState(false)
  return (
    <header className='sticky z-50 top-0'>
    <nav className='bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto p-6 py-3'>
        <Link to="/" className='text-3xl md:text-4xl text-white font-semibold'>LOGO</Link>
        <div className='mobile-menu block md:hidden'>
          {
            navbarOpen ? (
              <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
              </button>
            ):(
              <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5'/>
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <li><Link to="/login" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Staff</Link></li>
            <li><Link to="/login" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link></li>
            <li><Link to="/login" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link></li>
          </ul>
        </div>
      </div>
      {navbarOpen ? 
        <ul className='flex flex-col py-4 items-center'>
            <li><Link to='/login' className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Staff</Link></li>
            <li><Link to="/login" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link></li>
            <li><Link to="/login" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link></li>
        </ul>
      :null}
    </nav>
    </header>
    
  )
}

export default Navbar
