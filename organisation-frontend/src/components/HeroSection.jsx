import React from 'react';
import { Link } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';

function HeroSection() {
  return (
    <section className="lg:py-16">
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left lg:mt-20'>
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
            <div className='mt-20 mb-10'>
            <Link to="/" className='button-border ml-4 text-white'>
            <span>Contact Us</span></Link>

            <Link to="/" className='button-border ml-20 text-white'>
            <span>Contact Us</span></Link>
            </div>
        </div>

        <div className='col-span-5 relative mt-10'>
        <div class="glowing-circle">
            <p className='text-center'>100+<br></br>
            projects <br></br>
            completed!
            </p>
        </div>
        <div class="glowing-circle ml-96">
            <p className='text-center'>Top <br></br>
            company in <br></br>
            the country!
            </p>
        </div>
        <img src={require("../images/hero-image5.png")} alt="hero section" width={500} height={600} className='absolute'/>
        </div>
    </div>
    </section>
    
  )
}

export default HeroSection
