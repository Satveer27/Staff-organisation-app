import React from 'react'
import { useEffect, useState } from 'react'
import {UserIcon} from "@heroicons/react/24/solid"


function Register() {
  const [formData , setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })

  const{name, email, password, password2} = formData
  
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
          <UserIcon className='w-14 h-14 mr-3 mt-1'/>
          <h1 className='font-sans font-bold text-6xl'>
            Register
          </h1>
        </div>
        <h2 className='text-gray-500 font-bold'>Create an account here</h2>
        </div>
      </section>

      <section className='mt-10'>
        <form onSubmit={onSubmit}>
        <div className='flex items-center justify-center flex-col lg:px-[400px] px-4 mb-14'>
          <input type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" value={name} placeholder='Enter your name' onChange={onChange}/>
          <input type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" value={email} placeholder='Enter your email' onChange={onChange}/>
          <input type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" value={password} placeholder='Enter your password' onChange={onChange}/>
          <input type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" value={password2} placeholder='Retype your password' onChange={onChange}/>

          <button type="submit" className="mt-5 md:mt-8 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-16 rounded-md">submit</button>
        </div>
        </form>
        
      </section>
    </>
  )
}

export default Register
