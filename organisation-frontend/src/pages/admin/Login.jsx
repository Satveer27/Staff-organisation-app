import React from 'react'
import { useEffect, useState } from 'react'
import {UserIcon} from "@heroicons/react/24/solid"


function Login() {
  const [formData , setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })

  const{email, password} = formData
  
  const onChange = ()=>{

  }

  const onSubmit = (e) =>{
    e.preventDefault();
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
        <form onSubmit={onSubmit}>
        <div className='flex items-center justify-center flex-col lg:px-[400px] px-4 mb-14 '>
          <input type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" value={email} placeholder='Enter your email' onChange={onChange}/>
          <input type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" value={password} placeholder='Enter your password' onChange={onChange}/>
          <button type="submit" className="mt-5 md:mt-8 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-16 rounded-md">submit</button>
        </div>
        </form>
        
      </section>
    </>
  )
}

export default Login