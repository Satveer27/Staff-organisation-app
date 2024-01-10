import React from 'react'
import HeroSection from '../../components/HeroSection';
import CardSection from '../../components/CardSection';

function Home() {
  return (
    <main className='bg-[#121212] flex flex-col min-h-screen'>
      
        <HeroSection/>
        <CardSection/>
      
    </main>
  )
}

export default Home;
