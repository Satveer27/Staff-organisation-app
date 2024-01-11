import React from 'react'

function AboutUs() {
  return (
    <section className='text-white'>
    <div className='md:grid md:grid-cols-2 items-center gap-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='lg:-ml-4 xl:ml-0 mb-0 sm:mb-0'>
            <div className='blob'></div>
            <div className='ml-44 lg:ml-68 md:ml-56 xl:ml-80'>
            <div className='blob2'></div>
            </div>
        </div>
        <div className='lg:ml-20 md:ml-44 mb-20 xl:mt-0 mt-10 lg:mt-0'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl mt-4 font-extrabold ml-4 text-center'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        About Us</span></h1>
        <p className='text-[#ADB7BE] mt-8 ml-4 text-lg lg:text-xl'>
            We are a company that have been ongoing for the past 32 years and have been the best in the country. We provide many types of services such as 
            engineering etc.We are a company that have been ongoing for the past 32 years and have been the best in the country. We provide many types of services such as 
            engineering etc.We are a company that have been ongoing for the past 32 years and have been the best in the country. We provide many types of services such as 
            engineering etc.
        </p>
        </div>
    </div>
    </section>
  )
}

export default AboutUs
