import React from 'react'
import { useEffect, useState } from 'react'
import {UserIcon} from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from '../../redux/slices/users/userSlice';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import ErrorMsg from '../../errorMessage/ErrorMessage';
import SuccessMsg from '../../successMessage/successMessage';

const animatedComponents = makeAnimated();

function Register() {
  const dispatch = useDispatch();
  
  //files
  const[file, setFiles]=useState();
  const[fileError, setFileError] = useState([]);

  const fileHandleChange = (event)=>{
    console.log(event);
    const newFiles = Array.from(event?.target?.files);

    //validation
    const newError = [];

    newFiles.forEach(file=>{
      if(file?.size > 3000000){
        newError.push(`${file?.name} is too large`)
      }
      if (!file?.type?.startsWith('image/')){
        newError.push(`${file.name} is not an image`)
      }
    })
    setFiles(newFiles);
    setFileError(newError);
  }

  //zones
  const zone = ['zone1','zone2','zone3','zone4','nozone'];
  const isAdmin = ['true', 'false'];
  const [zoneOption, setZoneOption] = useState();
  const [adminOption, setAdmin] = useState();

  const{error, loading, isAdded} = useSelector((state)=>state?.users);

  const zoneOptionsCoverted = zone?.map(zone=>{
    return{
      value:zone,
      label:zone,
    }
  })

  const adminOptionsConverted = isAdmin?.map(isAdmin=>{
    return{
      value:isAdmin,
      label:isAdmin,
    }
  })

  //create handle change
  const handelZoneChange = (zone) =>{
    setZoneOption(zone);
  }

  const handelAdminChange = (isAdmin) =>{
    setAdmin(isAdmin);
  }

  const [formData , setFormData] = useState({
    username:'',
    email:'',
    password:'',
    description:'',
  })

  
  const onChange = (e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    let boolAdmin = false;
    if (adminOption?.label === 'true'){
      boolAdmin = true;
      
    }else{
      boolAdmin = false;
      
    }
    console.log(boolAdmin);
    console.log(adminOption?.label);
    let zonesChecker = zoneOption?.label
    dispatch(registerAction({
      ...formData, file, boolAdmin, zonesChecker,
    }));
  }

  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {fileError.length>0 && <ErrorMsg message='file too large or upload an img'/>}
      {isAdded && <SuccessMsg message="User Added Successfully" />}
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
          <label className="block text-sm font-medium text-gray-700">
                  username
          </label>
          <input required type="text" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='username' name="username" value={formData?.username} placeholder='Enter your name' onChange={onChange}/>
          <label className="block text-sm font-medium text-gray-700">
                  email
          </label>
          <input required type="email" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='email' name="email" value={formData?.email} placeholder='Enter your email' onChange={onChange}/>
          <label className="block text-sm font-medium text-gray-700">
                  password
          </label>
          <input required type="password" className="placeholder:text-gray-500 w-full mb-4 px-12 py-5 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='password' name="password" value={formData?.password} placeholder='Enter your password' onChange={onChange}/>
          <label className="block text-sm font-medium text-gray-700">
                  zone
          </label>
          <Select
                  components={animatedComponents}
                  name="zone"
                  value={formData.zone}
                  options={zoneOptionsCoverted}
                  className='w-full mb-4 px-12 py-5'
                  isClearable={true}
                  isLoading={false}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  onChange={(item) => handelZoneChange(item)}
                  required
          />
          <label className="block text-sm font-medium text-gray-700">
                  is a Admin
          </label>
          <Select
                  components={animatedComponents}
                  name="isAdmin"
                  options={adminOptionsConverted}
                  className='w-full mb-4 px-12 py-5'
                  isClearable={true}
                  isLoading={false}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  onChange={(item) => handelAdminChange(item)}
                  required
          />
          <label className="block text-sm font-medium text-gray-700">
                  description
          </label>
          <textarea
                    rows={4}
                    name="description"
                    value={formData?.description}
                    onChange={onChange}
                    placeholder='Enter user description'
                    className="placeholder:text-gray-500 block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm mb-4 px-12 py-5"
                    required
          />
          <label className="block text-sm font-medium text-gray-700">
                  user image
          </label>            
          <div className="mt-1 sm:col-span-2 sm:mt-0 w-full mb-4 px-15 py-5">
                  <div className="flex w-full justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload user picture</span>
                          <input
                            onChange={fileHandleChange}
                            type="file"
                            className=''
                            required
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
            </div>
           

          { loading ?
          <button type="submit" className="mt-5 md:mt-8 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-16 rounded-md">loading</button>:
          <button type="submit" className="mt-5 md:mt-8 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-16 rounded-md">submit</button>}
        </div>
        </form>
        
      </section>
    </>
  )
}

export default Register
