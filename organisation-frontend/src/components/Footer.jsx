import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
  <div className='bg-[black] items-center justify-center flex py-[70px]'>
    <div className='container  max-w-[1170px] '>
      <div className='flex flex-wrap'>
        <div className='w-1/3 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[35px] font-medium relative'>Quick links</h4>
          <ul className='ul-tag'>
              <li><a href='#'>about us</a></li> 
              <li><a href='#'>projects</a></li> 
          </ul>
        </div>
        <div className='w-1/3 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[30px] font-medium relative'>Contact</h4>
          <ul className='ul-tag'>
              <li><a href='#'>phone number</a></li> 
              <li><a href='#'>Contact us</a></li> 
              <li><a href='#'>Company location</a></li> 
          </ul>
        </div>
        <div className='w-1/3 px-[15px]'>
          <h4 className='tags text-lg text-white uppercase mb-[30px] font-medium relative'>Follow us</h4>
            <div className='social-links'>
              <a href='#'><i><FontAwesomeIcon icon={faFacebook}/></i></a>
              <a href='#'><i><FontAwesomeIcon icon={faTwitter}/></i></a>
              <a href='#'><i><FontAwesomeIcon icon={faInstagram}/></i></a>
              <a href='#'><i><FontAwesomeIcon icon={faLinkedin}/></i></a>
            </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Footer;
