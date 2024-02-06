import React from 'react';
import { Link } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';

function HeroSection() {
  return (
    <section className="lg:py-16">
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left lg:mt-20 md:text-center'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl mt-4 font-extrabold ml-4'><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                We provide</span></h1>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl mt-4 font-extrabold ml-4'>
                <TypeAnimation
                    sequence={[
                        'Engineering Services',
                        1000, 
                        'Electrical Components',
                        1000,
                        'Electrical Advise',
                        1000,
                        'Repair solutions',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />

                </h1>
                <p className='text-[#ADB7BE] mt-8 ml-4 text-lg lg:text-xl'>
                    Your safety is our concern. How you manage electricty can affect your way of life 
                    today and tommorow!
                </p>
                <div className='mt-20 mb-10 flex flex-col items-center sm:flex-row sm:justify-center'>
                <Link to="/contact" className='button-border mb-4 sm:mb-0 sm:mr-4 text-white'>
                <span>Contact Us</span></Link>

                <Link to="/project" className='button-border text-white sm:ml-2'>
                <span>Projects</span></Link>
                </div>
            </div>

            <div className='col-span-5 relative mt-10 md:ml-36 lg:ml-15 flex flex-col'>
            <div class="glowing-circle ml-8 lg:-ml-44 xl:-ml-30 md:ml-2">
                <p className='text-center'>100+<br></br>
                projects <br></br>
                completed!
                </p>
            </div>
            <div class="glowing-circle ml-[350px] mt-96 md:ml-[440px] lg:ml-[145px] xl:ml-[250px] ">
                <p className='text-center'>Top <br></br>
                company in <br></br>
                the country!
                </p>
            </div>
            <img src={require("../images/hero-image5.png")} alt="hero section" width={500} height={600} className='-ml-6 md:ml-2 lg:-ml-60 lg:max-w-5xl xl:-ml-44'/>
            </div>
        </div>
    </section>
    
  )
}

export default HeroSection
