import React from 'react'
import { useState } from 'react'
import {UserIcon} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../redux/slices/users/userSlice';
import ErrorMsg from '../../errorMessage/ErrorMessage';


function Login() {
  const dispatch = useDispatch();
  const [formData , setFormData] = useState({
    email:'',
    password:'',
  })

  const{email, password} = formData
  
  const onChange = (e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) =>{
    console.log(email,password);
    e.preventDefault();
    dispatch(loginAction({email,password}));
  }

  //select store data
  const{error, loading, userInfo} = useSelector((state)=>state?.users?.userAuth);
  console.log(error, loading, userInfo);

  //redirect
  if(userInfo?.userFound?.isAdmin){
    window.location.href = '/admin/dashboard';
  }else if(userInfo?.userFound){
    window.location.href = '/'
  }

  return (
    <>
      <section>
        <div className='flex items-center justify-center flex-col'>
        <div className='flex flex-row mb-5 mt-10'>
          <h1 className='font-sans font-bold text-6xl'>
            Sign in
          </h1>
        </div>
        <h2 className='text-gray-500 font-bold'>Sign in here</h2>
        </div>
      </section>

      <section className='mt-10'>
        {/* errr */}
        {error && <ErrorMsg message={error?.message}/>}
        <form onSubmit={onSubmit}>
        <div className='flex items-center justify-center flex-col lg:px-[400px] px-4 mb-14 '>
          <input type="email" className="placeholder:text-gray-500 w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id="email" name="email" value={email} placeholder='Enter your email' onChange={onChange}/>
          <input type="password" className="placeholder:text-gray-500 w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="password" id="password" value={password} placeholder='Enter your password' onChange={onChange}/>
          { loading ? 
          <button disabled className="mt-5 md:mt-8 bg-gray-800 text-white font-bold font-heading py-5 px-16 rounded-md">loading</button>:
          <button type="submit" className="mt-5 md:mt-8 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-16 rounded-md">submit</button>
          }
        </div>
        </form>
        
      </section>
    </>
  )
}

export default Login