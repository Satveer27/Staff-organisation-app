import React from 'react'

function Contact() {
  return (
    <section className='contacts relative w-full h-screen overflow-hidden bg-[black] flex justify-center items-center'>
        <div className='star-container container w-4/5 h-5/6 md:h-full lg:h-5/6 py-[50px] flex flex-col justify-center items-center lg:px-[400px] px-4 mb-14'>
            
                <div>
                    <h2 className='text-white font-extrabold text-6xl text-center'>Contact</h2>
                    <input type="text" className=" text-center placeholder:text-gray-500 mt-10 w-4/5 mb-4 px-10 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" placeholder='Enter your email'/>
                    <input type="text" className="text-center placeholder:text-gray-500 mt-10 w-4/5 mb-4 px-10 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" placeholder='Enter your name'/>
                    <input type="text" className="text-center placeholder:text-gray-500 mt-10 w-4/5 mb-4 px-10 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" id='name' name="name" placeholder='Enter your message'/>
                    <button type="submit" className="mt-5 md:mt-8 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-16 rounded-md">submit</button>
                </div>
                
                
           
        </div>
        
        <div className='star star1'></div>
        <div className='star star2'></div>
        <div className='star star3'></div>
        <div className='star star4'></div>
        <div className='star star5'></div>
        <div className='star star6'></div>
        <div className='star star7'></div>
        <div className='star star8'></div>
    </section>
  )
}

export default Contact
