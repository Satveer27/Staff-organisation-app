import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Bars3Icon, XMarkIcon, UserIcon, ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/solid"
import { logoutAction } from '../redux/slices/users/userSlice';
import { useDispatch } from 'react-redux';

function AdminNavbar() {
  const dispatch = useDispatch();
  const[navbarOpen, setNavbarOpen]= useState(false)
  //get login user from local storage
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const isAdmin = user?.userFound?.isAdmin ? true : false;
  const isLoggedin = user?.token ? true : false;

  console.log(isLoggedin);

  const logoutHandler = ()=>{
    dispatch(logoutAction()).then(()=>{
      window.location.reload();
    });
  }

  return (
    <header className='sticky z-50 top-0'>
    <nav className='bg-[#121212]'>
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
                <Bars3Icon className='h5- w-5'/>
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
          {isLoggedin && <li>
                          <button onClick={logoutHandler} className="w-7 h-7 pt-1 text-grey-600">
                          
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                          </svg>
                          </button>
                          </li>
              }
            {isAdmin && 
            <li><Link to="/admin/dashboard" className='flex flex-row py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            dasboard
            </Link>
            </li>}
            {!isAdmin && <li>
            <Link to="/admin/login" className='flex flex-row py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            <ArrowRightStartOnRectangleIcon className='h-7 w-10 pt-1'/>
            <h1>Login</h1>
            </Link>
            </li>}
            {isAdmin && 
            <li><Link to="/admin/register" className='flex flex-row py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            <UserIcon className='h-7 w-10 pt-1'/>
            Register
            </Link>
            </li>}
            
          </ul>
        </div>
      </div>
      {navbarOpen ? 
        <ul className='flex flex-col py-4 items-center'>
          {isLoggedin && <li>
                          <button onClick={logoutHandler} className="w-7 h-7 pt-1 text-grey-600">
                          
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                          </svg>
                          </button>
                          </li>
            }
            {isAdmin && 
            <li><Link to="/admin/register" className='flex flex-row py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            <UserIcon className='h-7 w-10 pt-1'/>
            Dashboard
            </Link>
            </li>}
            <li>
            <Link to="/admin/login" className='flex flex-row py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            <ArrowRightStartOnRectangleIcon className='h-7 w-10 pt-1'/>
            <h1>Login</h1>
            </Link>
            </li>
            
            {isAdmin && 
            <li><Link to="/admin/register" className='flex flex-row py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            <UserIcon className='h-7 w-10 pt-1'/>
            Register
            </Link>
            </li>}
            
        </ul>
      :null}
    </nav>
    </header>
    
  )
}

export default AdminNavbar;
