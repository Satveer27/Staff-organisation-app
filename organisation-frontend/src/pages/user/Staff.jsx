import React, { useEffect } from 'react'
import EmployeeCard from '../../components/EmployeeCard'
import { useSelector, useDispatch } from 'react-redux';
import {getUserZonesAction} from '../../redux/slices/users/userSlice';
import LoadingComponent from '../../components/LoadingComponent';

function Staff() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserZonesAction())
  },[dispatch]);
  
  const {zones: usersZones, loading, error} = useSelector((state) => state.users); 
  const { status, msg, ...zones } = usersZones;
  console.log()
  return (


<section className='relative bg-[#121212]'>
{loading ? (<section className='relative bg-[#121212] justify-center flex w-full h-[380px]'><LoadingComponent/></section>) :<>
    {Object.keys(zones).map((zoneKey, index) => (
      <section key={index} className="relative bg-[#121212]">
        <div className='text-center py-10'>
          <h5 className='text-gray-50 text-4xl mx-auto leading-normal font-bold mb-12'>
            <u>{`${zoneKey}`}</u>
          </h5>
        </div>
        <div className='mt-15 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-10 xl:gap-40'>
          {zones[zoneKey].map((employee, employeeIndex) => (
            <EmployeeCard key={employeeIndex} user={employee} />
          ))}
        </div>
      </section>
    ))}


</>}
    
    
  </section>
  
  )
}

export default Staff
