import React from 'react'
import HeroSection from '../../components/HeroSection';
import CardSection from '../../components/CardSection';
import AboutUs from '../../components/AboutUs';

function Home() {
  return (
    <main className='bg-[#121212] flex flex-col min-h-screen'>
      
        <HeroSection/>
        <CardSection/>
        <AboutUs/>
      
    </main>
  )
}

export default Home;
