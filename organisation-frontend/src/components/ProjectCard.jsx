import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
function ProjectCard(projectDetail) {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div>
      <section className="text-white projectSection">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <img src={projectDetail?.projectDetail?.projectImage} width={600} height={600} />
          <div className='mt-10 xl:mt-1 lg:mt-1 md:mt-1'>
            <h2 className='text-4xl font-bold text-white mb-4'>{projectDetail?.projectDetail?.projectName}</h2>
            <p className='text-base md:text-lg'> {projectDetail?.projectDetail?.projectDesc}</p>
            <div className='projectButton'>
              <motion.div layout onClick={() => setOpen(!isOpen)} className={`bg-white bigCard`}>
                <motion.h2 layout className='text-black font-bold'>What was the effect?</motion.h2>
                {isOpen && (
                  <motion.div>
                    <p className='pt-10 text-black font-sans'>
                    {projectDetail?.projectDetail?.projectSolution}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
