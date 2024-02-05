import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import dummyImage from '../../images/Dummy-img.jpg';
import dummy2Image from '../../images/dummy2-img.jpg';
const projectDetail = [
  {
    projectName: 'Project 1',
    projectDesc :'Engineering is the innovative application of scientific principles to design, build, and optimize solutions. It combines creativity with technical expertise to address complex challenges, shaping the world we live in through the development of cutting-edge technologies and efficient systems. Engineering is the innovative application of scientific principles to design, build, and optimize solutions. It combines creativity with technical expertise to address complex challenges, shaping the world we live in through the development of cutting-edge technologies and efficient systems.',
    projectSolution: 'The effect of such solution has made the items be much more usable and the safety features more valid as tho the thy tho thumo!',
    projectImage: dummyImage, 
  },
  {
    projectName: 'Project 2',
    projectDesc :'Engineering is a multifaceted discipline that applies scientific and mathematical principles to design, develop, and optimize innovative solutions. This field seamlessly blends creativity with technical expertise to address intricate challenges, playing a pivotal role in shaping our world. Through the creation of cutting-edge technologies and efficient systems, engineers contribute significantly to advancements in various industries, fostering progress and enhancing the quality of life for societies worldwide. Engineering embodies the pursuit of knowledge, problem-solving, and the relentless quest for innovation, making it a driving force behind transformative changes in the modern era.',
    projectSolution: 'The effect of such solution has made the items be much more usable and the safety features more valid as tho the thy tho thumo!',
    projectImage: dummy2Image, 
  },
]
function Project() {
  return (
    <div>
      <section className='bg-[#121212] flex flex-col min-h-screen mx-auto  py-4'>
      {projectDetail.map((projects, index) => {
       return(
        <ProjectCard projectDetail={projects} key={index}/>
       )
      })}
      </section>
    </div>
  )
}

export default Project
