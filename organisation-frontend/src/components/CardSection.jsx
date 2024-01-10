import React from 'react'

function CardSection() {
  return (
    <section className='text-white mt-10 lg:mt-0 xl:mt-0 '>
        
        <div class="md:flex-row md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 justify-center flex-col flex lg:ml-6 xl:ml-20">
            <div className='relative w-[300px] lg:w-[300px] h-[400px] md:w-[240px] mt-10'>
                <div className='absolute inset-0 bg-[#2ecc71] rounded-lg blur-xl'></div>
                <div className='relative bg-[#121212] rounded-lg flex w-[300px] lg:w-[300px] h-[400px] md:w-[240px]'>
                    <h2 className='flex mt-10 ml-4 font-extrabold text-4xl absolute'>We always aim higher</h2>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mt-44 ml-4 absolute'>Our aim is to produce the highest quality of service for our customers. 
                    We always prioritise raising the bar and do not settle for whats just given.</p>
                </div>
            </div>
            <div className='relative w-[300px] lg:w-[300px] h-[400px] md:w-[240px] mt-10'>
                <div className='absolute inset-0 bg-pink-600 rounded-lg blur-xl'></div>
                <div className='relative bg-[#121212] rounded-lg flex w-[300px] lg:w-[300px] h-[400px] md:w-[240px]'>
                    <h2 className='flex mt-10 ml-4 font-extrabold text-4xl absolute'>We always aim higher</h2>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mt-44 ml-4 absolute'>Our aim is to produce the highest quality of service for our customers. 
                    We always prioritise raising the bar and do not settle for whats just given.</p>
                </div>
            </div>
            <div className='relative w-[300px] lg:w-[300px] h-[400px] md:w-[240px] mt-10'>
                <div className='absolute inset-0 bg-[#03e9f4] rounded-lg blur-xl'></div>
                <div className='relative bg-[#121212] rounded-lg flex w-[300px] lg:w-[300px] h-[400px] md:w-[240px]'>
                    <h2 className='flex mt-10 ml-4 font-extrabold text-4xl absolute'>We always aim higher</h2>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mt-44 ml-4 absolute'>Our aim is to produce the highest quality of service for our customers. 
                    We always prioritise raising the bar and do not settle for whats just given.</p>
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default CardSection
